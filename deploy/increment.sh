#!/usr/bin/env bash

# Get needed versions from a
THEME_CURRENT_VERSION=$(awk '/    Version/{print $NF}' style.css)
THEME_NEXT_VERSION=$(echo $PLUGIN_CURRENT_VERSION | awk -F. -v OFS=. 'NF==1{print ++$NF}; NF>1{$NF=sprintf("%0*d", length($NF), ($NF+1)); print}')

# Replace versions with new version
# - In main file
sed -i "" "s/${PLUGIN_CURRENT_VERSION}/${THEME_NEXT_VERSION}/g" style.css
# - In versin file
echo "{\"version\": \"${THEME_NEXT_VERSION}\"}" > version.json

echo "New version: "$THEME_NEXT_VERSION

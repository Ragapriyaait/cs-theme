<?php
function my_theme_enqueue_styles() { 
 wp_enqueue_style( 'style-parent', get_stylesheet_directory_uri() . '/includes/css/bootstrap.min.css'  );
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
 }

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

 
function my_load_jquery() {
/* load the minified script Library from the Child Theme Folder */
wp_enqueue_script(
    'custom-script',
    get_stylesheet_directory_uri() . '/includes/js/jquery.js',
    array( 'jquery' )
);

wp_enqueue_script(
    'custom-bootstrap',
    get_stylesheet_directory_uri() . '/includes/js/bootstrap.min.js',
    array( 'jquery' )
);
 
/* load your custom script from the Child Theme Folder */
    wp_enqueue_script( 
    'parent-js',
    get_stylesheet_directory_uri() . '/includes/js/childtheme.js',
    array(),
    '4.6.5',
    true 
);}
 
add_action( 'wp_enqueue_scripts', 'my_load_jquery' );

function custom_content_after_body_open_tag() {

    ?>

    <div class="kbs_shortcode"><?php echo do_shortcode( '[kbs_search  excerpt="0" orderby="title" order="ASC"]' ); ?></div>

    <?php

}

add_action('after_body_open_tag', 'custom_content_after_body_open_tag');



function user_login_redirect( $url, $request, $user ){
    if( $user && is_object( $user ) && is_a( $user, 'WP_User' ) ) {
        if( $user->has_cap( 'Student' ) ) {
            $url = home_url();
        } else {
            $url = home_url();
        }
}
return $url;
}
add_filter( 'login_redirect', 'user_login_redirect', 10, 3 );
//require_once(get_stylesheet_directory_uri().'/deploy/updater.php' );
require_once('C:/xampp/htdocs/lifter/wp-content/themes/twentynineteen-child/deploy/updater.php');

wpme_cs_theme_updater_init(__FILE__);




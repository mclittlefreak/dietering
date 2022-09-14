<?php

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our theme. We will simply require it into the script here so that we
| don't have to worry about manually loading any of our classes later on.
|
*/

if (! file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
    wp_die(__('Error locating autoloader. Please run <code>composer install</code>.', 'sage'));
}

require $composer;

/*
|--------------------------------------------------------------------------
| Register The Bootloader
|--------------------------------------------------------------------------
|
| The first thing we will do is schedule a new Acorn application container
| to boot when WordPress is finished loading the theme. The application
| serves as the "glue" for all the components of Laravel and is
| the IoC container for the system binding all of the various parts.
|
*/

try {
    \Roots\bootloader();
} catch (Throwable $e) {
    wp_die(
        __('You need to install Acorn to use this theme.', 'sage'),
        '',
        [
            'link_url' => 'https://docs.roots.io/acorn/2.x/installation/',
            'link_text' => __('Acorn Docs: Installation', 'sage'),
        ]
    );
}

/*
|--------------------------------------------------------------------------
| Register Sage Theme Files
|--------------------------------------------------------------------------
|
| Out of the box, Sage ships with categorically named theme files
| containing common functionality and setup to be bootstrapped with your
| theme. Simply add (or remove) files from the array below to change what
| is registered alongside Sage.
|
*/

collect(['setup', 'filters'])
    ->each(function ($file) {
        if (! locate_template($file = "app/{$file}.php", true, true)) {
            wp_die(
                /* translators: %s is replaced with the relative file path */
                sprintf(__('Error locating <code>%s</code> for inclusion.', 'sage'), $file)
            );
        }
    });

/*
|--------------------------------------------------------------------------
| Enable Sage Theme Support
|--------------------------------------------------------------------------
|
| Once our theme files are registered and available for use, we are almost
| ready to boot our application. But first, we need to signal to Acorn
| that we will need to initialize the necessary service providers built in
| for Sage when booting.
|
*/

add_theme_support('sage');

use Shuchkin\SimpleXLSX;

function add(){




    if ($xlsx = SimpleXLSX::parse(ABSPATH.'301.xlsx')) {
        $fp = fopen(ABSPATH.'data.txt', 'a');



        foreach ($xlsx->rows() as $row) {
            if(str_contains($row[1],'dietering.estima.tech/logistyka')){
                $target_url =str_replace('http://dietering.estima.tech/logistyka','dietering.com/miasto',$row[1]);
            }else{
                $target_url =str_replace('http://dietering.estima.tech','dietering.com',$row[1]);
            }
            fwrite($fp, 'Redirect 301 '.$row[0].' '.$target_url.''.PHP_EOL);

        }
        fclose($fp);
    } else {
        echo SimpleXLSX::parseError();
    }
    wp_redirect(site_url('/').'asdasd');
    exit;
}

add_action('admin_post_add', 'add');
add_action('admin_post_nopriv_add', 'add');







function xls(){
	
	$data = [];
	
	$lastposts = get_posts(['post_type' => 'kalkulator', 'post_status' => 'draft', 'posts_per_page' => -1]);
	 
 
if ( $lastposts ) {
    foreach ( $lastposts as $post ) :
        setup_postdata( $post ); 
	
	
	array_push($data, [
		'plec' => get_field('plec', $post),
		'wzrost' => get_field('wzrost', $post),
		'waga' => get_field('waga', $post),
		'wiek' => get_field('wiek', $post),
		'aktywnosc_fizyczna' => get_field('aktywnosc_fizyczna', $post),
		'jaki_jest_twoj_cel' => get_field('jaki_jest_twoj_cel', $post),
		'informacja_dodatkowa' => get_field('informacja_dodatkowa', $post),
		'e-mail' => get_field('e-mail', $post),
		'newsletter' => get_field('newsletter', $post)
	]);
	
	
    endforeach; 
    wp_reset_postdata();
}
	 
	 
	
	
	 function cleanData(&$str)
  {
    $str = preg_replace("/\t/", "\\t", $str);
    $str = preg_replace("/\r?\n/", "\\n", $str);
    if(strstr($str, '"')) $str = '"' . str_replace('"', '""', $str) . '"';
  }

  // filename for download
  $filename = "bmi_" . date('Ymd') . ".xls";

  header("Content-Disposition: attachment; filename=\"$filename\"");
  header("Content-Type: application/vnd.ms-excel");

  $flag = false;
  foreach($data as $row) {
    if(!$flag) {
      // display field/column names as first row
      echo implode("\t", array_keys($row)) . "\r\n";
      $flag = true;
    }
    array_walk($row, __NAMESPACE__ . '\cleanData');
    echo implode("\t", array_values($row)) . "\r\n";
  }
  exit;
	
	 
	
	
	
}

	
	
	
add_action('admin_post_xls', 'xls');
add_action('admin_post_nopriv_xls', 'xls');



add_action('admin_menu', function(){
	
	
	add_submenu_page(
        'edit.php?post_type=kalkulator',
        'Eksport',
        'Eksport',
        'manage_options',
        'kalkulator',
        'callback_kalkulator' );
	
	add_submenu_page(
        'edit.php?post_type=menu',
        'Eksport',
        'Eksport',
        'manage_options',
        'menu',
        'callback_menu' );
	
	
	
	
});
 
 
function callback_kalkulator(){?>
		
	
	 <form action="<?php echo admin_url('admin-post.php');?>" method="post">
	<div class="flex justify-center">
		<input type="hidden" name="action" value="xls">
			  <button name="submit" value="XLS" class="mt-8 duration-150 bg-[#028523] p-4 rounded-full hover:bg-[#2d2d2d] text-sm text-white font-bold uppercase">
				  Pobierz XLS
			  </button>
      </div>
	</form>
	
	
		
<?php }


function callback_menu(){?>


		<div class="flex justify-center mt-4">
		
		
		<form action="<?php echo admin_url('admin-post.php');?>" method="post">
			<?php $the_query = new WP_Query(['post_type' => 'menu', 'posts_per_page' => -1, 'order' => 'ASC', 'orderby' => 'meta_value_num', 'meta_key' => 'data']); ?>
			
			<select name="from">
				<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
				<option><?php the_title(); ?></option>
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
			</select>
			<select name="to">
				<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
				<option><?php the_title(); ?></option>
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>		
			</select>
			<input type="hidden" name="action" value="pdf">
			
			<input type="submit" value="Pobierz PDF">
		</form>
			
	  </div>
	
	
	
	
<?php }





use Mpdf\Mpdf;
 




function pdf(){
	 
	
    $mpdf = new Mpdf();
	
	 
		
	
	
		$from = isset($_POST['from']) ? $_POST['from'] : 'now';
		$to = isset($_POST['to']) ? $_POST['to'] : '+7 day';
 
	
	$html = $from. $to;

$meta_query = ['data' => ['key' => 'data', 'value' => [date('Y-m-d', strtotime($from)), date('Y-m-d', strtotime($to))], 'compare' => 'BETWEEN', 'type' => 'DATE']];
		 
$the_query = new WP_Query(['post_type' => 'menu', 'posts_per_page' => -1, 'order' => 'ASC', 'orderby' => 'data', 'meta_query' => $meta_query]);      
 
 
     while ( $the_query->have_posts() ) : $the_query->the_post(); 
        
	
	$html .= '<h2>' . get_the_title() . '</h2>';
	
	while( have_rows('ostatnie_wpisy') ) : the_row();

        $html .= '<h3>' . get_sub_field('tekst') . '</h3><table style="border-collapse:collapse"><tr>';
        
        foreach( get_sub_field('pole_powtarzalne') as $row ) {
        
        $html .= '<td style="border:1px solid #000;padding:8px;vertical-align:top">' . $row['tekst'] . '<br><br>' . $row['obszar_tekstowy'] . '<br><br>' . $row['liczba'] . '</td>';         
    }
	
	
	$html .= '</tr></table>';
	
	
	
    endwhile;
   


endwhile;  
 
      wp_reset_postdata();  
		
		
		 
		
 
 
		
		
		
		  
			  
			   
    
	
	    $mpdf->WriteHTML($html);

	

 $mpdf->Output('menu.pdf', 'D');
	
	
}


add_action('admin_post_pdf', 'pdf');
add_action('admin_post_nopriv_pdf', 'pdf');

function wpblog_query( $query ) {
    if ( $query->is_archive() && $query->is_main_query() && !is_admin() ) {
        $query->set( 'posts_per_page', 5 );
        if( is_post_type_archive('diety') || $query->get('post_type') === 'diety' ){
            $query->set( 'posts_per_page', -1 );
        }
    }
}
add_action( 'pre_get_posts', 'wpblog_query' );

add_action('wp_ajax_check', 'ajax_check');
add_action('wp_ajax_nopriv_check', 'ajax_check');

function ajax_check(){
    global $wpdb;
    $check_postcode = false;
    $check_city = false;

    if(strlen($_POST['postcode']) === 6){
        $q1 = $wpdb->prepare("SELECT COUNT(*) FROM $wpdb->posts WHERE post_title LIKE %s", [
            $wpdb->esc_like($_POST['postcode']) . ' %%'
        ]);
        $check_postcode = $wpdb->get_var( $q1 ) > 0;
    }
    $q2 = $wpdb->prepare("SELECT COUNT(*) FROM $wpdb->posts WHERE post_title LIKE %s", [
        '__-___ ' . $wpdb->esc_like($_POST['city'])
    ]);
    $check_city = $wpdb->get_var( $q2 ) > 0;

    wp_send_json([
        'postcode' => $check_postcode,
        'city' => $check_city,
    ]);
}
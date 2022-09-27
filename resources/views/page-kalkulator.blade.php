{{--
  Template Name: Kalkulator
--}}

@extends('layouts.app')

@section('content')
<div class="container w-10/12 mx-auto"> 
  <div class="">
	  <h1 class="text-center font-bold text-[31px] lg:leading-[49px] lg:mt-[40px] lg:mb-[14px]">
        Kalkulator
      </h1>
      
      <div class="text-center content">
        <p>
          <span class="font-bold">zdrowy catering dietetyczny</span> - stawiamy na ekologię i życie w zgodzie z naturą
        </p>
      </div>

	  <form action="{{ get_page_link(157) }}#calculator" class="w-full mt-8 mx-auto px-8 pb-8 bg-[#E7F3ED]" autocomplete="off" method="post">
		<div class="w-full mx-auto flex flex-col md:flex-row">
			<div class="md:w-[47%] flex flex-col items-center mt-3 w-full">
			<img src="@asset('images/calculator.png')" class="md:w-[436px]  md:h-[556px]" alt="catering" loading="lazy">
			<div class="flex flex-col md:w-10/12 w-full bg-[#0B8344]/[.01] mx-auto items-center">
				<span class="text-center md:w-4/5 w-full">Jeśli pozostawisz swój dres mailowy skontaktuję sie z Tobą nasz dietetyk </span>
			 
			  <div class="w-full">
				  <input type="email" name="email" class="form-input" placeholder="e-mail">
			  </div>
		  </div>
</div>
			<div class="md:w-[53%] w-full flex flex-col justify-end">
		 

		  <div class="flex flex-wrap ml-[-20px] -mx-4 mt-4 items-center">
			  <div class="px-4 w-full">
				  <div class="flex flex-wrap">
					  <label class="flex items-center mr-4 mt-4 male calc-gender">
						  <input type="radio" name="plec" value="1" id="male" class="male-box" required>
						  <span class="text-sm text-[#2d2d2d] cursor-pointer">Mężczyzna</span>
					  </label>
					  <label class="flex items-center mr-4 mt-4 female calc-gender">
						  <input type="radio" name="plec" value="2" id="female" class="female-box" required>
						  <span for="female" class="text-sm text-[#2d2d2d] cursor-pointer">Kobieta</span>
					  </label>
				  </div>
			  </div>
		  </div>

		  <div class="flex justify-between items-center">

		  <div class="flex flex-wrap flex-col md:w-[31%] w-full items-start">
			  <div class="w-full">
				  <div class="content">
					  <p class="form-text">
						  Wzrost
					  </p>
				  </div>
			  </div>
			  <div class="w-full">
				  <select name="wzrost" class="form-select">
					  @for($i = 150; $i <= 220; ++$i)
											  <option value="{{ $i }}">{{ $i }} cm</option>
				  @endfor
				  </select>
			  </div>
		  </div>

		  <div class="flex flex-wrap flex-col md:w-[31%] w-full items-start">
			  <div class="w-full">
				  <div class="content">
					  <p class="form-text">
						  Waga
					  </p>
				  </div>
			  </div>
			  <div class="w-full">
				  <select name="waga" class="form-select">
					  @for($i = 40; $i <= 150; ++$i)
											  <option value="{{ $i }}">{{ $i }} kg</option>
				  @endfor
				  </select>
			  </div>
		  </div>

		  <div class="flex flex-wrap flex-col md:w-[31%] w-full items-start">
			  <div class="w-full ">
				  <div class="content">
					  <p class="form-text">
						  Wiek
					  </p>
				  </div>
			  </div>
			  <div class="w-full">
				  <select name="wiek" class="form-select">
					  @for($i = 18; $i <= 90; ++$i)
											  <option value="{{ $i }}">{{ $i }} lat</option>
				  @endfor
				  </select>
			  </div>
		  </div>

</div>

		  

		  <div class="flex flex-wrap justify-between -mx-4 items-center">
			  
			  <div class="px-4 w-full radio-box">
				<label>
					<input type="radio" name="cel" value="1">
					<div>
						<span>Chcę schudnąć</span>
					</div>
				</label>
				<label>
					<input type="radio" name="cel" value="2">
					<div>
						<span>Chcę utrzymać wagę</span>
					</div>
				</label>
				<label>
					<input type="radio" name="cel" value="3">
					<div>
						<span>Chcę przytyć</span>
					</div>
				</label>
				<label>
					<input type="radio" name="cel" value="4">
					<div>
						<span>Chcę zbudować masę mięśniowa</span>
					</div>
				</label>
				<label>
					<input type="radio" name="cel" value="5">
					<div>
						<span>Mam problemy zdrowotne</span>
					</div>
				</label>
			  </div>
		  </div>

		  <div class="flex flex-wrap flex-col items-start">
			  <div class="w-full ">
				  <div class="content">
					  <p class="form-text">
						  Poziom aktywności fizycznej
					  </p>
				  </div>
			  </div>
			  <div class="w-full">
				  <select name="aktywnosc" class="form-select">
					  <option value="1.25">chory, leżący w łóżku</option>
					  <option value="1.4">aktywność fizyczna niska</option>
					  <option value="1.6">aktywność fizyczna umiarkowana</option>
					  <option value="1.75">aktywny tryb życia</option>
					  <option value="2">bardzo aktywny tryb życia</option>
					  <option value="2.3">wyczynowe uprawianie sportu</option>
				  </select>
			  </div>
		  </div>

		  <div class="content">
			  <p class="form-text">
				  Specjalne potrzeby
			  </p>
		  </div>

		  <select name="potrzeba" class="form-select">
			  <option value="1">Nie mam specjalnych potrzeb</option>
			  <option value="2">Chcę wyeliminować mięso i jego przetwory</option>
			  <option value="3">Chcę wyeliminować ryby i owoce morza</option>
			  <option value="4">Chcę wyeliminować mięso i ryby</option>
			  <option value="5">Chcę wyeliminować gluten</option>
			  <option value="6">Chcę wyeliminować laktozę</option>
			  <option value="7">Chcę wyeliminować gluten i laktozę</option>
			  <option value="8">Mam problem z gospodarką cukrową (stan przedcukrzycowy, cukrzyca, insulinooporność)</option>
			  <option value="9">Jestem w ciąży (I trymestr)</option>
			  <option value="10">Jestem w ciąży (II trymestr)</option>
			  <option value="11">Jestem w ciąży (III trymestr)</option>
			  <option value="12">Jestem mamą karmiącą ( do 6 m-cy od narodzenia dziecka)</option>
			  <option value="13">Jestem mamą karmiącą ( powyżej 6 m-cy od narodzenia dziecka)</option>
</select>

		  <!-- <div class="flex flex-wrap -mx-4 items-center">
			  <div class="px-4 w-full md:w-1/3">
				  <div class="content">
					  <p>
						  E-mail
					  </p>
				  </div>
			  </div>
			  <div class="px-4 w-full md:w-2/3">
				  <input type="email" name="email" class="form-input">
			  </div>
		  </div> -->

		  <!-- <div class="flex flex-wrap -mx-4 items-center">
			  <div class="px-4 w-full md:w-1/3">
				  <div class="content">
					  <p>
						  Chcę otrzymać ofertę
					  </p>
				  </div>
			  </div>
			  <div class="px-4 w-full md:w-2/3">
				  <div class="flex flex-wrap">
					  <div class="flex items-center mr-4 mt-4">
						  <input type="radio" name="newsletter" value="true" id="true" class="mr-2" required>
						  <label for="true" class="text-sm text-[#2d2d2d] cursor-pointer">Tak</label>
					  </div>
					  <div class="flex items-center mr-4 mt-4">  
						  <input type="radio" name="newsletter" value="false" id="false" class="mr-2" required>
						  <label for="false" class="text-sm text-[#2d2d2d] cursor-pointer">Nie</label>
					  </div>
				  </div>
			  </div>
		  </div> -->
<!-- 
		  <div class="text-[#2d2d2d] mt-4 text-xs">
			  Dane osobowe tj. płeć, wzrost, waga, wiek, aktywność fizyczna, cel, informacje dodatkowe i adres email zbierane przez Administratora są przetwarzane zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz. Urz. UE L 119, s. 1), zwanego RODO; w celach promocyjno-marketingowych.
		  </div> -->

		  <div class="flex justify-center">
			  <input type="hidden" name="honeypot">
			  <button name="submit"  value="true" class="mt-8 duration-150 bg-[#028523] p-4 rounded-full hover:bg-[#2d2d2d] text-sm text-white font-bold uppercase">
				  Pokaż rezultat
			  </button>
      </div>











<?php

 
	 
	if(empty($_POST['honeypot']) && isset($_POST['submit'])){
		



	  $plec = sanitize_text_field($_POST['plec']);
    $wzrost = sanitize_text_field($_POST['wzrost']);
    $waga = sanitize_text_field($_POST['waga']);
    $wiek = sanitize_text_field($_POST['wiek']);
    $aktywnosc = sanitize_text_field($_POST['aktywnosc']);
    $cel = sanitize_text_field($_POST['cel']);
    $potrzeba = sanitize_text_field($_POST['potrzeba']);
    $email = sanitize_text_field($_POST['email']);
    $newsletter = sanitize_text_field($_POST['newsletter']);



if(!empty($email)){
		 
 $to = '';
    $subject = 'Kalkulator';
    $message = 'Płeć: ' . $plec . PHP_EOL . 'Wzrost: ' . $wzrost . PHP_EOL . 'Waga: ' . $waga . PHP_EOL . 'Wiek: ' . $wiek . PHP_EOL . 'Aktywność fizyczna: ' . $aktywnosc . PHP_EOL . 'Jaki jest Twój cel: ' . $cel . PHP_EOL . 'Informacja dodatkowa: ' . $potrzeba . PHP_EOL . 'E-mail: ' . $email . PHP_EOL . 'Newsletter: ' . $newsletter;
    $headers = ['Content-Type: text/html; charset=utf-8', 'From: Dietering <biuro@dietering.com>'];
    
		wp_mail($to, $subject, $message, $headers);
	  
	$post_id = wp_insert_post(['post_content' => $message, 'post_title' => $email, 'post_type' => 'kalkulator']);
	
	update_field('plec', ['', 'Mężczyzna', 'Kobieta'][$plec], $post_id);
	update_field('wzrost', $wzrost, $post_id);
	update_field('waga', $waga, $post_id);
	update_field('wiek', $wiek, $post_id);
	update_field('aktywnosc_fizyczna', ['1.25' => 'chory, leżący w łóżku', '1.4' => 'aktywność fizyczna niska', '1.6' => 'aktywność fizyczna umiarkowana', '1.75' => 'aktywny tryb życia', '2' => 'bardzo aktywny tryb życia', '2.3' => 'wyczynowe uprawianie sportu'][$aktywnosc], $post_id);
	update_field('jaki_jest_twoj_cel', ['', 'Chcę schudnąć', 'Chcę utrzymać masę ciała', 'Chcę zbudować masę ciała'][$cel], $post_id);
	update_field('informacja_dodatkowa', ['', 'Nie mam specjalnych potrzeb', 'Chcę wyeliminować mięso i jego przetwory', 'Chcę wyeliminować ryby i owoce morza', 'Chcę wyeliminować mięso i ryby', 'Chcę wyeliminować gluten', 'Chcę wyeliminować laktozę', 'Chcę wyeliminować gluten i laktozę', 'Mam problem z gospodarką cukrową (stan przedcukrzycowy, cukrzyca, insulinooporność)', 'Jestem w ciąży (I trymestr)', 'Jestem w ciąży (II trymestr)', 'Jestem w ciąży (III trymestr)', 'Jestem mamą karmiącą ( do 6 m-cy od narodzenia dziecka)', 'Jestem mamą karmiącą ( powyżej 6 m-cy od narodzenia dziecka)'][$potrzeba], $post_id);
	update_field('e-mail', $email, $post_id);
	update_field('newsletter', $newsletter, $post_id);
	



}

		
		$bmi = round($waga/(($wzrost/100)*2),2);
			$bmi_waga_min = round(18.5*(($wzrost/100)*2),0);
			$bmi_waga_max = round(24.99*(($wzrost/100)*2),0);
			
			if ($plec == 1)
			{
				$ppm = round((66.5 + (13.75*$waga) + (5.003*$wzrost) - 6.775 *$wiek),0);
			}
			elseif ($plec == 2)
			{
				$ppm = round((655.1 + (9.563*$waga) + (1.85*$wzrost) - 4.676*$wiek),0);
			}
						
			if($cel == 1)
			{
				$cpm = round((($ppm*$aktywnosc)-400),0);
				$codalej = 'Jeśli chcesz schudnąć, możemy pomóc Ci zrobić pierwszy krok z naszymi wygodnymi planami dietetycznymi. Mając do wyboru 1, 2, 3 lub 4 tygodniowe plany dietetyczne zapewniamy, że nie stracisz nic poza wagą!';
			}
			elseif($cel == 2)
			{
				$cpm = round(($ppm*$aktywnosc),0);
				$codalej = 'Jeśli chcesz utrzymać masę, możemy pomóc Ci zrobić pierwszy krok z naszymi wygodnymi planami dietetycznymi. Mając do wyboru 1, 2, 3 lub tygodniowe plany dietetyczne zapewniamy, nie stracisz nic!';
			}
			elseif($cel == 3)
			{
				$cpm = round((($ppm*$aktywnosc)+250),0);
				$codalej = 'Jeśli chcesz zbudować masę, możemy pomóc Ci zrobić pierwszy krok z naszymi wygodnymi planami dietetycznymi. Mając do wyboru 1, 2, 3 lub 4 tygodniowe plany na zwiększone zapotrzebowanie kaloryczne organizmu zapewniamy, że nie stracisz a zyskasz wagę!';
			}?>

<div id="calculator" class="pt-4 content">

<?php 
						
			
				if($bmi<=16){ echo '<p class="font-bold">Twój wskaźnik BMI wynosi '.$bmi.' i oznacza wygłodzenie</p>'; }
			elseif($bmi>=16 && $bmi<=16.99){ echo '<p class="font-bold">Twój wskaźnik BMI wynosi '.$bmi.' i oznacza wychudzenie</p>'; }
			elseif($bmi>=17 && $bmi<=18.49){ echo '<p class="font-bold">Twój wskaźnik BMI wynosi '.$bmi.' i oznacza niedowagę</p>'; }
			elseif($bmi>=18.5 && $bmi<=24.99){ echo '<p class="font-bold">Gratulacje! Twój wskaźnik BMI wynosi '.$bmi.' i oznacza wartość prawidłową.</p>'; }
			elseif($bmi>=25 && $bmi<=29.99){ echo '<p class="font-bold">Twój wskaźnik BMI wynosi '.$bmi.' i oznacza nadwagę</p>'; }
			elseif($bmi>=30 && $bmi<=34.99){ echo '<p class="font-bold">Twój wskaźnik BMI wynosi '.$bmi.' i oznacza I stopień otyłości</p>'; }
			elseif($bmi>=35 && $bmi<=39.99){ echo '<p class="font-bold">Twój wskaźnik BMI wynosi '.$bmi.' i oznacza II stopień otyłości (otyłość kliniczna)</p>'; }
			elseif($bmi>=40){ echo '<p class="font-bold">Twój wskaźnik BMI wynosi '.$bmi.' i oznacza III stopień otyłości (otyłość skrajna)</p>'; }
		
			
				
		?>



<!-- <p>Dla wzrostu {{ $wzrost }} cm prawidłowa waga wynosi pomiedzy {{ $bmi_waga_min }} a {{ $bmi_waga_max }} kg.</p> -->
			<p>Twoje dzienne zapotrzebowanie kaloryczne to {{ $cpm }} kcal.</p>
	
	<p>
		{{ $codalej }}
	</p>


	
	</div>

<?php 
			 		
			 
		
		
		
		
	}
	
			
			?>

















	  </form>





	  <!-- @fields('ostatnie_wpisy')

    <div class="flex flex-wrap -mx-4">
		<div class="px-4 w-full md:w-1/3">
			@php
					$attachment_id = get_sub_field('obraz');
				@endphp
				@image($attachment_id, 'medium', ['class' => 'mt-8 mx-auto', 'alt' => get_the_title($attachment_id)])
		</div>
      <div class="px-4 w-full md:w-2/3">
        <div class="pt-4 content">
          <p class="font-bold">
            @sub('tekst')
          </p>
			@sub('edytor_wysiwyg')
        </div>
      </div>
    </div>
	  @endfields -->
</div>
  </div>

  <div class="flex flex-col items-center justify-center mx-auto w-full border-2 border-[#0B8344] rounded-md lg:mt-[63px] mt-6">
	<span class="mt-4 lg:mt-[39px] mt-2 lg:mb-[14px] font-semibold text-center md:w-3/5 w-4/5">Zapraszamy do indywidualnej porady dietetycznej w Centrum Dietetycznym w Nowm Sączu  na ulicy Jagielońskiej 22</span>
	<span class="mb-2.5 text-center mt-2.5">Zadzwoń, umów sie na spotkanie z dietetykiem</span>
	<div class="flex justify-between mx-auto items-center lg:mb-10 mb-4">
        <img src="@asset('images/phone-icon.svg')" class="h-5 w-5 alt="phone" loading="lazy">
        <a href="tel:690551818" class="ml-6 text-sm font-bold text-[#028523]">+48 690 551 818</a>
      </div>
</div>

<h2 class="text-center font-semibold lg:mt-[59px] mt-4 lg:text-[31px] lg:leading-[49px] text-2">
     <span class="text-[#028523]">Poznaj</span> nasze diety
    </h2>

  <div id="diety" class="swiper mx-auto">
      <div class="swiper-wrapper">
        @query(['post__in' => get_field('dieta'), 'post_type' => 'diety', 'posts_per_page' => 4])
        @posts
          <div class="swiper-slide">
          <a href="@permalink" class="bg-[#f2f2f2] w-[285px] mt-8 pb-6 block duration-150 hover:bg-[#b7f15f]">
              <div class="aspect-w-4 aspect-h-3">
                @php
                  $attachment_id = get_post_thumbnail_id();
                @endphp
                @image($attachment_id, 'thumbnail', ['class' => 'object-cover', 'alt' => get_the_title()])
              </div>
              <div class="content-diet px-5">
              <h3 class="font-semibold min-h-[72px] title h3 leading-6" style="padding-top: 1rem">
                @title
              </h3>
              @layouts('elastyczne_tresc')
                  @layout('kalorycznosc_przedzial')
                    <span class="kalorycznosc text-md text-[#0B8344] leading-[49px]">
                      @sub('kalorycznosc_przedzial')
                    </span>
                  @endlayout
                @endlayouts
              <div class="content">
                @excerpt
              </div>
              <div class="flex justify-between lg:mt-7 md:mt-5">
                <button data-href="https://zamow.dietering.com/index.php/zamowienie/#/" class=" rounded-md flex items-center duration-150 bg-[#A6CD39] px-5 py-2.5 h-11  hover:bg-[#2d2d2d] hover:text-white">
                  <span class="text-sm text-black hover:text-white font-semibold">Zamawiam</span>
                </button>
                @layouts('elastyczne_tresc')
                  @layout('cena_od')
                    <span class="font-semibold text-xl leading-[49px]">
                      <sup>od</sup>
                      @sub('cena_od')
                    </span>
                  @endlayout
                @endlayouts
              </div>
</div>
              
            </a>
          </div>

        @endposts
      </div>
        <div id="diety-pagination"></div>
    </div>
    <div class="flex justify-center">
      <a href="{{ get_post_type_archive_link('diety') }}" class="flex items-center mt-8 mb-[60px] duration-150 border-black border-[1px] p-4 rounded-[5px]">
        <span class="text-[16px] text-black font-semibold">Zobacz pozostałe diety</span>
      </a>
    </div>
  </div>
</div>
@endsection

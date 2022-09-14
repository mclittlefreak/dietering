@extends('layouts.app')

@section('content')
<div class='bg-[#E7F3ED] w-full'>
  <div class="w-10/12 flex mx-auto  py-2.5">
  <span class="text-base text-[#696969]">Dietering /</span><span class="text-[#0B8243] text-base"> Strefa dostaw</span>
</div>
</div>
    <div class="w-10/12 mx-auto flex flex-col md:flex-row justify-between md:mt-[87px] mt-6">
        <div class="w-1/2 max-w-[590px]">
      <h1 class="font-bold title h1 mb-[25px]">
      Dieta pudełkowa z wyborem – dostawa
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <div >
        <p class="text-base font-semibold my-[26px]">
          Sprawdź gdzie dostarczamy
        </p>
      </div>
      <div class="flex">
        <div>
          <input id="postcode" class="form-input pl-[27px] mr-2.5 max-w-[9rem]" placeholder="Kod pocztowy" autocomplete="off">
        </div>
        <div>
          <input id="city" class="form-input pl-[27px] max-w-[16rem]" placeholder="Miejscowość" autocomplete="off">
        </div>
      </div>
		<div class="max-w-xl mt-8 mx-auto">
      <div id="data" class="hidden flex items-center justify-center p-8 bg-[#f2f2f2]">
        <span class="yes">Tak, dowozimy</span>
        <span class="no">Nie, nie dowozimy</span>
        <span class="loading">Trwa ładowanie wyniku...</span>
      </div>
		  
		  
      <div id="error404" class="hidden bg-[#b7f15f] text-sm text-[#2d2d2d] text-center p-4 rounded">
        Nie można znaleźć strony. Może spróbuj wyszukiwarki?
      </div>
		
			
		</div>
</div>
<div class="w-[46%]">
<img src="@asset('images/Mapa.png')" class="w-full h-auto alt="mapa" loading="lazy">
</div>
    </div>

      <div class=" w-full bg-[#E7F3ED] flex  mt-6 justify-end relative mb-8 md:h-[417px]">
        <div>
          <img src="@asset('images/front-img1.png')" class="h-[466px] w-[449px] hidden lg:block left-[6%] absolute bottom-0 md:left-[13%] alt="img" loading="lazy">
        </div>
        <div class=" lg:mx-0 mx-auto md:w-[53%] md:pt-[62px] pt-4 flex flex-col justify-start group" >
          <div class="">
            <h1 class="font-semibold lg:leading-[49px] text-black text-[16px] ">
            Czy wiesz, ile kcal spożywać, żeby osiągać swoje cele?
            </h1>
            <h2 class="font-semibold leading-[49px] text-black text-2xl lg:text-[31px]">
            Sprawdź w naszym kalkulatorze
            </h2>
            </div>
            <div class="flex mt-[18px] mb-[26px]">
              <a href="/kalkulatory/"  class="px-[30px] py-[10px] bg-[#0B8344] rounded-md text-white font-semibold text-4">Kalkulator</a>
              <a  href="https://zamow.dietering.com/index.php/" class="px-[30px] py-[10px] text-black rounded-md bg-[#b7f15f] font-semibold ml-4"> Zamów </a>
            </div>
          

          <div class="text-[16px] leading-[24px] max-w-[80%] mt-1">
          Jeśli jednak wciąż masz wątpliwości lub potrzebujesz porady, skontaktuj się z naszym dietetykiem na bezpłatną poradę.

            <div class="flex mt-2">
        <img src="@asset('images/phone-icon.svg')" class="h-5 w-5 alt="phone" loading="lazy">
        <a href="tel:534777126" class="ml-6 text-sm mb-6 font-bold text-[#028523]">+48 534 777 126</a>
      </div>
				
</div>
</div>
</div>

<div class="mx-auto w-10/12">

<h2 class=" font-bold title h1 mt-6">Dowieziemy/dostarczymy
KIEDY otrzymasz od nas zamówienie
</h2>
<p class="pt-4 text-[16px] text-[#696969] leading-[24px] text-justify">Dietering.com catering dietetyczny powstał z pasji do gotowania i zdrowego odżywiania. Nasz zespół tworzą kucharze z wieloletnim doświadczeniem, dietetycy oraz osoby zaangażowane w promowanie zdrowego, zrównoważonego i nowoczesnego sposobu odżywiania.

Obalamy mit, że odchudzanie jest męką. Udowadniamy, że odchudzanie może być prawdziwą kulinarną przyjemnością. Staramy się również pokazać, że zdrowe odżywianie to nie tylko odchudzanie, diety ale przede wszystkim styl życia. Zdajemy sobie sprawę, że większość ludzi żyje w ciągłym biegu i czasem ciężko połączyć życie zawodowe, rodzinne i jeszcze myśleć o zdrowym trybie życia. </p>
<h2 class=" font-bold title h1 mt-6">BEZPIECZEŃSTWO DOSTAW?</h2>
<p class="pt-4 text-[16px] text-[#696969] leading-[24px] mb-6 text-justify">Dietering.com catering dietetyczny powstał z pasji do gotowania i zdrowego odżywiania. Nasz zespół tworzą kucharze z wieloletnim doświadczeniem, dietetycy oraz osoby zaangażowane w promowanie zdrowego, zrównoważonego i nowoczesnego sposobu odżywiania.

Obalamy mit, że odchudzanie jest męką. Udowadniamy, że odchudzanie może być prawdziwą kulinarną przyjemnością. Staramy się również pokazać, że zdrowe odżywianie to nie tylko odchudzanie, diety ale przede wszystkim styl życia. Zdajemy sobie sprawę, że większość ludzi żyje w ciągłym biegu i czasem ciężko połączyć życie zawodowe, rodzinne i jeszcze myśleć o zdrowym trybie życia. Dlatego wychodzimy naprzeciw oczekiwaniom naszych klientów. Dostarczamy posiłki do ponad 60 miejscowości w całej Polsce, stale powiększając naszą strefę bezpłatnej dostawy. Stały kontakt z naszymi klientami pozwala nam na coraz wyższe stawianie sobie poprzeczki i podnoszenie jakości zarówno potraw jak i usług.</p>      
</div>
</div>

      @endsection
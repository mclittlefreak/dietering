@extends('layouts.app')

@section('content')
<div class='bg-[#E7F3ED] w-full'>
  <div class="w-10/12 flex mx-auto  py-2.5">
  <span class="text-base text-[#696969]">Dietering /</span><span class="text-[#0B8243] text-base"> Diety</span>
</div>
</div>
  <div class="w-10/12 mx-auto">
    <h1 class="text-center font-bold title h1">
     <span class="text-[#0B8344]"> Poznaj </span>nasze diety
    </h1>
    <p class="text-center w-1/2 mx-auto text-[#696969] text-base mt-[14px] mb-[36px]">
    @php
      $page = get_page_by_path( 'diety-seo' );
      the_field('seo_opis', $page->ID);
    @endphp
</p>
    <div class="flex flex-wrap">
      @posts
      <div class="px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        @include('partials.diet')
      </div>
      @endposts
    </div>
  </div>
  <div class=" w-full bg-[#E7F3ED] flex mt-10 md:mt-28 justify-end relative mb-8 md:h-[417px]">
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
@endsection

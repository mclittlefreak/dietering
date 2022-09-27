{{--
  Template Name: O nas
--}}

@extends('layouts.app')

@section('content')
<div class='bg-[#E7F3ED] w-full'>
  <div class="w-10/12 flex mx-auto  py-2.5">
  <span class="text-base text-[#696969]">Dietering /</span><span class="text-[#0B8243] text-base">O nas</span>
  </div>
</div>

<div class="container w-10/12">
<p class="font-bold text-center h1 leading-[49px] mt-[31px] mb-[42px]">O nas</p>

<div class="">
    @layouts('Sekcja')
      <div class="pt-4 mx-auto w-full flex flex-col md:flex-row justify-between items-center">
        <div class='md:w-1/2 w-full'>
          @php
            $attachment_id = get_sub_field('obraz');
          @endphp
          @image($attachment_id, 'thumbnail', ['class' => 'object-cover', 'alt' => get_the_title()])
        </div>
        <div class=" ml-5 md:w-1/2 w-full"> 
          <h1 class="font-bold h1 leading-[49px] mt-4 mb-[7px]">
            @sub('tytul')
          </h1>
          <div>
          <p class="text-[#696969] text-xs lg:text-base leading-[24px] "> @sub('opis')</p>
          </div>
        </div>
      </div>
    @endlayouts
  </div>

  <div class="">
    @layouts('o_firmie')
      <div class="md:mt-[93px] mt-4 mx-auto w-full items-center  flex-col-reverse md:flex-row flex">
        <div class="md:w-1/2 w-full md:mr-5">
          <h1 class="font-bold h1 mt-4 md:mt-0 leading-[49px] mb-[17px]">
            @sub('tytul')
          </h1>
          <div class="text-[#696969] text-xs lg:text-base leading-[24px]">
            @sub('opis')
          </div>
        </div>
        <div class="md:w-1/2 w-full">
          @php
            $attachment_id = get_sub_field('obraz');
          @endphp
          @image($attachment_id, 'thumbnail', ['class' => 'object-cover', 'alt' => get_the_title()])
        </div>
      </div>
    @endlayouts
  </div>
  </div>

  @layouts('team')
      <div class="md:mt-[93px] mt-4 mx-auto w-full container w-10/12 items-center flex-col-reverse md:flex-row flex">
      <div class="md:w-1/2 w-full">
          @php
            $attachment_id = get_sub_field('obraz');
          @endphp
          @image($attachment_id, 'thumbnail', ['class' => 'object-cover', 'alt' => get_the_title()])
        </div>
        <div class="md:w-1/2 w-10/12 mx-auto md:mr-5">
          <h1 class="font-semibold text-[20px] mt-4 md:mt-0 leading-[49px] mb-[17px]">
            @sub('imie_nazwisko')
          </h1>
          <div class="text-[#696969] text-xs lg:text-base leading-[24px]">
            @sub('opis')
          </div>
          <h1 class="font-semibold mt-4 text-[20px] md:mt-0 leading-[49px] mb-[17px]">
            @sub('imie_nazwisko2')
          </h1>
          <div class="text-[#696969] text-xs lg:text-base leading-[24px]">
            @sub('opis2')
          </div>
          <h1 class="font-semibold mt-4 text-[20px] md:mt-0 leading-[49px] mb-[17px]">
            @sub('imie_nazwisko3')
          </h1>
          <div class="text-[#696969] text-xs lg:text-base leading-[24px]">
            @sub('opis3')
          </div>
          <h1 class="font-semibold mt-4 text-[20px] md:mt-0 leading-[49px] mb-[17px]">
            @sub('imie_nazwisko4')
          </h1>
          <div class="text-[#696969] text-xs lg:text-base leading-[24px]">
            @sub('opis4')
          </div>
        </div>
        
      </div>
    @endlayouts
  
  <div class=" w-full bg-[#E7F3ED]  flex py-4 md:p-0 mt-14 justify-end relative mb-8 md:h-[417px]">
        <div class="container w-10/12">
          <img src="@asset('images/front-img1.png')" class="h-[466px] w-[449px] hidden lg:block left-[6%] absolute bottom-0 md:left-[13%] alt="img" loading="lazy">
        
        <div class=" lg:mx-0 mx-auto w-full md:w-[53%] md:pt-[62px] pt-4 flex flex-col justify-start group" >
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
</div>
  </div>
  
  <div class="container mb-8">
    <h2 class="text-center font-bold title h1">
      Nasi partnerzy
    </h2>
    <div class="flex flex-wrap flex-col md:flex-row -mx-4 items-center">
		@foreach(get_field('galeria') as $attachment_id)
      <div class="px-4 w-1/3 md:w-1/3">
		  @image($attachment_id, 'medium', ['class' => 'w-auto max-h-16 mt-8 mx-auto', 'alt' => get_the_title($attachment_id)])
      </div>
		@endforeach
    </div>
  </div>
</div>
@endsection

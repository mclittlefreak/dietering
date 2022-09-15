{{--
  Template Name: Kontakt
--}}


@extends('layouts.app')


<div class="container">
  @section('content')
  <div class='bg-[#E7F3ED] w-full'>
    <div class="w-10/12 flex container mx-auto  py-2.5">
      <span class="text-base text-[#696969]">Dietering /</span><span class="text-[#0B8243] text-base"> Kontakt</span>
    </div>
  </div>
    <div class="mx-auto container inline-block flex flex-col justify-center items-center">
      <div class="mx-auto inline-block text-center">
        @layouts('naglowek')
          @layout('tytul')
            <div class="pt-4 content">
              <h1 class="font-bold title h1">
                @sub('title')
              </h1>
            </div>
          @endlayout
          @layout('opis')
            <div class="max-w-[50%] mx-auto mt-2.5">
                <span class="text-sm duration-150 text-black group-hover:text-[#2d2d2d]">@sub('opis')</span>   
            </div>
          @endlayout
          @layout('email')
            <div class="inline-flex mt-11  border-solid rounded border-[#0B8344] py-3 px-9 border-2">
              <a href="mailto:@sub('email')" class=" items-center flex group">
                <svg class="duration-150 flex-none w-4 mr-2 fill-[#028523] group-hover:fill-[#2d2d2d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                <span class="text-sm duration-150 text-[#028523] group-hover:text-[#2d2d2d] font-bold">@sub('email')</span>
              </a>
            </div>
          @endlayout
          @layout('numer_telefonu')
            <div class="inline-flex mt-11 ml-10 border-solid rounded border-[#0B8344] py-3 px-9 border-2">
              <a href="tel:{{ str_replace(' ', '', get_sub_field('numer_telefonu')) }}" class=" items-center flex group">
                <svg class="duration-150 flex-none w-4 mr-2 fill-[#028523] group-hover:fill-[#2d2d2d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zm3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                <span class="text-sm duration-150 text-[#028523] group-hover:text-[#2d2d2d] font-bold">@sub('numer_telefonu')</span>
              </a>
            </div>
          @endlayout
        @endlayouts
      </div>
      <div class="w-full mx-auto mt-10 flex flex-col md:flex-row">
        
        <div class="flex flex-wrap flex-col">
          <div class="px-4 w-full md:w-1/2">
            <!-- @shortcode('[contact-form-7 id="328154" title="Formularz 1"]') -->
            @layouts('siedziba')
              @layout('akapit')
                <div class="pt-4 content">
                  @sub('akapit')
                </div>
              @endlayout
              @layout('e-mail')
                <div class="flex">
                  <a href="mailto:@sub('e-mail')" class="mt-4 items-center flex group">
                    <svg class="duration-150 flex-none w-4 mr-2 fill-[#028523] group-hover:fill-[#2d2d2d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                    <span class="text-sm duration-150 text-[#028523] group-hover:text-[#2d2d2d] font-bold">@sub('e-mail')</span>
                  </a>
                </div>
              @endlayout
              @layout('numer_telefonu')
                <div class="flex">
                  <a href="tel:{{ str_replace(' ', '', get_sub_field('numer_telefonu')) }}" class="mt-4 items-center flex group">
                    <svg class="duration-150 flex-none w-4 mr-2 fill-[#028523] group-hover:fill-[#2d2d2d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zm3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                    <span class="text-sm duration-150 text-[#028523] group-hover:text-[#2d2d2d] font-bold">@sub('numer_telefonu')</span>
                  </a>
                </div>
              @endlayout
            @endlayouts
          </div>
          <div class="px-4 w-full md:w-1/2 lg:w-1/3">
            @layouts('zamowienia')
              @layout('akapit')
                <div class="pt-4 content">
                  @sub('akapit')
                </div>
              @endlayout
              @layout('e-mail')
                <div class="flex">
                  <a href="mailto:@sub('e-mail')" class="mt-4 items-center flex group">
                    <svg class="duration-150 flex-none w-4 mr-2 fill-[#028523] group-hover:fill-[#2d2d2d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                    <span class="text-sm duration-150 text-[#028523] group-hover:text-[#2d2d2d] font-bold">@sub('e-mail')</span>
                  </a>
                </div>
              @endlayout
              @layout('numer_telefonu')
                <div class="flex">
                  <a href="tel:{{ str_replace(' ', '', get_sub_field('numer_telefonu')) }}" class="mt-4 items-center flex group">
                    <svg class="duration-150 flex-none w-4 mr-2 fill-[#028523] group-hover:fill-[#2d2d2d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zm3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                    <span class="text-sm duration-150 text-[#028523] group-hover:text-[#2d2d2d] font-bold">@sub('numer_telefonu')</span>
                  </a>
                </div>
              @endlayout
            @endlayouts
          </div>
          <div class="px-4 w-full md:w-1/2 lg:w-1/3">
            @layouts('dietetyk')
              @layout('akapit')
                <div class="pt-4 content">
                  @sub('akapit')
                </div>
              @endlayout
              @layout('e-mail')
                <div class="flex">
                  <a href="mailto:@sub('e-mail')" class="mt-4 items-center flex group">
                    <svg class="duration-150 flex-none w-4 mr-2 fill-[#028523] group-hover:fill-[#2d2d2d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                    <span class="text-sm duration-150 text-[#028523] group-hover:text-[#2d2d2d] font-bold">@sub('e-mail')</span>
                  </a>
                </div>
              @endlayout
              @layout('numer_telefonu')
                <div class="flex">
                  <a href="tel:{{ str_replace(' ', '', get_sub_field('numer_telefonu')) }}" class="mt-4 items-center flex group">
                    <svg class="duration-150 flex-none w-4 mr-2 fill-[#028523] group-hover:fill-[#2d2d2d]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zm3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                    <span class="text-sm duration-150 text-[#028523] group-hover:text-[#2d2d2d] font-bold">@sub('numer_telefonu')</span>
                  </a>
                </div>
              @endlayout
            @endlayouts
          </div>
        </div>
        <div class="md:w-1/2 w-full h-[750px] bg-[#E7F3ED] px-[28px] py-[32px]">
          <h3 class="text-2xl leading-[22px] mb-[10px] font-semibold text-[#028523]">Formularz kontaktowy</h3>
          <span class="leading-6 font-light text-sm ">Skorzystaj z formularza kontaktowego.
Odpowiemy na Twoją wiadomość tak szybko jak to możliwe.</span>
      @shortcode('[contact-form-7 id="328154" title="Formularz 1"]')
        </div>
      </div>
    </div>
    
    <div class=" w-full bg-[#E7F3ED] flex  mt-14 justify-end relative mb-8 md:h-[417px]">
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
  @endsection
</div>

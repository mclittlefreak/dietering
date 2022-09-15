@extends('layouts.app')

@section('content') 

   <div class="container w-10/12">
    <div class="flex flex-wrap mx-auto">
		@fields('header')
      <div class="w-full">
        <div class="md:h-[548px] h-[285px] w-full bg-cover bg-no-repeat block group" style="background-image: url({{ wp_get_attachment_image_src(get_sub_field('img'), 'large')[0] }})">
          <div class="flex flex-col justify-end sm:w-1/2 md:w-[60%] lg:w-1/2 w-10/12 mx-auto ml-[7%] md:pt-[87px] pt-4">
            <h1 class="font-bold text-3xl md:text-5xl lg:text-[61px] md:leading-[69px] text-[#A6CD39] ">
				@sub('title')

            </h1>
            <h2 class="font-bold md:leading-[62px] mt-2 text-black text-3xl md:text-4xl lg:text-[48px]">
            @sub('subtitle')
            </h2>
            <div class="md:text-[16px] text-[14px] text-[#696969] md:leading-[28px] md:w-2/3 w-8/10 mt-4">
            @sub('description')
				@content
            </div>
          </div>
</div>
      </div>
		@endfields
    </div>
  </div>
 
  <div class="container">
    <div class="relative my-8">
      <div class="flex flex-wrap -mx-4 justify-center">
		  @fields('media')
        <div class="px-4 w-full md:w-1/2 lg:w-1/3">
          <div class="flex justify-center">
			  @php
			  	$attachment_id = get_sub_field('obraz');
			  @endphp
			  @image($attachment_id, 'medium', ['class' => 'w-auto h-24 mt-8', 'alt' => get_the_title($attachment_id)])
          </div>
          <div class="text-center pt-4 content">
            <p class="font-semibold">
				@sub('tekst')
            </p>
          </div>
        </div>
		  @endfields
      </div>
     
    </div>
  </div>
  <div class="w-10/12 container">
    <h2 class="text-center font-bold title h1">
     Poznaj nasze diety
    </h2>
   
    <div id="diety" class="swiper  mx-auto">
      <div class="swiper-wrapper">
        @query(['post__in' => get_field('dieta'), 'post_type' => 'diety', 'posts_per_page' => 6])
        @posts
          <div class="swiper-slide flex justify-center">
          <a href="@permalink" class="bg-[#f2f2f2] w-[285px] mt-8 pb-6 block duration-150 hover:bg-[#b7f15f]">
              <div class="aspect-w-4 aspect-h-3">
                @php
                  $attachment_id = get_post_thumbnail_id();
                @endphp
                @image($attachment_id, 'thumbnail', ['class' => 'object-cover', 'alt' => get_the_title()])
              </div>
              <div class="content-diet px-5">
              <h3 class="font-semibold title h3 min-h-[72px] leading-6" style="padding-top: 1rem">
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

  @fields('section')
      <div class=" w-full bg-[#E7F3ED] flex p-6 md:p-0 justify-end relative md:h-[417px]">
        <div>
          <img src="@asset('images/front-img1.png')" class="h-[466px] w-[449px] hidden lg:block left-[6%] absolute bottom-0 md:left-[13%] alt="img" loading="lazy">
        </div>
        <div class=" lg:mx-0 mx-auto md:w-[53%] md:pt-[62px] pt-4 flex flex-col justify-start group" >
          <div class="">
            <h1 class="font-semibold lg:leading-[49px] text-black text-[16px] ">
				      @sub('title')
            </h1>
            <h2 class="font-semibold md:leading-[49px] mt-3 lg:mt-0 text-black text-2xl lg:text-[31px]">
              @sub('subtitle')
            </h2>
            </div>
            <div class="flex mt-[18px] mb-[26px]">
              <a href="/kalkulatory/"  class="px-[30px] py-[10px] bg-[#0B8344] rounded-md text-white font-semibold text-4">@sub('button1')</a>
              <a  href="https://zamow.dietering.com/index.php/" class="px-[30px] py-[10px] text-black rounded-md bg-[#b7f15f] font-semibold ml-4"> @sub('button2') </a>
            </div>
          

          <div class="text-[16px] leading-[24px] max-w-[80%] mt-1">
            @sub('description')

            <div class="flex mt-2">
        <img src="@asset('images/phone-icon.svg')" class="h-5 w-5 alt="phone" loading="lazy">
        <a href="tel:534777126" class="ml-6 text-sm mb-6 font-bold text-[#028523]">+48 534 777 126</a>
      </div>
				@content
</div>
</div>
      </div>
		@endfields


  <div class=" lg:mt-[70px] lg:mt-12 mt-6">
    <div class="container pb-8">
      <h2 class="text-center font-bold title h1 lg:mb-[39px]">
        <span class="text-[#028523]">Zaufali </span>nam
      </h2>

      <div class="flex bg-[#F6F7F2] mx-auto inline-block w-10/12 lg:w-[800px] md:pl-[70px] py-6 px-4 md:pr-[57px] md:py-[55px] mt-4 justify-center items-center">
      <img src="@asset('images/quotes.png')" class="md:w-[53px] w-[26px] h-[23px] mr-4 md:mr-[5%] md:h-[46px]" alt="logo" loading="lazy">
        <span class="">Dietering to dieta która spełnia wszystkie moje oczekiwania</span>
      </div>
      <div id="swiper-comment" class="swiper w-10/12 mx-auto">
        <div class="swiper-wrapper">
			@fields('najnowsze_komentarze', 15)
          <div class="swiper-slide">
			  @include('partials.comment')
          </div>
			@endfields
        </div>
      </div>
      <div id="pagination"></div>
      <div class=" mt-8 w-full mx-auto ">
    <div class=" pb-8">
      <div class="flex flex-wrap -mx-4">
        @query(['post_type' => 'blog', 'posts_per_page' => 3])
        @posts
        <div class="px-4 w-full md:w-1/2 lg:w-1/3">
          @include('partials.blog')
        </div>
        @endposts
      </div>
      <div class="flex justify-center">
        <a href="{{ get_post_type_archive_link('blog') }}" class="flex items-center mt-8 border-2 border-black p-4 rounded-md ">
          <span class="text-base  font-semibold">Zobacz wszystkie wpisy</span>
        </a>
      </div>
    </div>
</div>




<div class="flex flex-col justify-center bg-center bg-cover" style="background: url(@asset('images/background2.png'));">
        <span class="text-white text-center mx-auto text-lg mt-8 lg:mt-16 lg:text-[61px] font-bold uppercase max-w-lg lg:leading-[62px]">Zamów naszą diete testową</span>
        <a href="https://zamow.dietering.com/index.php/zamowienie/#/" class="flex items-center justify-center" target="_blank">
          <span class="text-sm font-semibold  mt-8 mb-8 duration-150 bg-[#b7f15f] px-7 py-2.5 rounded-md ">Zamów</span>
        </a>
      </div>
  
  <div class="w-full mx-auto mb-6">
	  @foreach(get_field('strony') as $key => $value)
    <div class="flex flex-col w-full mx-auto">
      <div class="px-4 mt-[31px] w-full @if($key === 1) md:order-last @endif">
       
        <h2 class=" font-semibold text-[#0B8344] text-[31px]">
			{{ $value['tekst'] }}
        </h2>
        <div class="pt-4 text-[16px] text-[#696969] leading-[24px] text-justify">
			{!! $value['edytor_wysiwyg'] !!}
        </div>
      </div>
    </div>
	  @endforeach
  </div>
  </div>
  </div>
  </div>
@endsection



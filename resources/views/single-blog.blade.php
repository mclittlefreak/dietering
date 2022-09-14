@extends('layouts.app')

@section('content')
  <!-- <div class="bg-fixed bg-center bg-cover bg-[#f2f2f2]" style="background-image: url({{ home_url() }}/images/news/@field('okladka'))">
    <div class="container pt-16">
      <div class="px-8 pb-8 bg-white/75">
        <h1 class="font-bold title h1">
          @title
        </h1>
        <h2>
          @author
          @post_date_gmt
        </h2>
        <div class="content">
          <p>
            Warto wiedzieć
          </p>
        </div>
      </div>
    </div>
  </div> -->
  <div class="pl-[39px] w-10/12 mx-auto my-[28px] border-l-2 border-[#A6CD39]">
        <p>
          <span class="font-light text-base text-[#4F4F4F]">
            @published
          </span>
        </p>
        <h1 class="font-bold text-[31px] mb-[46px] mt-2">@title</h1>
      </div>
  <div class="flex justify-between w-10/12 mx-auto">
 
    <div class="w-3/4">
      <!-- <div class="pl-[39px] my-[28px] border-l-2 border-[#A6CD39]">
        <p>
          <span class="font-light text-base text-[#4F4F4F]">
            @published
          </span>
        </p>
        <h1 class="font-bold text-[31px] mb-[46px] mt-2">@title</h1>
      </div> -->
      @if(get_field('obrazek_wyrozniajacy'))
      <div class="aspect-w-16 aspect-h-9">
        <img src="{{ home_url() }}/images/news/@field('obrazek_wyrozniajacy')" class="object-cover" alt="@title" loading="lazy">
      </div>
      @endif
      <div class=" pt-4 content">
        @content
      </div>
    </div>
  
  <div class="w-[23%] sticky flex flex-col">
        <div class="flex flex-col">
          <div class="flex flex-col justify-center items-center bg-no-repeat w-full  h-[438px]" style="background: url(@asset('images/background2.png')); background-repeat:no-repeat;    background-size:cover; background-position: center;">
            <span class="text-white md:text-[22px] lg:text-[30px] text-center font-semibold uppercase">Zamów naszą diete testową</span>
            <a href="https://zamow.dietering.com/index.php/zamowienie/#/" class="flex items-center mt-8 duration-150 bg-[#028523] p-4 rounded-full hover:bg-[#2d2d2d]" target="_blank">
            <span class="text-sm text-white font-bold ">Zamów</span>
            </a>
          </div>
        @query(['post__in' => get_field('dieta'), 'post_type' => 'diety' ,  'posts_per_page' => 2])
        @posts

          <a href="@permalink" class="bg-[#f2f2f2] w-[285px] mt-8 pb-6 block duration-150 hover:bg-[#b7f15f]">
              <div class="aspect-w-4 aspect-h-3">
                @php
                  $attachment_id = get_post_thumbnail_id();
                @endphp
                @image($attachment_id, 'thumbnail', ['class' => 'object-cover', 'alt' => get_the_title()])
              </div>
              <div class="content-diet px-5">
              <h3 class="font-semibold title h3 leading-6" style="padding-top: 1rem">
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
</div>
@endsection


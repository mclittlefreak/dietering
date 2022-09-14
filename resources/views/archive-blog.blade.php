@extends('layouts.app')

@section('content')
  <div class="">
    <div class="w-10/12 mx-auto pb-8">
      <h1 class="font-bold text-center title h1">
        Porady dietetyczne
      </h1>
      <div class="flex justify-between flex-col md:flex-row ">
      <div class="md:w-[23%] flex flex-col w-full">
        @query(['post__in' => get_field('dieta'), 'post_type' => 'diety' ,  'posts_per_page' => 3])
        @posts
          <div class="">
          <a href="@permalink" class="bg-[#f2f2f2] mt-8 pb-6 block duration-150 hover:bg-[#b7f15f]">
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
        <div class="flex flex-col md:w-1/2 w-full">
          @php		  
            global $paged; 
            $paged = get_query_var('paged') ?? 1;
          @endphp
          @query(['post_type' => 'blog', 'posts_per_page' => 5, 'paged' => $paged])
            @posts
              <div class="px-4 w-full">
                @include('partials.blog')
              </div>
            @endposts
          <nav class="posts-navigation">
            @php
              the_posts_pagination([
                'prev_text' => '<',
                'next_text' => '>',
              ]);
            @endphp
          </nav>
        </div>
          <div class="flex flex-col justify-center items-center bg-no-repeat bg-center md:w-[23%] w-full bg-cover h-[438px] mt-8 bg-cover" style="background: url(@asset('images/background2.png')); background-repeat:no-repeat;   background-size:cover;  background-position: center;">
            <span class="text-white md:text-[22px] lg:text-[30px] text-center font-semibold uppercase">Zamów naszą diete testową</span>
            <a href="https://zamow.dietering.com/index.php/zamowienie/#/" class="flex items-center mt-8 py-2.5 px-[29px] rounded-md duration-150 bg-[#A6CD39] p-4 " target="_blank">
            <span class="text-sm text-white font-bold ">Zamów</span>
            </a>
          </div>
        </div>		
      <!-- @if(empty($_GET['posts_per_page']))		
        <div class="flex justify-center">
          <a href="{{ get_post_type_archive_link('blog') }}?posts_per_page=-1" class="flex items-center mt-8 duration-150 bg-[#028523] p-4 rounded-full hover:bg-[#2d2d2d]">
            <span class="text-sm text-white font-bold uppercase">Więcej artykułów</span>
            <svg class="fill-[#b7f15f] flex-none w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/><path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/></svg>
          </a>
        </div>
      @endif -->
      </div>
    </div>
  </div>
@endsection

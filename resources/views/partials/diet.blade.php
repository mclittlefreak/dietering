<!-- <a href="@permalink" class="bg-[#f2f2f2] mt-8 p-4 block duration-150 hover:bg-[#b7f15f]">
  <div class="aspect-w-4 aspect-h-3 bg-[#e7e7e7]">
	  @php
			  	$attachment_id = get_post_thumbnail_id();
			  @endphp
			  @image($attachment_id, 'thumbnail', ['class' => 'object-cover', 'alt' => get_the_title($attachment_id)])
  </div>
	 
  <h3 class="font-bold title h3" style="padding-top: 1rem">
    @title
  </h3>
  <!-- <span>@excerpt</span> -->
  <!-- <div class="content">
    <p>
      @excerpt
    </p>
  </div>
	 
<!-- </a> --> 
<a href="@permalink" class="bg-[#f2f2f2] mt-8 w-[285] diet pb-6 block duration-150 hover:bg-[#b7f15f]">
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
                <button data-href="https://zamow.dietering.com/index.php/zamowienie/#/" class=" rounded-md mt-2.5 flex items-center duration-150 bg-[#A6CD39] px-5 py-2.5 h-11  hover:bg-[#2d2d2d] hover:text-white">
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
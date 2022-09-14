<a href="@permalink" class="mt-8 block group">
  <div class="aspect-w-16 aspect-h-9 border-4 border-white border-solid">
    @if(get_field('obrazek_wyrozniajacy'))
	  <img src="{{ home_url() }}/images/news/@field('obrazek_wyrozniajacy')" class="object-cover" alt="@title" loading="lazy">
	  @endif
  </div>
  <div class="pb-8 duration-150 ">
    <h2 class="font-semibold text-[25px] leading-[35px] pt-[29px] pb-[13px]">
      @title
    </h2>
	  @if(has_excerpt())
	  <div class="text-base text-[#696969]">
      @excerpt
    </div>
  
	  @endif
    
  </div>
</a>

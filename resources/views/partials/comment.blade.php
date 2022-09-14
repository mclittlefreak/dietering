<div class="flex flex-col mt-8 mx-4 mx-4 items-center">
          <div class="w-32 flex-none mr-4">
            <div class="aspect-w-1 aspect-h-1">
				@php
					$attachment_id = get_sub_field('obraz');
				@endphp
				@image($attachment_id, 'medium', ['class' => 'object-cover border-2 border-white border-solid rounded-full', 'alt' => get_the_title($attachment_id)])
            </div>
          </div>
          <div>
            <h3 class="text-[#028523] font-bold text-center mt-4 text-lg md:text-xl">
				@sub('tekst')
            </h3>
            <!-- <div class="font-semibold text-sm text-[#2d2d2d] uppercase">
				@sub('obszar_tekstowy')
            </div> -->
          </div>
        </div>
		  @hassub('edytor_wysiwyg')
        <!-- <div class="comment">
			@if(is_front_page())
				@sub('haslo')
			@else
				@sub('edytor_wysiwyg')
			@endif
        </div> -->
		  @endsub
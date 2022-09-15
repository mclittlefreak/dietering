
<header class="shadow container">
  <div class="wrapper-top nav1 w-full mx-auto flex justify-between items-center border-b-[1px] border-[#B0B0B0]">
    <div class="left-top flex items-center justify-between w-full md:w-auto">
       <a href="{{ site_url() }}" class="my-4">
        <img src="@asset('images/logo.png')" class="md:h-16 h-8" alt="logo" loading="lazy">
      </a>
      <div class="flex items-center">
        <svg class=" lg:hidden w-8 fill-[#2d2d2d] ml-2" width="32" data-nav xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" fill-rule="evenodd"/></svg>
      </div>
        <div class="wrapper-map-left flex justify-between ml-3 hidden md:flex">
          <img src="@asset('images/mapa-mini.png')" class="h-11 w-11 mr-4" alt="mapa" loading="lazy">
          <a href="{{ site_url() }}" class="my-4">
            <span class="lg:block mr-2 text-sm text-black font-semibold">Darmowa dostawa na terenie całej Polski</span>
          </a>
        </div>
    </div>
    <div class="right-top  hidden lg:flex ">
      <div class="flex justify-between items-center">
        <img src="@asset('images/phone-icon.svg')" class="h-5 w-5 alt="mapa" loading="lazy">
        <a href="tel:534777126" class="ml-6 text-sm font-bold text-[#028523]">+48 534 777 126</a>
      </div>
          <a href="@option('zaloguj')" class="flex items-center duration-150 p-4" target="_blank">
            <img src="@asset('images/avatar.svg')" class="h-5 w-5 mr-2" alt="avatar" loading="lazy">
            <span class="hidden lg:block mr-2 text-sm text-black font-semibold">Zaloguj się</span>
          </a>
          <a href="https://zamow.dietering.com/index.php/zamowienie/#/" class="ml-1 flex items-center duration-150 p-4">
          <img src="@asset('images/cart.png')" class="h-[29px] w-[24px] alt="mapa" loading="lazy">
        </a>
    </div>
  </div>
  <div class="mx-auto px-0 hidden nav-primary lg:block w-full py-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center w-full">
		 
        <div class="primary_navigation items-center">
          <svg class="hidden absolute top-4 right-4 w-8 fill-[#2d2d2d]" width="32" data-nav xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
          @if(has_nav_menu('primary_navigation'))
            {!! wp_nav_menu(['menu_class' => 'primary_navigation', 'container' => '', 'theme_location' => 'primary_navigation']) !!}
          @endif
          <a href="https://zamow.dietering.com/index.php/zamowienie/#/" class=" rounded-md flex items-center duration-150 bg-[#A6CD39] px-14 py-auto h-11 margin-button hover:bg-[#2d2d2d] hover:text-white">
          <span class="text-sm text-black hover:text-white font-semibold">Zamów</span>
        
        </a>
          <div class="md:hidden absolute inset-x-0 bottom-0 p-4 bg-[#b7f15f]">
            <div class="flex flex-wrap -mx-4">
              <div class="px-4">
                <!-- <div class="flex items-center">
                  <svg class="w-4 mr-2 fill-[#028523]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zm3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
                  <div class="text-[#028523] uppercase text-sm">
                    Dietetyk
                  </div>
                </div> -->
                <!-- <a href="tel:534777126" class="ml-6 text-sm font-bold text-[#028523]">+48 534 777 126</a> -->
              </div>
              <div class="px-4 hidden">
                <div class="flex items-center">
                  <svg class="w-4 mr-2 fill-[#028523]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5zm3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
                  <div class="text-[#028523] uppercase text-sm">
                    Zamówienie
                  </div>
                </div>
                <a href="tel:537444030" class="ml-6 text-sm font-bold text-[#2d2d2d]">537 444 030</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</header>

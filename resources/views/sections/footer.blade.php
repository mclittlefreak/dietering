<footer class=" bg-[#E7F3ED] w-full">
<section>
  <div class="">
    <div class="flex pt-[50px] mb-8 items-start w-10/12 mx-auto flex-col md:flex-row">
      
          <div class="mr-[35px]"> 
            <img src="@asset('images/logo.png')" class="h-16 flex-none" alt="logo" loading="lazy">
            <div class="text-sm ml-4">
              <div class="flex items-center mt-2.5">
              <img src="@asset('images/phone-icon.svg')" class="h-5 w-5 alt="mapa" loading="lazy">
              <a href="tel:537444030" class="ml-6 text-sm font-bold text-[#028523]">+48 537 444 030</a>
            </div>
            <div class="flex justify-between items-center mt-2.5">
              <img src="@asset('images/email.svg')" class="h-5 w-5 alt="mapa" loading="lazy">
              <a href="mailto: zamówienia@dietering.com" class="ml-6 text-sm font-bold text-[#028523]">zamówienia@dietering.com</a>
            </div>
            <div>
              <h2 class="mt-[15px] font-semibold text-[#696969]">Biuro Obsługi Klienta:</h2>
            <p class="mb-2.5 text-[#696969]" >pn - pt, 8:00 - 18:00</p>
            <p class="text-[#696969]">sb, 8:00 - 14:00 </p>
          </div>
      
            <div class="flex items-center mt-2.5">
              <img src="@asset('images/phone3.png')" class="h-5 w-5 alt="mapa" loading="lazy">
              <a href="tel:537444793" class="ml-6 text-sm font-bold text-[#696969]">+48 537 444 793</a>
            </div>
            <div class="flex items-center mt-2.5">
              <img src="@asset('images/email3.png')" class="h-5 w-5 alt="mapa" loading="lazy">
              <a href="mailto: biuro@dietering.com " class=" ml-6 text-sm font-bold text-[#696969]">biuro@dietering.com</a>
            </div>
        </div>
</div>
      
      <div class=" md:px-4 flex flex-col w-full md:w-1/4 mt-6 md:mt-0">
        <h2 class="font-semibold text-[20px]">Menu</h2>
        @if(has_nav_menu('secondary_navigation'))
          {!! wp_nav_menu(['menu_class' => 'secondary_navigation', 'container' => '', 'theme_location' => 'secondary_navigation']) !!}
        @endif
      </div>
      <div class="md:px-4 flex flex-col w-full md:w-1/4  mt-6 md:mt-0 ">
        @if(has_nav_menu('tertiary_navigation'))
          {!! wp_nav_menu(['menu_class' => 'tertiary_navigation', 'container' => '', 'theme_location' => 'tertiary_navigation']) !!}
        @endif
      </div>
		<div class="w-full flex flex-col justify-center 4rth-column md:w-1/4 w-full mt-6 md:mt-0" style="margin-top:10px;">
        <div class="payment-wrap">
          <span class="">Metody płatności</span>
          <div class="flex mt-4">
              <img src="{{ site_url() }}/wp-content/uploads/2022/08/blik.png" style="height:1rem" alt="blik" loading="lazy">
              <img src="{{ site_url() }}/wp-content/uploads/2022/08/dotpay.png" style="height:1rem;margin:0 1rem" alt="dotpay" loading="lazy">
              <img src="{{ site_url() }}/wp-content/uploads/2022/08/payu.png" style="height:1rem" alt="payu" loading="lazy">
          </div>
        </div>
          <div class="social-media-wrap md:mt-[60px] md:w-1/4  w-full mt-6">
            <span>Social media</span>
            <div class="flex mt-[23px]">
              <a style="margin-left:10px;" href="https://www.facebook.com/CateringDietetycznyDietering/" target="_blank"><img src="https://www.dietering.com/wp-content/uploads/2022/08/fb.png" alt="fb"/></a>
              <a style="margin-left:10px;" href="https://www.instagram.com/dietering/" target="_blank"><img src="https://www.dietering.com/wp-content/uploads/2022/08/inst.png" alt="inst"/></a>
            </div>
          </div>
		</div>
    </div>
  </div>
</section>
<section class="">
  <div class="container">
    <h2 class="title h2 mx-auto">
      <span class="font-semibold uppercase text-[20px] leading-[35px]">Catering</span>
    </h2>
    <div class="text-black w-full">
    @if(has_nav_menu('fourth_navigation'))
            {!! wp_nav_menu(['menu_class' => 'Footer_cities', 'container' => '', 'theme_location' => 'fourth_navigation']) !!}
          @endif
</div>

  </div>
</section>
</footer>


<style>.content h1,.content h2,.content h3{font-weight:bold}</style>

 

  
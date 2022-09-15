@extends('layouts.app')

@section('content')
<div class="container">
  <div class="bg-fixed bg-center bg-cover"
       style="background-image: url(@if(get_field('obrazek')) {{ home_url() }}/images/miasta/@field('obrazek') @else @asset('images/default.jpg') @endif)">
    <div class="container pt-16">
      <div class="px-8 pb-8 bg-white/75">
        <h1 class="font-bold title h1">
			Catering dietetyczny @title
        </h1>
      </div>
    </div>
  </div>
  <div class="container">
	  
	  
	  <div class="md:mx-16 lg:mx-32 pt-4 content">
		  @if(get_field('akapit'))
		  
		  @field('akapit')
		 				  
		  
		  @else 
		  
		  
		   <h2>
			  Dieta pudełkowa @title
		  </h2>
		  
		  
							<p><strong>Catering dietetyczny</strong> DIETERING to pyszne posiłki pełne witamin i składników odżywczych, które zapewnią Ci energię oraz dobre samopoczucie na każdy dzień.</p>
				<p>Nasz <strong>fit catering</strong> przeznaczony jest nie tylko dla osób chcących się zdrowo odżywiać, ale również dla zmagających się z nadwagą, niedowagą lub specjalnymi zaleceniami zdrowotno-dietetycznymi. Do naszych diet używamy tylko i wyłącznie naturalnych i świeżych produktów pochodzących od lokalnych rolników z Małopolski i rejonów Zakopanego.</p>
				<p>Catering dietetyczny czyli <strong>dieta pudełkowa z dowozem</strong> to prosty i wygodny sposób na zdrowie, dobre samopoczucie i świetną sylwetkę.</p>	
		  
		  @endif
		  
		  
     </div>
	  
	  
	  
	  <div class="relative my-8">
      <div class="flex flex-wrap -mx-4 justify-center">
		          <div class="px-4 w-full md:w-1/2 lg:w-1/3">
          <div class="flex justify-center">
			  			  <img src="{{ site_url() }}/wp-content/uploads/2022/06/oNUbCw7T92475Xh.png" class="w-auto h-24 mt-8" alt="oNUbCw7T92475Xh" loading="lazy">          </div>
          <div class="text-center pt-4 content">
            <p>
				Zamawiasz Zdrowy Fit<br>catering @title
			  
			  </p>
          </div>
        </div>
		          <div class="px-4 w-full md:w-1/2 lg:w-1/3">
          <div class="flex justify-center">
			  			  <img src="{{ site_url() }}/wp-content/uploads/2022/06/QtbUTKrE6PYHG5Q.png" class="w-auto h-24 mt-8" alt="QtbUTKrE6PYHG5Q" loading="lazy">          </div>
          <div class="text-center pt-4 content">
            <p>
				Otrzymujesz dietę z dowozem<br>na terenie miasta @title           </p>
          </div>
        </div>
		          <div class="px-4 w-full md:w-1/2 lg:w-1/3">
          <div class="flex justify-center">
			  			  <img src="{{ site_url() }}/wp-content/uploads/2022/06/Tu0tbygfUqNkGyI.png" class="w-auto h-24 mt-8" alt="Tu0tbygfUqNkGyI" loading="lazy">          </div>
          <div class="text-center pt-4 content">
            <p>
				Cieszysz się zdrowym jedzeniem<br>i świetną sylwetką
			  </p>
          </div>
        </div>
		        </div>
      <div class="inset-x-0 absolute top-1/2 -translate-y-1/2 text-center text-[#f2f2f2] font-bold -z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        Jak działa dieta z dostawą
      </div>
    </div>
	  
	  
	  
	  
	  <div class="flex flex-wrap -mx-4 items-center">
      <div class="px-4 w-full md:w-1/2">
        <div class="pt-4 content">
         
			
			
			
			@if(get_field('media_i_tekst'))
			
			@field('media_i_tekst')
		 				  
		  
		  @else 
		  
		  
		   <h2>
			  Dla kogo przeznaczona jest dieta pudełkowa
		  </h2>
			
			<ul>
				<li>dla osób aktywnych zawodowo</li>
				<li>dla osób uprawiających różnego rodzaju sporty</li>
				<li>dla osób, które chcą schudnąć</li>
				<li>dla osób, które chcą oczyścić organizm</li>
				<li>dla osób które chcą odzyskać siłę, witalność i zdrowie</li>
			</ul>
		  
		  
			
		  
		  @endif
			
			
			
			
			
        </div>
      </div>
      <div class="px-4 w-full md:w-1/2">
        <img src="{{ site_url() }}/wp-content/uploads/2022/06/postaw-na-diete.jpg" class="mt-8 mx-auto" loading="lazy">
      </div>
    </div>
	  
	  
	  
	  
        <div class="pt-4 content">
         
			
			@if(get_field('plik'))
			
			@field('plik')
		 				  
		  
		  @else 
		  
		  
		   <h2>
			  Jesteśmy jednym z pierwszym fit cateringów w Polsce.

		  </h2>
			
			<p class="font-bold">
				Istniejemy od 9 lat.
			</p>
			
			<p>
				Od początku istnienia w naszym cateringu dietetyczny specjalizujemy się w nietolerancjach pokarmowych. Pomagamy zbilansować odpowiednie diety z bardzo zróżnicowaną kalorycznością.
			</p>
		  
			<p>
				Skontaktuj się z naszym dietetykiem aby skomponować dla siebie idealny zestaw diety pudełkowej!


			</p>
			
			<p>
				<a href="{{ get_post_type_archive_link('diety') }}">Dieta pudełkowa aktualne menu</a>
			</p>
		  
			
		  
		  @endif
			
			
			
        </div>
    
	  
	  
	  
	  
	  
	  
	  
	  <h2 class="text-center font-bold title h1">
      Polecamy nasze diety pudełkowe

    </h2>
    <div class="flex flex-wrap -mx-4">
		@query(['post_type' => 'diety', 'posts_per_page' => 4])
		@posts
      <div class="px-4 w-full md:w-1/2 lg:w-1/4">
        <a href="@permalink" class="bg-[#f2f2f2] mt-8 p-4 block duration-150 hover:bg-[#b7f15f]">
          <div class="aspect-w-4 aspect-h-3">
			  @thumbnail('object-cover')
          </div>
          <h3 class="font-bold title h3">
			  @title
          </h3>
          <div class="content">
			  @excerpt
          </div>
        </a>
      </div>
		@endposts
    </div>
    <div class="flex justify-center">
      <a href="{{ get_post_type_archive_link('diety') }}" class="mt-8 duration-150 bg-[#028523] p-4 rounded-full hover:bg-[#2d2d2d] text-sm text-white font-bold uppercase">
		  Zobacz pełną ofertę diet
      </a>
    </div>
  </div>
</div>
@endsection

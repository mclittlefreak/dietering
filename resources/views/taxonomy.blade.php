@extends('layouts.app')

@section('content')
  <div class="container">
    <h1 class="font-bold title h1">	
		{{ get_field('naglowek', get_queried_object()) }}
    </h1>
	  <div class="pt-4 content">
		  {!! get_field('akapit', get_queried_object()) !!}
		  
	  </div>
	  
    <div class="pt-4 content">
       <div class="flex flex-wrap -mx-4">
		   @query(['tax_query' => [['taxonomy' => 'wojewodztwo', 'terms' => get_queried_object()->term_id]], 'posts_per_page' => -1, 'order' => 'ASC', 'orderby' => 'title'])
		   @posts
        <div class="px-4 w-1/2 lg:w-1/4">
			<div class="content">
				<ul>
					<li><a href="@permalink">@title</a></li>
				</ul>
			</div>
		   </div>
		   @endposts
		</div>		 
    </div>
	  
	  
	  
	  <h2 class="font-bold title h2">
		  Zobacz także nasze dostawy w innych województwach:
	  </h2>
	  <div class="pt-4 content">
		  <ul>
			 @foreach(get_terms(['taxonomy' => 'wojewodztwo', 'exclude' => get_queried_object()->term_id]) as $term)
			  <li><a href="{{ get_term_link($term) }}">{{ $term->name }}</a></li>
			  @endforeach
		  </ul>
      
		 
    </div>
  </div>
@endsection

@extends('layouts.app')

@section('content')
  <div class="container">
    <h1 class="font-bold title h1">
      @title
    </h1>
    <div class="pt-4 content">
      @content
    </div>
  </div>
@endsection
@extends('layouts.app')

@section('content')
<h1>lights/index.blade</h1>

<section>
    <h1>URL</h1>
    <p>{{ $url }}</p>
</section>

<section>
    <h1>Sent data</h1>
    <p>{{ $data }}</p>
</section>

<section>
    <h1>Reponse</h1>
    <p>{{ $response }}</p>
</section>
@endsection
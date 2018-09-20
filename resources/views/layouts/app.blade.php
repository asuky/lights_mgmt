<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ secure_asset('dist/css/flat-ui.min.css') }}" rel="stylesheet">
    <link href="{{ secure_asset('css/common.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">

        <main class="py-2">
            @yield('content')
        </main>
        
        <footer class="footer">
            <div class="container">
                <p class="text-muted text-center">2018</p>
            </div>
        </footer>
    </div>
</body>
</html>

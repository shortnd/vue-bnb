<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Vuebnb</title>
  <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css">
  <link rel="stylesheet" href="{{ asset('css/vue-styles.css') }}" type="text/css">
</head>
<body>
  <div id="app"></div>
<script>
  window.vuebnb_server_data = "{!! addslashes(json_encode($data)) !!}"
  window.csrf_token = "{{ csrf_token() }}"
  window.errors = "{!! addslashes($errors) !!}"
</script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>

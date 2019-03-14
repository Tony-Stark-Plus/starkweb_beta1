@if (Session::has('jsonp'))
    <script>
        swal({!! Session::pull('jsonp') !!});
    </script>
@endif
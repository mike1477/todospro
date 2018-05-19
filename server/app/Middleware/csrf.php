<?php
   namespace App\Middleware;
   /**
    *
    */
   class CsrfViewMiddleware
   {
     public function __invoke($request, $response, $next)
     {
  
      $request = $request->withAttribute('foo', 'bar');

       $response = $next($request, $response);
       return $response;
     }
   }

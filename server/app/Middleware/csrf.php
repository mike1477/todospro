<?php
   namespace App\Middleware;
   /**
    *
    */
   class CsrfViewMiddleware
   {

    protected $container;
    function __construct($container)
    {
      $this->container = $container;
    }

     public function __invoke($request, $response, $next)
     {
     

      $token = (object)[];
     $token->nameKey = $this->container->csrf->getTokenNameKey();
     $token->name = $this->container->csrf->getTokenName();
     $token->valueKey = $this->container->csrf->getTokenValueKey();
     $token->value = $this->container->csrf->getTokenValue();
  
      $request = $request->withAttribute('Token', $token);

       $response = $next($request, $response);
       return $response;
     }
   }

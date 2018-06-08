<?php
use Firebase\JWT\JWT;
class TokenChecker
{
   
    public function __invoke($request, $response, $next)
    {
    	$jwt = $request->getHeader('token');
    	if($jwt){

    		try{
    			 $secretKey   = base64_decode(KEY);              
                 $token = JWT::decode($jwt[0], $secretKey, array('HS512'));
	             $request = $request->withAttribute('data', $token);
	             $response = $next($request, $response);

	             return $response;
    		} catch (Exception $e) {
                return $response->withJson(array('status' => 'invalid token'), 400);
            }

        
    	}else{
    		return $response->withJson(array('status' => 'failed'), 400);
    	}
    
    }
}
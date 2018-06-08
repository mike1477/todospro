<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\QueryException;
use Firebase\JWT\JWT;

//Login
$app->post('/login', function (Request $request, Response $response) {

   //Get username and password
   $username        = $request->getParam('username');
   $password        = $request->getParam('password');
   //Query the database by user id. This should return array
   $data = $this->db->table('users')->where('username', $username)->first();

   if ( password_verify($password , $data->password) ) {
   // Get secure key
   $secretKey = base64_decode(KEY);
   $issuedAt   = time();
   $notBefore  = $issuedAt + 10;           
   $expire     = $notBefore + 60 * 60;      

   $payload = [
     'exp'  => $expire,
     'data' => [             
            'userId'   => $data->id
        ]
   ];

   // Create JWT Token
   $jwt = JWT::encode(
        $payload,      //User id
        $secretKey, // The signing key
        'HS512'     // Algorithm used to sign the token,
        );
   $data->token = $jwt;
    
   	return $response->withJson($data, 201);
   }

   return $response->withJson(array('status' => 'failed'), 401);
});

//Register
$app->post('/register', function (Request $request, Response $response) {
  $username        = $request->getParam('username');
  $name            = $request->getParam('name');
  $password        = password_hash($request->getParam('password'), PASSWORD_DEFAULT, ['cost' => 8]);

  $usernames = $this->db->table('users')->where('username', $username)->get();

  if(!empty($usernames[0])){
      return $response->withJson(array('status' => 'Username already exists'), 400);
  }

  try {
    $this->db->table('users')->insert(
      [
        'username'       => $username,
        'name'           => $name,
        'password'       => $password,
     ]
    );

      return $response->withJson(array('status' => 'success'), 201);
  } catch (QueryException $e) {
        return $response->withJson(array('status' => 'failed'), 400);
  }
});


$app->group('', function () use ($app) {
    //Update User
  $app->put('/updateuser', function (Request $request, Response $response) {
    $dt = $request->getAttribute('data');
    $id = $dt->data->userId;
    $name        = $request->getParam('name');
    $password  = password_hash($request->getParam('password'), PASSWORD_DEFAULT, ['cost' => 8]);


    try {
      $this->db->table('users')->where('id', $id)->update(
        [
          'name'       => $name,
          'password' => $password
       ]
      );

        return $response->withJson(array('status' => 'success'), 201);
    } catch (QueryException $e) {
          return $response->withJson(array('status' => 'failed'), 401);
    }

  });

  //Delete User by user id
  $app->delete('/deleteuser', function (Request $request, Response $response, array $args) {

    $dt = $request->getAttribute('data');
    $id = $dt->data->userId;

    try {
      $this->db->table('users')->where('id', $id)->delete();

        return $response->withJson(array('status' => 'success'), 201);
    } catch (QueryException $e) {
          return $response->withJson(array('status' => 'No User'), 400);
        }
  });
})->add( new TokenChecker() );




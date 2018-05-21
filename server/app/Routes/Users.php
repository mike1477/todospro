<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\QueryException;

//Login
$app->post('/login', function (Request $request, Response $response) {
   //Get username and password
   $username        = $request->getParam('username');
   $password        = $request->getParam('password');
   //Query the database by user id. This should return array
   $data = $this->db->table('users')->where('username', $username)->first();

   if ( password_verify($password , $data->password) ) {
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

//Update User
$app->put('/updateuser', function (Request $request, Response $response) {
  $id           = $request->getParam('id');
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
$app->delete('/deleteuser/{user_id}', function (Request $request, Response $response, array $args) {

  $user_id = $args['user_id'];

  try {
    $this->db->table('users')->where('id', $user_id)->delete();

      return $response->withJson(array('status' => 'success'), 201);
  } catch (QueryException $e) {
        return $response->withJson(array('status' => 'failed'), 400);
      }
});


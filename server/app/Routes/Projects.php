<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\QueryException;

//Get all the Boards for a user by userId
$app->get('/project/{id}', function (Request $request, Response $response, array $args) {
   //Get user id from url param {id}
   $user_id = $args['id'];
   //Query the database by user id. This should return array
   $data = $this->db->table('boards')->where('user_id', $user_id)->get();

   return $response->withJson($data, 200);
});

//Create new Board
$app->post('/createproject', function (Request $request, Response $response) {
  $title        = $request->getParam('title');
  $description  = $request->getParam('description');
  $user_id     = $request->getParam('user_id');


  try {
    $this->db->table('boards')->insert(
      [
        'title'       => $title,
        'description' => $description,
        'user_id'    => $user_id,
     ]
    );

      return $response->withJson(array('status' => 'success'), 201);
  } catch (QueryException $e) {
        return $response->withJson(array('status' => 'failed'), 404);
  }
});

//Update project by id
$app->put('/updateproject', function (Request $request, Response $response) {
  $id           = $request->getParam('id');
  $title        = $request->getParam('title');
  $description  = $request->getParam('description');


  try {
    $this->db->table('boards')->where('id', $id)->update(
      [
        'title'       => $title,
        'description' => $description
     ]
    );

      return $response->withJson(array('status' => 'success'), 201);
  } catch (QueryException $e) {
        return $response->withJson(array('status' => 'failed'), 401);
  }

});

//Delete Board by id
$app->delete('/deleteproject/{id}', function (Request $request, Response $response, array $args) {

  $board_id = $args['id'];

  try {
    $this->db->table('boards')->where('id', $board_id)->delete();

      return $response->withJson(array('status' => 'success'), 200);
  } catch (QueryException $e) {
        return $response->withJson(array('status' => 'failed'), 400);
      }
});

//Delete all Projects by user id
$app->delete('/deleteallprojects/{user_id}', function (Request $request, Response $response, array $args) {

  $user_id = $args['user_id'];

  try {
    $this->db->table('boards')->where('user_id', $user_id)->delete();

      return $response->withJson(array('status' => 'success'), 200);
  } catch (QueryException $e) {
        return $response->withJson(array('status' => 'failed'), 400);
      }
});


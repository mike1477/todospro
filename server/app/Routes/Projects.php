<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\QueryException;




$app->group('', function () use ($app) {
   //Get all the Boards for a user by userId
    $app->get('/project/{id}', function (Request $request, Response $response, array $args) {

       $user_id = $args['id'];
       
       //Query the database by user id. This should return array
       $data = $this->db->table('boards')->where('user_id', $user_id)->get();

       return $response->withJson($data, 200);
    });

    //Create new Board
    $app->post('/createproject', function (Request $request, Response $response) {
      $dt = $request->getAttribute('data');
      $user_id = $dt->data->userId;
      $title        = $request->getParam('title');
      $description  = $request->getParam('description');
      $color_id     = $request->getParam('color_id');

      try {
        $bool = $this->db->table('boards')->insert(
          [
            'title'       => $title,
            'description' => $description,
            'user_id'     => $user_id,
            'color_id'    => $color_id
         ]
        );

        if($bool){
          $data = $this->db->table('boards')->where('user_id', $user_id)->get();
          $datalength = count($data) -1 ;

        }

          return $response->withJson($data[$datalength] , 201);
      } catch (QueryException $e) {
            return $response->withJson(array('status' => 'failed'), 404);
      }
    });

    //Update project by id
    $app->put('/updateproject', function (Request $request, Response $response) {
      $id           = $request->getParam('id');
      $title        = $request->getParam('title');
      $description  = $request->getParam('description');
      $color_id     = $request->getParam('color_id');

      try {
        $this->db->table('boards')->where('id', $id)->update(
          [
            'title'       => $title,
            'description' => $description,
            'color_id'    => $color_id
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
    $app->delete('/deleteallprojects', function (Request $request, Response $response, array $args) {

      $dt = $request->getAttribute('data');
       $id = $dt->data->userId;


      try {
        $this->db->table('boards')->where('user_id', $id)->delete();

          return $response->withJson(array('status' => 'success'), 200);
      } catch (QueryException $e) {
            return $response->withJson(array('status' => 'failed'), 400);
          }
    });
})->add( new TokenChecker() );
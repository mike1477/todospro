<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\QueryException;



$app->group('', function () use ($app) {
   //Get all the Tasks for a project by project id
    $app->get('/tasks/{project_id}', function (Request $request, Response $response, array $args) {
       //Get project id from url param {project_id}
       $project_id = $args['project_id'];
       //Query the database by user id. This should return array
       $data = $this->db->table('tasks')->where('board_id', $project_id)->get();

       return $response->withJson($data, 200);
    });

    //Create new Task
    $app->post('/createtask', function (Request $request, Response $response) {
      $title        = $request->getParam('title');
      $description  = $request->getParam('description');
      $progress_id  = $request->getParam('progress_id');
      $parent     = $request->getParam('project_id');


      try {
        $this->db->table('tasks')->insert(
          [
            'title'       => $title,
            'description' => $description,
            'progress_id' => $progress_id,
            'board_id'    => $parent,
         ]
        );

          return $response->withJson(array('status' => 'success'), 201);
      } catch (QueryException $e) {
            return $response->withJson(array('status' => 'failed'), 404);
      }
    });

    //Update task by id
    $app->put('/updatetask', function (Request $request, Response $response) {
      $id           = $request->getParam('id');
      $title        = $request->getParam('title');
      $description  = $request->getParam('description');
      $progress_id  = $request->getParam('progress_id');


      try {
        $this->db->table('tasks')->where('id', $id)->update(
          [
            'title'       => $title,
            'description' => $description,
            'progress_id' => $progress_id
         ]
        );

          return $response->withJson(array('status' => 'success'), 201);
      } catch (QueryException $e) {
            return $response->withJson(array('status' => 'failed'), 401);
      }

    });

    //Delete Board by id
    $app->delete('/deletetask/{id}', function (Request $request, Response $response, array $args) {

      $task_id = $args['id'];

      try {
        $this->db->table('tasks')->where('id', $task_id)->delete();

          return $response->withJson(array('status' => 'success'), 200);
      } catch (QueryException $e) {
            return $response->withJson(array('status' => 'failed'), 400);
          }
    });

    //Delete all Tasks by project id
    $app->delete('/deletealltasks/{project_id}', function (Request $request, Response $response, array $args) {

      $project_id = $args['project_id'];

      try {
        $this->db->table('tasks')->where('board_id', $project_id)->delete();

          return $response->withJson(array('status' => 'success'), 200);
      } catch (QueryException $e) {
            return $response->withJson(array('status' => 'failed'), 400);
          }
    });
})->add( new TokenChecker() );
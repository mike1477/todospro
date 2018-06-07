<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\QueryException;

//Get all the demo projects for a admin by adminId
$app->get('/demoproject/{id}', function (Request $request, Response $response, array $args) {
   //Get user id from url param {id}
   $user_id = $args['id'];
   //Query the database by user id. This should return array
   $data = $this->db->table('demo_boards')->where('user_id', $user_id)->get();

   return $response->withJson($data, 200);
});

//Get all the demo tasks for a demo project by project id
$app->get('/demotasks/{project_id}', function (Request $request, Response $response, array $args) {
   //Get project id from url param {project_id}
   $project_id = $args['project_id'];
   //Query the database by user id. This should return array
   $data = $this->db->table('demo_tasks')->where('board_id', $project_id)->get();

   return $response->withJson($data, 200);
});
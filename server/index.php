<?php


use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\Capsule\Manager as Capsule;

require 'vendor/autoload.php';
require 'app/configs/config.php';

// Create and configure Slim app
$config = ['settings' => [
    'addContentLengthHeader' => false,
    'displayErrorDetails' => true,
        'db' => [
              'driver'    => 'mysql',
              'host'      => 'localhost',
              'database'  => 'boards',
              'username'  => 'root',
              'password'  => '',
              'charset'   => 'utf8',
              'collation' => 'utf8_unicode_ci',
              'prefix'    => '',
          ]
]];



$app = new \Slim\App($config);
$container = $app->getContainer();

//Create Capsule instance
$capsule = new Capsule;
$capsule->addConnection($container['settings']['db']);
// Make this Capsule instance available globally via static methods... (optional)
$capsule->setAsGlobal();
// Setup the Eloquent ORM.
$capsule->bootEloquent();

 //Add capsule to the container
$container['db'] = function($container) use ($capsule){
   return $capsule;
};

//Middleware
require __DIR__ . "/app/Middleware/TokenChecker.php";


// Pull in all the routes
require __DIR__ . "/app/Routes/Users.php";
require __DIR__ . "/app/Routes/Projects.php";
require __DIR__ . "/app/Routes/Tasks.php";
require __DIR__ . "/app/Routes/Demos.php";

$app->add(function ($req, $res, $next) {
 $response = $next($req, $res);
 return $response
         ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
         ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization, token')
         ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});


// Run app
$app->run();
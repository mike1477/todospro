<?php

session_start();

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\Capsule\Manager as Capsule;

require 'vendor/autoload.php';

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

$container['csrf'] = function ($container) {
   return new \Slim\Csrf\Guard;
};

$app->add(new \App\Middleware\CsrfViewMiddleware($container));
$app->add($container->csrf);

// Define app routes
$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {

    $foo = $request->getAttribute('foo');
	//$user = $this->db->table('users')->where('id', $id)->first();
    return $response->write("Hello " . $foo);
});

// Run app
$app->run();;
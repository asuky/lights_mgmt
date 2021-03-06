<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'LightController@index');
Route::put('/', 'LightController@putState');

Route::get('/list', 'LightController@listLights');
Route::get('/1/on', 'LightController@lighton');
Route::get('/1/off', 'LightController@lightoff');

Route::post('/{id}', 'LightController@putState')
        ->where(['id' => '[0-9]+']);

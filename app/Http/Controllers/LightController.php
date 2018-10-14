<?php
namespace App\Http\Controllers;

use Config;
use Illuminate\Http\Request;

class LightController extends Controller
{
    public function index()
    {
        return view('lights.index');
    }
    
    public function listLights()
    {
        //$data = array('on'=>true);
        //$data_json = json_encode($data);
        $url = Config::get('const.hue_hub') . '/' . Config::get('const.hue_username') . '/lights/';
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($data_json)));
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        //curl_setopt($ch, CURLOPT_POSTFIELDS,$data_json);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response  = curl_exec($ch);
        curl_close($ch);
        
        
        return($response);
        //return view('lights.response', ['url' => $url, 'data' => 'N/A', 'response' => $response ]);
    }
    
    public function putState()
    {
        
        
        
        
    }
    
    public function lighton()
    {
        $data = array('on'=>true);
        $data_json = json_encode($data);
        $url = Config::get('const.hue_hub') . '/' . Config::get('const.hue_username') . '/lights/1/state';
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($data_json)));
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$data_json);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response  = curl_exec($ch);
        curl_close($ch);
        
        return view('lights.response', ['url' => $url, 'data' => $data_json, 'response' => $response ]);
        
    }

    public function lightoff()
    {
        $data = array('on'=>false);
        $data_json = json_encode($data);
        $url = Config::get('const.hue_hub') . '/' . Config::get('const.hue_username') . '/lights/1/state';
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($data_json)));
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$data_json);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response  = curl_exec($ch);
        curl_close($ch);
        
        return view('lights.response', ['url' => $url, 'data' => $data_json, 'response' => $response ]);
    }
}

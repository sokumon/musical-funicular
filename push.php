<?php
	$decoded;
		$content = trim(file_get_contents("php://input"));
		$decoded = json_decode($content);
		print_r($decoded);
	define('SERVER_API_KEY', 'AAAApxo_dYg:APA91bHEtQt7OglNfL1Ri4MJFqQfdc415lyuclOX-CsASn_b0_3rqY76f8ld9ibIf-MYIHE-t7l4awh3s1nUf9riYdtZcqiu_YafQrlVgH4adsv5X2vL26y8Vp8hmdZwsKvPhjSjxxtz');

	$tokens =[$decoded];
	
	$header = [
		'Authorization: Key=' . SERVER_API_KEY,
		'Content-Type: Application/json'
	];
	
	$msg = [
		'title' => 'Testing Notification from push.php',
		'body' => 'Testing Notification from localhost',
		'click_action'=>'https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20?si=45c9d5cf8e474dde'
	];

	$payload = [
		'registration_ids' 	=> $tokens,
		'notification'				=> $msg
	];

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => "https://fcm.googleapis.com/fcm/send",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS => json_encode( $payload ),
	  CURLOPT_HTTPHEADER => $header
	));
	// $response = curl_exec($curl);
	// $err = curl_error($curl);
	// print_r($response);
	// print_r($err);
	curl_close($curl);
?>
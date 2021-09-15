<?php
while(true)
{
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://script.google.com/macros/s/AKfycbyqad9jc_M8rawLUWFooE_5iwxZw2JxpveR3ernVJ5qh9ftQMQ3niK4KHe6SDgxrjDA/exec?');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

$headers = array();
$headers[] = 'Content-Type: application/json';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$result = json_decode(curl_exec($ch));
echo $result->number;
// if () {
//     echo 'Error:' . curl_error($ch);
// }
curl_close($ch);
}
?>
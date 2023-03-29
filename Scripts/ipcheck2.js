let url = "http://ip-api.com/json/?lang=zh-CN"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let country = jsonData.country
    let city = jsonData.city
    let isp = jsonData.isp
    
  body = {
    title: "网络信息",
    content: `IP信息: ${ip}\n运营商: ${isp}\nIP位置: ${country} - ${city}`,
    icon: "key.icloud",
    'icon-color': "#5AC8FA"
  }
  $done(body);
});

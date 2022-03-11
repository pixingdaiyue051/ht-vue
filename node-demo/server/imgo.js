var appId = 8997
var appSecret = "VE0jsSXsesShRS5hlPzbjtFTq7ZKlhsU";

var auth = appId + ":" + appSecret;
auth = new Buffer(result).toString('base64');
auth = "Basic " + auth;

request({
    url: 'https://api.gobelieve.io/v2/auth/grant',
    method: 'POST',
    json: true,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': result
    },
    body: { "user_name": name, "uid": userId }
}, function (err, res1, body) {
    if (err) {
        res.json({ "error": err });
    } else {
        res.json({ "code": 200, "data": body });
    }
});
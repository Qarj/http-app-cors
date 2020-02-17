# http-app-cors

Cross origin requests

## Setup

```
npm i
```

## Run

```
npm start
```

CTRL-SHIFT-I and select Console in the Dev Tools.

Back in the React App, Click Add.

## With CORS error

When the cors error happens, this error message appears in the console

```
Access to XMLHttpRequest at 'https://jsonplaceholder.typicode.com/posts' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

![Alt text](actual_result.jpg?raw=true "Actual Result")

### request 1 - OPTIONS, response 204

General

```yaml
Request URL: https://jsonplaceholder.typicode.com/posts
Request Method: OPTIONS
Status Code: 204
Remote Address: 104.27.152.209:443
Referrer Policy: no-referrer-when-downgrade
```

Request Headers

```yaml
:authority: jsonplaceholder.typicode.com
:method: OPTIONS
:path: /posts
:scheme: https
accept: */*
accept-encoding: gzip, deflate, br
accept-language: en-US,en;q=0.9
access-control-request-headers: content-type
access-control-request-method: POST
origin: http://localhost:3000
user-agent: Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36
```

Response Headers

```yaml
access-control-allow-credentials: true
access-control-allow-headers: content-type
access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
access-control-allow-origin: http://localhost:3000
cf-cache-status: DYNAMIC
cf-ray: 566871006966dc1f-LHR
date: Mon, 17 Feb 2020 14:27:44 GMT
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
server: cloudflare
set-cookie: __cfduid=d681aeed9780b1c9b40202ce1196c016d1581949639; expires=Wed, 18-Mar-20 14:27:19 GMT; path=/; domain=.typicode.com; HttpOnly; SameSite=Lax
status: 204
vary: Origin, Access-Control-Request-Headers
via: 1.1 vegur
x-powered-by: Express
```

29.94 seconds

### request 2 - POST, response 503

General

```yaml
Request URL: https://jsonplaceholder.typicode.com/posts
Request Method: POST
Status Code: 503
Remote Address: 104.27.152.209:443
Referrer Policy: no-referrer-when-downgrade
```

Request Headers

```yaml
:authority: jsonplaceholder.typicode.com
:method: POST
:path: /posts
:scheme: https
accept: application/json, text/plain, */*
accept-encoding: gzip, deflate, br
accept-language: en-US,en;q=0.9
content-length: 24
content-type: application/json;charset=UTF-8
origin: http://localhost:3000
referer: http://localhost:3000/
user-agent: Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36
```

Request Payload

```json
{ "title": "a", "body": "b" }
```

Response Headers

```yaml
cache-control: no-cache, no-store
cf-cache-status: DYNAMIC
cf-ray: 5668719c4faddc1f-LHR
content-type: text/html; charset=utf-8
date: Mon, 17 Feb 2020 14:28:14 GMT
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
server: cloudflare
set-cookie: __cfduid=dc7c54a568e718934fc36379ba4ca25be1581949664; expires=Wed, 18-Mar-20 14:27:44 GMT; path=/; domain=.typicode.com; HttpOnly; SameSite=Lax
status: 503
```

Response

```html
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <title>Application Error</title>
        <style media="screen">
            html,
            body,
            iframe {
                margin: 0;
                padding: 0;
            }
            html,
            body {
                height: 100%;
                overflow: hidden;
            }
            iframe {
                width: 100%;
                height: 100%;
                border: 0;
            }
        </style>
    </head>
    <body>
        <iframe
            src="//www.herokucdn.com/error-pages/application-error.html"
        ></iframe>
    </body>
</html>
```

30.16 seconds

## Without CORS error

Should see this:

![Alt text](expected_result.jpg?raw=true "Expected Result")

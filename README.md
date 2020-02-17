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

## Without CORS error

Should see this:

![Alt text](expected_result.jpg?raw=true "Expected Result")

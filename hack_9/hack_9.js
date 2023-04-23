const fetch = require("cross-fetch")
/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  let url = "https://jsonplaceholder.typicode.com/posts"
  return await fetch(url, {method: "POST"}).then(respuesta => respuesta.json())
}

module.exports = fnTest;
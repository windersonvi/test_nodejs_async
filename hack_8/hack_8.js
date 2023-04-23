const fetch = require('cross-fetch');
/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  let url = await fetch('https://jsonplaceholder.typicode.com/posts')
  let response = await url.json()
  return response.length
}

module.exports = fnTest;
const fetch = require('cross-fetch');

/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
   "id": 50
}
 NOTA: se envia el "id" por parámetro con valor 50
*/

async function fnTest(id) {
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`
  return await fetch(url, {method: "put"})
}

module.exports = fnTest;
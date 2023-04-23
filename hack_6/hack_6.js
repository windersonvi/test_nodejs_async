const axios = require("axios");
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "data" 
- Contenido del return data:
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
} 
*/


async function fnTest() {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  return await axios.get(url).then( busqueda => busqueda.data.find(valor => valor.id === 2));
}

module.exports = fnTest;
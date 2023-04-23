const axios = require("axios")
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
  "userId": 3,
  "id": 30,
  "title": "a quo magni similique perferendis",
  "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
} 
 NOTA: se envia el "id" por parámetro con valor 30
*/


async function fnTest(id) {
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  return await axios.get(url).then( respuesta => respuesta.data);
}

module.exports = fnTest;
const axios = require("axios");
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/

async function fnTest() {
  try {
    let url = 'https://jsonplaceholder.typicode.com/posts/1';
    let response = await axios.put(url);
    return response;
  } catch (error) {
    let response = 'err';
    return response;
  }
}

module.exports = fnTest;
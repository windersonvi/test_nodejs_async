const axios = require("axios");
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "response" global de la petición 
*/

async function fnTest() {

  try {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let response = await axios.post(url)
    return response;
  } catch (error) {
    let response = 'err';
    return response;
  }
}

module.exports = fnTest;
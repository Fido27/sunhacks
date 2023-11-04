require('dotenv').config()
console.log(process.env)

fetch("https://canvas.instructure.com/api/v1/courses?access_token=<ACCESS-TOKEN>")
  .then((response) => response.json())
  .then((json) => console.log(json));

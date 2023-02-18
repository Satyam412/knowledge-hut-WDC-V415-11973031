// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.imgflip.com/get_memes");
// myRequest.send();

// myRequest.onreadystatechange = () => {
//   if (myRequest.readyState === 4 && myRequest.status === 200) {
//     let convertedData = JSON.parse(myRequest.responseText);
//     console.log(convertedData);
//     convertedData.data.memes.forEach((item) => {
//       let image = document.createElement("img");
//       image.setAttribute("src", item.url);
//       document.getElementById("allImages").appendChild(image);
//     });
//   }
// };

fetch("https://api.imgflip.com/get_memes")
  .then((response) => response.json())
  .then((convertedData) => {
    convertedData.data.memes.forEach((item) => {
      let image = document.createElement("img");
      image.setAttribute("src", item.url);
      document.getElementById("allImages").appendChild(image);
    });
  });

let img = document.querySelector(".hero img");
fetch(`./data.json`)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
    setInterval(() => {
      osish(data);
    }, 3000);
  });

let i = -1;
function osish(data) {
  i++;
  if (i == 4) i = 0;
  img.setAttribute("src", data[i].img);
}

let container = document.getElementById("container");
let data;
async function getData() {
  try {
    let res = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=2e1cc9db"
    );
    data = await res.json();
    appendedmovie(data);
  } catch (err) {
    console.log("err:", err);
  }
}
getData();

function appendedmovie(el) {
  container.innerHTML = null;
  console.log(el, "data");
  let div = document.createElement("div");
  let Poster = document.createElement("img");
  Poster.src = el.Poster;
  let Title = document.createElement("p");
  Title.innerText = el.Title;
  let Year = document.createElement("p");
  Year.innerText = `Year: ${el.Year}`;
  let Ratings = document.createElement("p");
  Ratings.innerText = `Ratings: ${el.Ratings.map(
    (r) => `${r.Source}: ${r.Value}`
  ).join(", ")}`;
  div.append(Poster, Title, Year, Ratings);
  container.append(div);
}

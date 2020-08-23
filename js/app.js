const apiUrl = `https://type.fit/api/quotes`;

function randomQuote(response) {
  let quote =
    response.data[parseInt(Math.floor(Math.random() * response.data.length))];
  document.querySelector("#quote").innerHTML = quote.text;
  document.querySelector(".ml-3").innerHTML = quote.author;
}

function quoteTime() {
  axios.get(apiUrl).then(randomQuote);
}
window.addEventListener("load", (event) => {
  quoteTime();
});
document.querySelector("#generate-btn").addEventListener("click", quoteTime);

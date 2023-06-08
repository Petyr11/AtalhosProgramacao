// ciclar um array sempre dentro do limite:

const mudarCorBackground = () => {
  setIndex((Index + 1) % array.length);
};

// API---------------------------------------------------

fetch("https://catfact.ninja/fact")
  .then((res) => {return res.json();})
  .then((json) => console.log(json));





text = document.querySelector(".testeAPI");

async function pegaDados() {
  const resultadoConvertido = await
  fetch("https://www.boredapi.com/api/activity")
  .then((res) => res.json());

  console.log(resultadoConvertido);
  console.log(resultadoConvertido.activity);

  info = resultadoConvertido.activity;
  text.innerText = info;
}

pegaDados();



// ----------------------------------------------------
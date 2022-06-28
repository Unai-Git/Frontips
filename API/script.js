const url = "https://pokeapi.co/api/v2/pokemon/1";

fetch(url)
  .then((response) => response.json()) //Transformar respuesta a JSON
  .then((data) => {
    console.log(data);
    let pokemon = document.querySelector("#pokemon");
    pokemon.innerHTML = `
    <ol>
        <li> Nombre: ${data.name}</li>
        <li>Altura: ${data.height}</li>
        <li>Peso: ${data.weight}</li>
        <li>Habilidad: ${data.abilities[0].ability.name}</li>
        <li>Foto:</li>
        <img src="${data.sprites.front_default}">
    </ol>
    `;
  })
  .catch((err) => console.log(err));

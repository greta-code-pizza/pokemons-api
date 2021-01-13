console.log('hello');

let render = document.getElementById('pokemon');

fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10')
  .then(response => response.json())
  .then(data => {
    let pokemons = data.results;

    console.log(pokemons)

    for(let i = 0; i < pokemons.length; i++) {
      let img = document.createElement('img');
      let splitUrl = pokemons[i].url.split('/');
      let id = splitUrl[splitUrl.length - 2];

      console.log(id);
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      let p = document.createElement('p');
      p.innerText = pokemons[i].name;

      render.appendChild(img)
      render.appendChild(p);
    }
  });


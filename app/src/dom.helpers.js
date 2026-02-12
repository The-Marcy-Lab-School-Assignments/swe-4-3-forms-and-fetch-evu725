export const renderPokemon = (pokemonObj) => {
    // Grab the parent element
    const pokemonList = document.querySelector('#discovered-list');

    // Create a new list item
    const li = document.createElement('li');

    const pokemonName = document.createElement('p');
    pokemonName.textContent = pokemonObj.name;

    const pokemonTypes = document.createElement('p');
    pokemonTypes.textContent = pokemonObj.types;

    const pokemonSprite = document.createElement('img');
    pokemonSprite.src = pokemonObj.sprite;

    //  Append the content to the li and the li to the moviesList
    li.append(pokemonSprite, pokemonName, pokemonTypes);
    pokemonList.append(li);
}  

export const renderError = (msg) => {
    const errorElement = document.getElementById('error');
    errorElement.textContent = msg;
}

export const renderSuccess = (msg) => {
  const successElement = document.getElementById('success');
  successElement.textContent = msg;
}

export { renderPokemon, renderError, renderSuccess }

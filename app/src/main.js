import './style.css'
import { getRandomPokemon } from './fetch.helpers.js'
import { renderPokemon, renderError, renderSuccess } from './dom.helpers.js'

const getAndRenderPokemon = async () => {
  try {
    // wait for the response from the function
    const pokemon = await getRandomPokemon();

    // response is an error
    if (pokemon.error) {
      renderSuccess('');
      renderError(pokemon.error);
      return;
    }
    // render the pokemon data
    renderError('');
    renderPokemon(pokemon.data); //this fixed the problem
    renderSuccess(`${pokemon.data.name} was discovered!`);

  } catch (error){
    renderSuccess('');
    renderError(`Something went wrong: ${error}`);
  }
}

getAndRenderPokemon();

const button = document.querySelector('button');
button.addEventListener('click', getAndRenderPokemon);

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
    }
    // render the pokemon data
    renderError('');
    renderPokemon(pokemon);
    renderSuccess(`${pokemon.name} was discovered!`);

  } catch {
    renderSuccess('');
    renderError(`Something went wrong: ${error}`);
  }

  const button = document.querySelector('button');
  button.addEventListener('click', getAndRenderPokemon);
}

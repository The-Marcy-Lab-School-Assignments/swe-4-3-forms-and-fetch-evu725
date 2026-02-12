export const getRandomPokemon = async () => {
    try {
        // A random integer between 1 to 150 (inclusive)
        const id = Math.floor(Math.random() * 150) + 1;

        // Fetch data from server and wait for the response
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        // Check HTTP response was successful, if not throw an error
        if (!response.ok) {
            throw new Error(`Fetch failed. ${response.status} ${response.statusText}`);
        }

        // Convert fetch response to JSON
        const data = await response.json();

        // Iterate the object to get pokemon types
        const typeNames = data.types.map(item => item.type.name);
        const typeNamesString = typeNames.join(", ");

        // store an object with pokemon name, types, and sprite
        const pokemonObj = {
            name: data.name,
            types: typeNamesString,
            sprite: data.sprites.front_default
        };       

        return { data: pokemonObj, error: null };

    } catch (error) {
        console.log("Error caught! " + error.message);
        return { data: null, error: error };
    }
}

export const postDiscoveredPokemon = async (formData) => {
    try {
        // const name = contactForm.elements.message.value;
        // const types = contactForm.elements.types.value;
        // const favorite = contactForm.elements.favorite.value;

        // const { names, types, favorite } = formValues;

        // Set up the POST request config
        const config = {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        // Send the fetch
        fetch("https://formspree.io/f/mnjbjrbq", config)

        return { data: responseData, error: null }
    } catch (error) {
        return { data: null, error: error }
    }
}

export { getRandomPokemon, postDiscoveredPokemon }

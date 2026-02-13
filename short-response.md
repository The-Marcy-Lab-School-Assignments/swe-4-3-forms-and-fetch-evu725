# Short Response Questions

## Question 1: Promise Chaining

The following code logs `undefined` in the second `.then()`. Identify the bug and fix it.

```js
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((response) => {
    if (!response.ok) throw Error(`Fetch failed.`);
    const readingPromise = response.json();
  })
  .then((data) => {
    console.log(data); // undefined!
  })
  .catch((error) => console.error(error.message));
```

**Your Answer:**
The first `.then()` does not return a promise, so the second `.then()` receives `undefined`. To fix this, return the promise from the first `then()` so the second `.then()` can access the resolved value.

```js
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((response) => {
    if (!response.ok) throw Error(`Fetch failed.`);
    const readingPromise = response.json();
    return readingPromise;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error.message));
```

## Question 2: Development Servers and CORS

A student opens their `index.html` file directly in the browser (using the `file://` protocol). Their `<script type="module">` tag and `fetch()` call both fail. Explain why, and what they should do instead.

**Your Answer:**
The browser assigns it as origin null and blocks module imports and `fetch()` requests because of CORS. The ES modules require being sent over HTTP to work properly. To fix this, the student should run the project using a local development server such as Vite or Live Server extension.

## Question 3: The `fetch` Response Object

When we use `fetch()`, why do we check `response.ok` before reading the response body? What kinds of errors does this catch that `.catch()` alone would miss if we skipped this step as shown in the code below:

```js
const response = await fetch(url);
const data = await response.json();
```

**Your Answer:**
We check `response.ok` because `fetch()` only rejects the promise if a network error occurs. If the request succeeds but the server responds with an error status, `.catch()` will not run. Checking `response.ok` lets us identify and handle HTTP errors before processing the response body.


## Question 4: Async/Await Conversion

Rewrite the following `.then()`-based code using `async`/`await` with `try`/`catch`:

```js
const getJoke = () => {
  return fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
    .then((response) => {
      if (!response.ok) throw Error(`Fetch failed. ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return { data, error: null };
    })
    .catch((error) => {
      return { data: null, error };
    });
};
```

**Your Answer:**
My revise code:
```js
const getJoke = async () => {
  try {
    // await response
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart');

    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status}`);
    }
    // get the response
    const jsonData = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log("Error caught! " + error.message);
    return null;
  }
};
```


## Question 5: `event.preventDefault()` and Form Handling

A student writes a form handler but the data never displays. Their code:

```js
form.addEventListener('submit', (event) => {
  const name = form.elements.name.value;
  document.querySelector('#output').textContent = name;
});
```

What is wrong? What happens when they click submit, and how do they fix it?

**Your Answer:**
There is no `event.preventDefault()` in the code. When the student clicks submit, it causes the form to reload the page. To fix this, add `event.preventDefault()` in the first line inside the `form.addEventListener('submit', ...)` callback.


## Question 6: Putting It All Together

The steps below describe how to build a form that fetches Pokemon data from `https://pokeapi.co/api/v2/pokemon/{name}` based on the name entered in the form and displays the pokemon's data on the page. The steps are listed in a **random order**. Rearrange them into the correct sequence.

- A. Parse the response body with `await response.json()`
- B. Call `event.preventDefault()` to stop the page from reloading
- C. Check `response.ok` and throw an error if the response failed
- D. Update the DOM with the Pokemon's data
- E. Add a `'submit'` event listener to the form
- F. Handle errors in the `catch` block (display an error message)
- G. Extract the Pokemon name from the form input
- H. Send a GET request with `fetch()` using the Pokemon name in the URL
- I. Reset the form with `form.reset()`
- J. Create the HTML form with a name input and output elements for displaying results

**Your Answer:**
- J. Create the HTML form with a name input and output elements for displaying results
- E. Add a `'submit'` event listener to the form
- B. Call `event.preventDefault()` to stop the page from reloading
- G. Extract the Pokemon name from the form input
- H. Send a GET request with `fetch()` using the Pokemon name in the URL
- C. Check `response.ok` and throw an error if the response failed
- A. Parse the response body with `await response.json()`
- F. Handle errors in the `catch` block (display an error message)
- D. Update the DOM with the Pokemon's data
- I. Reset the form with `form.reset()`


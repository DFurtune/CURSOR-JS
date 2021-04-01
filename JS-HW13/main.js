const filmLink = "https://swapi.dev/api/films/";
const planetLink = "https://swapi.dev/api/planets/";

const inputField = document.querySelector("#input");
const submit = document.querySelector(".submit");
const btn_getPlanets = document.querySelector(".btn_getPlanets");
const responseField = document.querySelector("#responseField");

const getInformation = async () => {
  const inputQuery = inputField.value;
  const endpointFilms = await axios.get(`${filmLink}${inputQuery}/`);
  const peopleLinks = endpointFilms.data.characters;
  const endpointsPeople = peopleLinks.map((url) =>
    url.replace("http", "https")
  );
  endpointsPeople.forEach((endpoint) => getInfo(endpoint));
};

const getInfo = async (url) => {
  const urlPeople = await axios.get(url);
  const name = urlPeople.data.name;
  const birth_year = urlPeople.data.birth_year;
  const gender = urlPeople.data.gender;

  responseField.insertAdjacentHTML(
    "beforeend",
    `
        <article class="article">
            <p class="name">Ім'я: ${name}</p>
            <p class="birth_year">Рік народження: ${birth_year}</p>
            <p class="gender">Стать: ${gender}</p>
        </article>
    `
  );
};

const displayInfo = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getInformation();
};

submit.addEventListener("click", displayInfo);

const getPlanets = async () => {
  const dataPlanets = await axios.get(`${planetLink}`);
  const endpointPlanets = dataPlanets.data.results;
  endpointPlanets.forEach((endpoint) => getPlanet(endpoint));
};
const getPlanet = async (endpoint) => {
  const namePlanet = endpoint.name;
  console.log(namePlanet);
  responseField.insertAdjacentHTML(
    "beforeend",
    `
        <article class="article">
            <p class="namePlanet"> ${namePlanet}</p>
        </article>
    `
  );
};
const displayInfoPlanets = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getPlanets();
};

btn_getPlanets.addEventListener("click", displayInfoPlanets);

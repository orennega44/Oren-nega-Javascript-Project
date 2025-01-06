const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
const dataContainer = document.querySelector('.dataContainer');
const dataList = document.querySelector('.dataList')





async function getData(value) {
    try {
        const res = await fetch('https://swapi.dev/api/' + value);
        const data = await res.json();
        console.log(data);
        getInfo(data)
    } catch (error) {
        console.log(error);

    }
}


function getInfo(starData) {








    if (starData) {
        if (searchInput.value == 'films') {
            dataList.className = 'dataList';

            starData.results.map((item) => {
                const li = document.createElement('li');

                li.innerHTML = `
               <h3>Title: ${item.title}</h3> 
               <h6>Release Date: ${item.release_date}</h6>
               <p>Director: ${item.director}</p>
               <p>Producer: ${item.producer}</p>
                
                `;
                li.className = 'filmCard'
                dataList.appendChild(li)
            })






        } else if (searchInput.value == 'people') {
            dataList.className = 'dataList';
            starData.results.map((item) => {
                const li = document.createElement('li');

                li.innerHTML = `
               <h3>Name: ${item.name}</h3> 
               <h6>Birth day: ${item.birth_year}</h6>
               <p>heigth: ${item.height}</p>
               <p>gender: ${item.gender}</p>
                
                `;
                li.className = 'filmCard'
                dataList.appendChild(li)
            })



        }
        else if (searchInput.value == 'planets') {
            dataList.className = 'dataList';
            starData.results.map((item) => {
                const li = document.createElement('li');

                li.innerHTML = `
               <h3>name: ${item.name}</h3> 
               <h6>climate: ${item.climate}</h6>
               <p>population: ${item.population}</p>
               <p>orbital period: ${item.orbital_period}</p>
                
                `;
                li.className = 'filmCard'
                dataList.appendChild(li)
            })

        }
        else if (searchInput.value == 'species') {
            dataList.className = 'dataList';
            starData.results.map((item) => {
                const li = document.createElement('li');

                li.innerHTML = `
               <h3>name: ${item.name}</h3> 
               <h6>language: ${item.language}</h6>
               <p>designation: ${item.designation}</p>
               <p>average lifespan: ${item.average_lifespan}</p>
                
                `;
                li.className = 'filmCard'
                dataList.appendChild(li)
            })





        }
        else if (searchInput.value == 'starships') {

            dataList.className = 'dataList';
            starData.results.map((item) => {
                const li = document.createElement('li');

                li.innerHTML = `
               <h3>ship name: ${item.name}</h3> 
               <h6>ship class: ${item.starship_class}</h6>
               <p>crew number: ${item.crew}</p>
               <p>ship length: ${item.length} m</p>
                
                `;
                li.className = 'filmCard'
                dataList.appendChild(li)
            })
        }
        else if (searchInput.value == 'vehicles') {
            dataList.className = 'dataList';
            starData.results.map((item) => {
                const li = document.createElement('li');

                li.innerHTML = `
               <h3>name: ${item.name}</h3> 
               <h6>passengers: ${item.passengers}</h6>
               <p>cargo capacity: ${item.cargo_capacity}</p>
               <p>length: ${item.length} m</p>
                
                `;
                li.className = 'filmCard'
                dataList.appendChild(li)
            })
        } else {
            const message = document.createElement('h2');
            dataList.className = '.hidden'

            message.innerText = 'no data has been found...'
            dataContainer.appendChild(message)


        }
        console.log('all good');
    } else {
        console.log('all bad');
    }


}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dataList.innerHTML = '';
    if (!searchInput.value) { return };

    getData(searchInput.value)
    console.log(searchInput.value);
})



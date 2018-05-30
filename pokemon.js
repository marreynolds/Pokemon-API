let baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;
const section = document.querySelector('section')


function searchPokemon() {
    let pokeName = searchPoke.value;
    if (pokeName.trim() == "") {
        alert("Enter a pokemon!");
    } else {
        url = baseURL + pokeName.toLowerCase(); //if the pokemon's name is in capital letters, the search will be returned as undefined
        fetch(url)
            .then(response => { //response is the promise that we create to represent the data from the API
                return response.json(); //convert the response we get from the API into a json object
            }).then(data => {
                let sprite = data.sprites.front_default;
                console.log(sprite);
                let img = document.createElement('img');
                img.src = sprite;
                section.appendChild(img);
            })
    }
}

function pokemonType() {
    let pokeName = searchPoke.value;
    if (pokeName.trim() == "") {
        alert("Enter a pokemon!");
    } else {
        url = baseURL + pokeName.toLowerCase(); //if the pokemon's name is in capital letters, the search will be returned as undefined
        fetch(url)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                let types = [];
                let span = document.createElement('span');
                let para = document.createElement('p');
                for (let i = 0; i < data.types.length; i++) {
                    // console.log(data.types[i].type.name)
                    types.push(data.types[i].type.name)
                }
                if (types.length == 2) {
                    console.log(types)
                    // let types1 = data.types[0].type.name;
                    // let types2 = data.types[1].type.name;
                    // console.log(types1)
                    para.innerHTML = types[0] + " ";
                    para.innerHTML += types[1];
                    // span.appendChild(para)
                    // section.appendChild(span)
                } else {
                    let type = types[0]
                    // let type = data.types[0].type.name;
                    // console.log(type)
                    // let span = document.createElement('span');
                    // let para = document.createElement('p');
                    para.innerHTML = type;
                    // span.appendChild(para)
                    // section.appendChild(span)
                }
                span.appendChild(para)
                section.appendChild(span)

            })
    }
}

function clearData() {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
}
// let type = data.types[0].type.name;
// console.log(type)
// let span = document.createElement('span');
// let para = document.createElement('p');
// para.innerHTML = type
// span.appendChild(para);
// section.appendChild(span);
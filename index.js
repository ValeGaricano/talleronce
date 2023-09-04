const urlGatos = 'https://api.thecatapi.com/v1/images/search';
const urlPerros = 'https://api.thedogapi.com/v1/images/search';
const btnGatos = document.getElementById('gatos');
const btnPerros = document.getElementById('perros');
const img = document.querySelector('img');

btnGatos.addEventListener('click', function(){
    fetch(urlGatos)
    .then(res => res.json())
    .then(data => {
        img.src = data[0].url
    })
});

btnPerros.addEventListener('click', function(){
    fetch(urlPerros)
    .then(res => res.json())
    .then(data => {
        img.src = data[0].url
    })
});
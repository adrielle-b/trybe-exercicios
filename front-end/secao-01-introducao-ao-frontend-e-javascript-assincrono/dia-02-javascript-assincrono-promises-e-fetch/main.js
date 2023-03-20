import Swal from 'sweetalert2';

const imagem = document.querySelector('#image');
const nome = document.querySelector('#name');
const button = document.querySelector('#button');

const baseUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';

const maxHeroes = 731;

const randomId = () => Math.floor(Math.random() * maxHeroes);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();
  fetch(`${baseUrl}/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.images.lg);
      imagem.src = data.images.lg;
      nome.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Herói não encontrado',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Ok',
    }));
});


function changeMode(){
	changeClass();
	changeText();
}

function changeClass(){
	botao.classList.toggle('dark-mode');
	titulo.classList.toggle('dark-mode');
	page.classList.toggle('dark-mode');
}

function changeText(){
	if(page.classList.contains('dark-mode')){
		botao.innerHTML = 'Ligth Mode';
		titulo.innerHTML = 'Dark Mode On';
		return;
	}
	botao.innerHTML = 'Dark Mode';
	titulo.innerHTML = 'Ligth Mode On';
}

const botao = document.querySelector('.btn');
const titulo = document.getElementsByTagName('h1')[0];
const page = document.getElementsByTagName('body')[0];

botao.addEventListener('click', changeMode);
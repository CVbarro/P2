const jogadorArmazenado = localStorage.getItem('jogadorSelecionado');
const jogador = JSON.parse(jogadorArmazenado);
const perfil = localStorage.getItem('ImgJogador');
const containerDetalhes = document.getElementById('alegria');
const containerimp = document.getElementById('tristeza');
const containerdisc = document.getElementById('raiva');

const jogadordescri = document.createElement('p');
jogadordescri.classList.add('jogador-descricao');
jogadordescri.textContent = `Descrição: ${jogador.desc}`;

const jogadortemp = document.createElement('div');
jogadortemp.classList.add('jogador-tempo');

const jogadorContainer = document.createElement('div');
jogadorContainer.classList.add('jogador-container');

const imagemJogador = document.createElement('img');
imagemJogador.src = perfil;

const posicaoElemento = document.createElement('h1');
posicaoElemento.textContent = `Posição: ${jogador.posicao}`;

const nomeElemento = document.createElement('h2');
nomeElemento.textContent = `Nome: ${jogador.nome}`;

const nomecompElemento = document.createElement('h3');
nomecompElemento.textContent = `Nome Completo: ${jogador.nome_completo}`;

const nascElemento = document.createElement('p');
nascElemento.textContent = `Data de Nascimento: ${jogador.nascimento}`;

const altElemento = document.createElement('p');
altElemento.textContent = `Altura: ${jogador.altura}`;

jogadortemp.appendChild(imagemJogador);
jogadortemp.appendChild(posicaoElemento);
jogadortemp.appendChild(nomeElemento);
jogadorContainer.appendChild(nomecompElemento);
jogadorContainer.appendChild(nascElemento);
jogadorContainer.appendChild(altElemento);

containerDetalhes.appendChild(jogadorContainer);
containerimp.appendChild(jogadortemp);
containerdisc.appendChild(jogadordescri);




const jogadoresImagens = [];
jogadores.forEach((ele, index) => {
  const jogadorImagemURL = ele.imagem;
  jogadoresImagens.push(jogadorImagemURL);

  const jogadorContainer = document.createElement('div');
  jogadorContainer.classList.add('jogador-container');

  const JogadoresImagem = document.createElement('img');
  JogadoresImagem.src = jogadorImagemURL;

  if (ele.elenco === 'masculino') {
    const containerMasculino = document.getElementById('JogadoresMasculinos');
    jogadorContainer.appendChild(JogadoresImagem);
    containerMasculino.appendChild(jogadorContainer);
  } else if (ele.elenco === 'feminino') {
    const containerFeminino = document.getElementById('JogadoresFemininos');
    jogadorContainer.appendChild(JogadoresImagem);
    containerFeminino.appendChild(jogadorContainer);
  }

  JogadoresImagem.addEventListener("click", function(){
    const jogador = {
      nome: ele.nome,
      posicao: ele.posicao ,
      desc: ele.descricao ,
      nome_completo: ele.nome_completo ,
      nascimento: ele.nascimento ,
      altura: ele.altura
    };
    localStorage.setItem('jogadorSelecionado', JSON.stringify(jogador));
    localStorage.setItem('ImgJogador', jogadorImagemURL);
    window.location.href = 'detalhes.html';
  });

  const nomeJogador = document.createElement('p');
  nomeJogador.textContent = ele.nome;
  jogadorContainer.appendChild(nomeJogador);


});


  
  
  
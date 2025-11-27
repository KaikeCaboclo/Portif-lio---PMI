document.querySelectorAll('.projeto-card').forEach(card => {
    card.addEventListener('click', carregarDetalhesProjeto);
})

async function carregarDetalhesProjeto(evento){
    const conteudo=evento.currentTarget.dataset.detalhes;
    if(!conteudo){
        return
    };
    const div=document.querySelector('.grid-projetos');
    div.classList.remove('grid-projetos');
    div.classList.add('cardProjetoAberto');
    await carregarConteudo(conteudo)
    document.querySelector('.voltar').addEventListener('click', botaoVoltarParaPadrao);
}

async function carregarConteudo(conteudo){
    const buscar=await fetch(conteudo);
    const conteudoformatado=await buscar.text();
    const div=document.querySelector('#projetos');
    div.innerHTML=conteudoformatado;
}


async function botaoVoltarParaPadrao(evento){
    const div=document.querySelector('#projetos');
    div.classList.remove('cardProjetoAberto');
    div.classList.add('grid-projetos');
    const conteudoPadrao=evento.currentTarget.dataset.voltar;
    await carregarConteudo(conteudoPadrao)
    document.querySelectorAll('.projeto-card').forEach(card => {
    card.addEventListener('click', carregarDetalhesProjeto);
})
}
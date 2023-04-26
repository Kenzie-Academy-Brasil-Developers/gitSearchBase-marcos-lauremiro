const exitError = () => {
    const buttonVoltar = document.querySelector('.nova_busca')
    buttonVoltar.addEventListener('click', () => {
        window.location.assign('http://127.0.0.1:5500/index.html')
    })
}
exitError()
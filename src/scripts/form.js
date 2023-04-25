export const usuarioGithub = () => {
    const input = document.querySelector('#usuario')
    const button = document.querySelector('.buttonSearch')

    button.addEventListener('click', (e) => {
        e.preventDefault()
        const userName = input.value
    })
}
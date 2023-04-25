import { users } from "./request.js"

export const usuarioGithub = () => {
    const input = document.querySelector('#usuario')
    const button = document.querySelector('.buttonSearch')

    button.addEventListener('click',async (e) => {
        e.preventDefault()
        let userName = input.value
        if(userName == ''){
            alert('Digite um usuario')
            userName = input.value
        }else{
            console.log(await users(userName))
        }
    })
}
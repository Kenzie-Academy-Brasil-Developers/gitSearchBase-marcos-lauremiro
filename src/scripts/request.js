
import { renderProfile } from "./profile.js"

const urlUser = 'https://api.github.com/users/'

export const users = async (nameUser) =>{
    const user = await fetch(`${urlUser}${nameUser}`, {
        method: "GET",
    })
    .then((res) =>{
        if(res.ok){
            return res.json()
        }else{
            window.location.assign('http://127.0.0.1:5500/src/pages/error.html')
            throw new Error('usuario não encotrado')
        }
    })
    return user
}

export const repos = async (nameUser) => {
    const repo = await fetch(`${urlUser}${nameUser}/repos`, {
        method:"GET",
    })
    .then((res) => {
        if(res.ok){
            return res.json()
        }else{
            throw new Error('Repositorio não encontrado')
        }
    })
    return repo
}

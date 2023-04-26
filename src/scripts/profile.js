import { repos, users } from "./request.js";

const nameUser = localStorage.getItem('nameSearch')
console.log(nameUser)

export const renderProfile = (objProfile) => {
    const header = document.querySelector('.header__controler')
    header.innerHTML = ''

    const divHeader = document.createElement('div')
    const divHeaderPerfil = document.createElement('div')
    const figureHeader = document.createElement('figure')
    const imgheaderFigure = document.createElement('img')
    const h1Perfil = document.createElement('h1')
    const buttonHeader = document.createElement('button')

    header.append(divHeader)

    divHeader.append(divHeaderPerfil)
    divHeaderPerfil.append(figureHeader)
    figureHeader.append(imgheaderFigure)
    divHeaderPerfil.append(h1Perfil)
    divHeader.append(buttonHeader)

    divHeader.classList.add('header__container')
    divHeaderPerfil.classList.add('perfil')
    
    imgheaderFigure.src = objProfile.avatar_url
    h1Perfil.innerHTML = objProfile.login

    buttonHeader.innerText = 'Trocar de usuario'

    buttonHeader.addEventListener('click', () => {
        window.location.replace('../index.html')
    })
}

export const renderRepos = (arrayRepos) => {
    const ul = document.querySelector('.main__container')
    ul.innerHTML = ''

    arrayRepos.forEach(element => {
        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const button = document.createElement('button')

        ul.append(li)
        li.append(h2)
        li.append(p)
        li.append(button)

        h2.innerHTML = element.name
        p.innerHTML = 'Lorem ipsum dolor, sit Voluptas aspernatur recusandae laborum. Illum eaque illo eum, repellendus quam incidunt dignissimos suscipit officia molestiae doloremque deserunt'
        button.innerHTML = 'repositório'

        
    })
}

console.log(await users((nameUser)))
renderProfile(await users((nameUser)))

console.log(await repos(nameUser))
renderRepos(await repos(nameUser))
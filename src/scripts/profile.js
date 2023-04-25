export const renderProfile = (arrayProfile) => {
    const header = document.querySelector('.header__controler')

    arrayProfile.forEach(element => {
        const divHeader = document.createElement('div')
        const divHeaderPerfil = document.createElement('div')
        const figureHeader = document.createElement('figure')
        const imgheaderFigure = document.createElement('img')
        const h1Perfil = document.createElement('h1')
        const buttonHeader = document.createElement('button')
        
    });

}

export const renderRepos = (arrayRepos) => {
    const ul = document.querySelector('main__container')

    arrayRepos.forEach(element => {
        const li = document.createElement('li')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const button = document.createElement('button')
    })

}

const urlUser = 'https://api.github.com/users/'

export const users = async (nameUser) =>{
    const user = await fetch(`${urlUser}${nameUser}`, {
        method: "GET",
    })
    .then((user) =>{
        if(user.ok){
            window.location.assign('http://127.0.0.1:5500/src/pages/profile.html')
            return user.json()
        }else{
            throw new Error('usuario não encotrado')
        }
    })
    return user
}

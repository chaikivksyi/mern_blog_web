import api from "./api";

export const register = async (user) => {
    console.log(user)
    api.post('user/register', user).then(res => {
        console.log(res)
    })
}

export const login = async (user) => {
    console.log(user)
    api.post('user/login', user).then(res => {
        console.log(res)
    })
}
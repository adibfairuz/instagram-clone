import axios from 'axios'

axios.defaults.headers.common['app-id'] = process.env['DUMMY_API_APP_ID']

const getPosts = async (params) => {
    const res = await axios.get('https://dummyapi.io/data/v1/post', {
        params
    })
    return res
}

const getUsers = async (params) => {
    const res = await axios.get('https://dummyapi.io/data/v1/user', {
        params
    })
    return res
}

const getUser = async (p) => {
    const { userId, ...params } = p
    const res = await axios.get(`https://dummyapi.io/data/v1/user/${userId}/post`, {
        params
    })
    return res
}

export {
    getPosts,
    getUsers,
    getUser
}
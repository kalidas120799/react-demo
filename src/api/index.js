import axios from "axios"
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = process.env.REACT_APP_SERVER_ORIGIN

export const postRequest = async (url, bodyData = {}, headerData = {}) => {
    const responese = await axios.post(url, bodyData, {
        headers: headerData
    }).then((res) => res.data).catch((err) => err.response)
    return await responese
}

export const getRequest = async (url, headerData = {}) => {

    const responese = await axios.get(url, {
        headers: headerData
    }).then((res) => res.data).catch((err) => err.response)
    return await responese
}

export const patchRequest = async (url,bodyData={}, headerData = {}) => {

    const responese = await axios.patch(url,bodyData, {
        headers: headerData
    }).then((res) => res.data).catch((err) => err.response)
    return await responese
}

export const putRequest = async (url, bodyData = {}, headerData = {}) => {
    const responese = await axios.put(url, bodyData, {
        headers: headerData
    }).then((res) => res.data).catch((err) => err.response)
    return await responese
}

export const deleteRequest = async (url, headerData = {}) => {
    const responese = await axios.delete(url, {
        headers: headerData
    }).then((res) => res.data).catch((err) => err.response)
    return await responese
}


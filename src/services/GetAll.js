import Url from "./Url"

const GetAll = async () => {
    const response = await fetch(Url)
    const data = response.json()
    return data
}

export default GetAll
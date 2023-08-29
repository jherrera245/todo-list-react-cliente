import Url from "./Url"

const Create = async (tarea) => {
    fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
    }).then(async response => {
        const result = await response.json()
        if (response.ok) {
            console.log(result)
        }else{
            console.log(result.errors)
        }
    }).catch(error => {
        console.log(error)
    })
}

export default Create
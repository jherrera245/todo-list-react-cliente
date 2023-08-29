import Url from "./Url"

const Update = async (id, tarea) => {
    fetch(`${Url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
    }).then(async response => {
        const result = await response.json()
        if (response.ok) {
            console.log(result)
        }else{
            console.log(result)
        }
    }).catch(error => {
        console.log(error)
    })
}

export default Update
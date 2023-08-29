import Url from "./Url"

const Delete = async (id) => {
    fetch(`${Url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
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

export default Delete
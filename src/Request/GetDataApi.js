

async function GetDataApi(Current){
    const Data = await fetch(`https://jsonplaceholder.typicode.com/users/${Current}`)
    return await Data.json()
}

export default GetDataApi
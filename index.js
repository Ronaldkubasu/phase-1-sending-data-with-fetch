// Add your code here
function submitData(name, email){

    const body = document.querySelector('body')

    const userData = {
        name: "Steve",
        email: "steve@steve.com",
    }

    const url = "http://localhost:3000/users";

    const object = {
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify(userData)
    }
    return(fetch(url,object)
    .then(res=>res.json())
    .then(data=>body.textContent=data.id)
    .catch(error=>{
        return(body.textContent = error)
    }))
}

console.log(submitData(name, email));
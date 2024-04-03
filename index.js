// Add your code here
function submitData(username, useremail){
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
                },
        body: JSON.stringify({
            name: username,
            email: useremail
        })
    })
    .then(function(response){
        return response.json();
    })
    .then(function(userData){
       const idParagrapgh = document.createElement("p");
       idParagrapgh.textContent = userData.id;
       document.querySelector("body").appendChild(idParagrapgh);
    })
    .catch(function(error){
        const errorParagraph = document.createElement("p");
        errorParagraph.textContent = error.message;
        document.querySelector("body").appendChild(errorParagraph);
    })
}

submitData();




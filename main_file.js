
async function getUsers(){
    const response = await axios.get("https://dummyjson.com/users")
    const users = response.data.users.map(function(user){
        return `<div class = "user">
                 <div class = "container">
                <h2>${user.firstName} ${user.lastName}</h2>
                <span>${user.email}</span>
                <img src="${user.image}" alt="${user.title}"/>
                <a href="user.html?userId=${user.id}">Show profile</a>
                </div>
                </div>`
    }).join('');

    document.querySelector('.users').innerHTML = users;

}

getUsers();

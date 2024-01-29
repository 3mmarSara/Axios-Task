async function getUserDetails(){
    const urlParams = new URLSearchParams(window.location.search);
    const userId =urlParams.get('userId');
    
    const response = await axios.get(`https://dummyjson.com/users/${userId}`);
    const {firstName, maidenName, lastName, age,gender, email, phone, image } = response.data;
    document.querySelector(".name").textContent = `User Name: ${firstName} ${maidenName} ${lastName}`;
    document.querySelector(".age").textContent = `Age: ${age} years`;
    document.querySelector(".gender").textContent = `Gender: ${gender}`;
    document.querySelector(".email").textContent = `Email: ${email}`;
    document.querySelector(".phone").textContent = `Phone: ${phone}`;
    document.querySelector(".userImg").src = image;
}

getUserDetails();


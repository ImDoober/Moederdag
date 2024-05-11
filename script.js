let img = document.querySelector("img")

function toonJa(){
    document.querySelector("p").textContent = 'Dan hierbij een tegoedbon om dat een keer samen te gaan doen!'
    img.src = "images/happy.jpg";
}

function toonNee(){
    document.querySelector("p").textContent = 'Alsnog krijg je een tegoedbon om het een keer samen te gaan doen ;)';
    img.src = "images/devious.jpg";
}
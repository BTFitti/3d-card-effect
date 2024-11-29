//Movemente animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const circle = document.querySelector(".circle");


//Moving animation event
container.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY)/ 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter' ,(e)=>{
    card.style.transition = 'none';
    //Popout effect
    title.style.transform = "translateZ(200px)";
    description.style.transform = "translateZ(210px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-40deg)";
    sizes.style.transform = "translateZ(220px)";
    purchase.style.transform = "translateZ(230px)"
    circle.style.transform = "translateZ(120px)rotateZ(220deg)"
})

//Animate Out
container.addEventListener('mouseleave', (e)=>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'
    //Popback
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)"
    circle.style.transform = "translateZ(0px)"
})
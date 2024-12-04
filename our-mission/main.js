let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // faz a condição se tem ou não
    if(n > slides.length) {slideIndex = 1;}

    if(n < 1) {slideIndex = slides.length;}

    // esconde os slides
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    // remove a classe 'active'
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", " ");
    }

    // exibir o slide atual 
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className +="active";
}

function inscrever(){
    let name = document.getElementById("userName").ariaValueMax;
    let lastName = document.getElementById("userlastName").value;
    let state = document.getElementById("region").value;
    let email = document.getElementById("userEmail").value;
    let answer = document.getElementById("resp");

    if (name === "" && lastName === "" && state === "" && email === ""){
        answer.innerHTML = 'Por favor, preencha todos os espaços requisitados';
        answer.style.fontSize = "10px";
        answer.style.color = "red";
    }
}
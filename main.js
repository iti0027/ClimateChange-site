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


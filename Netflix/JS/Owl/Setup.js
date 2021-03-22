
// jQuery
$('.owl-carousel').owlCarousel({

    loop:true,
    margin:10,
    nav:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    
})

function Netflix(){
    window.open("https://www.netflix.com/br/");
}

function Shows(){
    window.open("https://www.themoviedb.org/tv/top-rated?language=pt-BR");
}

function Movies(){
    window.open("https://www.themoviedb.org/movie/top-rated?language=pt-BR");
}

function Added(){
    window.open("https://www.themoviedb.org/movie/now-playing?language=pt-BR");
}

function MyList(){
    alert("In progress!");
}

function Click(){
    window.open("https://www.youtube.com/watch?v=QUkVbPf6g1Q&ab_channel=TheOffice");
}

function Redirect(){
    window.open("https://www.imdb.com/title/tt0386676/");
}
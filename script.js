const elements = document.querySelectorAll(".fade");


const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

const music = document.getElementById("bgMusic");

music.volume = 0.25;

window.addEventListener("load", () => {
    music.play().catch(() => {
        console.log("Autoplay blocked by browser");
    });
});


elements.forEach(el=>observer.observe(el));

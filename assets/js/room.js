$crisp.push(["set", "user:nickname", ["john"]]);

nav = document.getElementById('nav')
logo = document.getElementById('logo')
boutonModal = document.getElementById('boutonModal')

boutonModal.addEventListener("click", function(e){
    if(!boutonModal.classList.contains("disabled")){
        boutonModal.classList.add("disabled")
    }
    
})

window.addEventListener("scroll", function(e){
    if(this.window.scrollY === 0){
        nav.style.opacity = 1
        logo.style.width = "200px"
    } else {
        nav.style.opacity = 0.5
        logo.style.width = "80px"
    }
})

const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${ y * 4  + 75}deg)
        rotateZ(${ -x * 12  + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener("pointermove", base);

const pointer = document.querySelector("[pointer]");
const cursor = document.querySelector("[cursor-pointer]");

window.addEventListener("mousemove", function(e){

    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;


    // cursor.animate({
    //     left: `${posX}px`,
    //     top: `${posY}px`
    // },{duration: 500, fill:"forwards"});
});
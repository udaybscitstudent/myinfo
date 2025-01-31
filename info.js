function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "uday.bscitstudent22.26704@cimage.in",
    Password : "2AC7F92C39AA22D1C4D30DD8AB2380A10F39",
    To :"uday.bscitstudent22.26704@cimage.in",
    From :"uday.bscitstudent22.26704@cimage.in",
    Subject : "contact form enquiry",
    Body : "hello"
}).then(
message => alert("Thanks \n we will contact you soon")
);
}
    // loader
    let loader = document.querySelector("#loader");
    window.addEventListener('load',()=>{
    loader.style.display="none";
    })

    // related to menu
    let menu = document.querySelector('.menu');
    let left = document.querySelector('#left');
    let right = document.querySelector('#right');
    let header = document.querySelector('#top');

    let count=0;
    // click event on the menu
    var y = window.matchMedia("(max-width:1024px)");

    menu.addEventListener('click',()=>{
        if(y.matches){
            if(count==0){
            left.classList.remove('left');
            right.classList.remove('right');
            header.classList.remove('right');

            left.classList.add('right');
            right.classList.add('right');
            header.classList.add('right');
            count=1;
            }

            else{
            left.classList.remove('right');
            right.classList.remove('right');

            left.classList.add('left');
            right.classList.add('right');
            count=0;
            }
        }
        else{
            if(count==0){
            left.classList.remove('right');
            right.classList.remove('rright');
            header.classList.remove('rright');

            left.classList.add('left');
            right.classList.add('right');
            header.classList.add('right');
            // right.style.left="0px";
            count=1;
            }
            else{
            left.classList.remove('left');
            right.classList.remove('right');
            header.classList.remove('right');

            left.classList.add('right');
            right.classList.add('rright');
            header.classList.add('rright');
            count=0;
            }
        }
    })

    function myFunction(x) {
    if (x.matches) { // If media query matches
        if(count==0){
        left.classList.remove('right');
        right.classList.remove('rright');
        header.classList.remove('rright');

        left.classList.add('left');
        right.classList.add('right');
        header.classList.add('right');
        count=1;
        }
    }
    else{
        if(count==1){
        left.classList.remove('left');
        right.classList.remove('right');
        header.classList.remove('right');

        left.classList.add('right');
        right.classList.add('rright');
        header.classList.add('rright');
        count=0;
        }
    }
    }

    var x = window.matchMedia("(max-width:1024px)");
    myFunction(x);
    x.addEventListener("change", function() {
    myFunction(x);
    });



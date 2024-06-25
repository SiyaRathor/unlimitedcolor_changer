// generate a random color

const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
    
};
// console.log(randomcolor());

let stopbgcolor;
const startchangingcolor = function(){

//    stopbgcolor =  setInterval(changebgcolor,1000);
// *****for cleanup code******* use if else statements

if (stopbgcolor == null) {
    stopbgcolor =  setInterval(changebgcolor,1000);

    
}


     function changebgcolor(){
        document.body.style.backgroundColor = randomcolor();

    }
}

const stopchangingcolor = function(){
    clearInterval(stopbgcolor);
    stopbgcolor  = null //ye krne se dobra start use jab krega tab stop nhi hoga color change krne se this is the more cleanup code but doing this you've to modify above content
    
}
document.querySelector('#start').addEventListener('click',startchangingcolor);

document.querySelector('#stop').addEventListener('click',stopchangingcolor);



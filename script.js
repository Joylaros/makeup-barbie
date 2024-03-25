let currentBarbie = 1;

function changeBarbie(imageNumber) {
    const barbieImg = document.getElementById("barbie");


    if (imageNumber === currentBarbie + 1) {

        currentBarbie = imageNumber;
        barbieImg.src = `images/barbie${currentBarbie}.png`;
    } else if (imageNumber === currentBarbie) {

        currentBarbie--;
        barbieImg.src = `images/barbie${currentBarbie}.png`;
    }
}




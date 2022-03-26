const eyesup = document.querySelector('#eyesup')
const neckup = document.querySelector('#neckup')
const shouldersup = document.querySelector('#shouldersup')
const handsup = document.querySelector('#handsup')


document.querySelector('#eyesnext').addEventListener('click', eyesnext)
document.querySelector('#necknext').addEventListener('click', necknext)
document.querySelector('#shouldersnext').addEventListener('click', shouldersnext)
document.querySelector('#handsnext').addEventListener('click', handsnext)


function eyesnext(){
    neckup.classList.add('hidden')
    shouldersup.classList.add('hidden')
    handsup.classList.add('hidden')
    eyesup.classList.toggle('hidden')
}


function necknext(){
    eyesup.classList.add('hidden')
    shouldersup.classList.add('hidden')
    handsup.classList.add('hidden')
    neckup.classList.toggle('hidden')
}


function shouldersnext(){
    eyesup.classList.add('hidden')
    handsup.classList.add('hidden')
    neckup.classList.add('hidden')
    shouldersup.classList.toggle('hidden')
}


function handsnext(){
    eyesup.classList.add('hidden')
    shouldersup.classList.add('hidden')
    neckup.classList.add('hidden')
    handsup.classList.toggle('hidden')
}

//create a function that creates random pictures to be shown upon a click event
randomImageEyes()

//Create a collection of images for each click event (applies to each click event)

//where are you going to store images? [in a folder, in its own folder? what would  make this easiest?]
//pull images from where they aer located and put them in an array


//eye click event (5 gifs) [how are you going to do this?]
//one image randomly displays per each click
//whatever picture is already up, needs to go to hidden
//select one photo out of 5 in eyeclick array
//how do you want it selected?
//want one randomly selected
//need function that randomizes a number 0-4 that corresponds with image in array
//once number is selected in array
//pull corresponding number image from array
//toggle image selected from hidden to displayed in display box



//shoulder click event (5 images)
//one image randomly displays per each click

// neck click event (5 images)
//one image randomly displays per each click

//hands click event (5 images)
//one image randomly displays per each click


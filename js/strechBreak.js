// common practice is to maintain state in a central JSON object like the one below.
// using a central state from the get-go will make it way easier to develop and scale your app.
// this is a very crude version of that. Things like https://redux.js.org/ have made maintaining
// centralized state into an art form.
// often, state is not local in the browser though, it sits in a database like Firebase (realtime JSON data structure in the cloud) for example.

//timer object
//
/*document.getElementById("start").addEventListener("click", updateCountdown);

const startingMinutes = 5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

//below will run whether you add an event listener or not bc its being called
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  setInterval(updateCountdown, 1000);
}*/

//}
let timer;
function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
function resetTimer() {
  timer = 60 * 5;
}

document.getElementById("start").addEventListener("click", function () {
  let fiveMinutes = 60 * 5,
    display = document.querySelector("#countdown");
  startTimer(fiveMinutes, display);
});
/*
function resetTimer() {
  timer = 60 * 5;
}
<<<<<<< Updated upstream

window.onload = function () {
    fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};/*






/*
document.getElementById("start").addEventListener("click", startCountDown);

function startCountDown(i, p, f) {
  var pause = p;
  var fn = f;
  var countDownObj = document.getElementById("countDown");
 
 

  countDownObj.count = function (i) {
    //  write out count
    countDownObj.innerHTML = i;
    if (i == 0) {
      //  execute function
      fn();
      startCountDown(5, 1000, myFunction);
      //  stop
      return;
    }
    setTimeout(function () {
      //  repeat
      countDownObj.count(i - 1);
    }, pause);
  };
  //  set it going
  countDownObj.count(i);
}

function myFunction() {}*/

//image arrays
=======
//stretch images
>>>>>>> Stashed changes
const state = {
  eyes: {
    visible: false,
    container: "#eyesup",
    uiElement: "#eyesnext",
    images: ["eyes/thumbGazingg.gif", "eyes/figureEight.gif"],
  },
  neck: {
    visible: false,
    container: "#neckup",
    uiElement: "#necknext",
    images: ["neck/neckPull.jpg", "neck/neckturn.gif"],
  },
  shoulders: {
    visible: false,
    container: "#shouldersup",
    uiElement: "#shouldersnext",
    images: [
      "shoulders/overheadStretch.jpg",
      "shoulders/posthandclasp.gif",
      "shoulders/shoulderCross.gif",
      "shoulders/shoulderpress.gif",
    ],
  },
  hands: {
    visible: false,
    container: "#handsup",
    uiElement: "#handnext",
    images: ["hands/reversePrayerMod.jpg", "hands/pronations.gif"],
  },
};

// Most JS frameworks have some kind of starting point, an initialization step where things are set up. This is the crude vanilla version of that.

function init() {
  // Going through each item in our state array.
  // Out of the various looping mechanisms Javascript has to offer, for...in iterates through a JSON object's keys.
  for (const key in state) {
    // just good practice to put things in a try/catch. Not mandatory, but recommended.
    // it helps you take control of what happens if unexpected errors occur.
    // you can set up alternate behaviour, or just a notification for example.
    try {
      // inside the for...in loop, grab the value of the corresponding current key.
      const currentStateItem = state[key];
      // currentStateItem now provides a few things like 'container' and 'uiElement' that you can use to do stuff with... like, send it to querySelector.
      const uiElementDOMNode = document.querySelector(
        currentStateItem.uiElement
      );
      // ... or set an onclick event.
      currentStateItem.clickListener = uiElementDOMNode.addEventListener(
        "click",
        // this is a modern JS way of defining a function.
        // It's almost the same as saying 'function () {}' except that
        // this way '() => {}' makes the scope of the function open so you can use variables
        // outside the event listener definition. In this case, we're wanting to pass on
        // the currentStatItem to our click event callback function.
        // the below method is the only way you can pass variables to the click event callback:
        // normally the callback only takes one variable which is the event itself.
        // would be helpful to step through this in the Chrome Dev Tools debugger to understand how it works.
        () => {
          // we pass the key and the value corresponding to that key. We'll need both later on.
          selectExercise({ key, item: currentStateItem });
        }
      );
    } catch (error) {
      console.error(
        `Error intialising element ${key}. Check your HTML has the right identifiers.`
      );
    }
  }
}

function hideEverythingExcept(args) {
  // Just my own personal practice of passing variables to functions.
  // this way, I know what they're called.
  // check https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/
  const skipThis = args?.skipThis;
  // loop through the state again, this time to hide stuff.
  // an example of how you now benefit from having the state in one place.
  // this loop's contents are very similar to what's happening in the init function
  for (const key in state) {
    if (key === skipThis) continue;
    const currentStateItem = state[key];
    const currentDOMNode = document.querySelector(currentStateItem.container);
    currentDOMNode.classList.add("hidden");
  }
}

function selectExercise(args) {
  const key = args?.key;
  const item = args?.item;
  // the parameter I'm passing into the below function is inside a JSON object
  // the reason for that is just so that it's easier for me to remember
  // exactly what I'm passing.
  // the key is from the click event, which was set up in the init() loop
  hideEverythingExcept({ skipThis: key });
  // after everything except the subject of the click event is hidden,
  // change its visibility and image src.
  if (item) {
    // you already figured out how this random pick was made universal.
    const randomPick = Math.floor(Math.random() * item.images.length);
    // the below is basically copy/paste from your previous code
    const currentDOMNode = document.querySelector(item.container);
    currentDOMNode.src = `img/${item.images[randomPick]}`;
    currentDOMNode.classList.toggle("hidden");
  }

  // TODO: this is where you'll set your countdown timer.
}

init();

const state = {
  eyes: {
    visible: false,
    container: "#eyesup",
    uiElement: "#eyesnext",
    images: [
      "eyes/adream.png",
      "eyes/blurfloat.gif",
      "eyePalming.gif",
      "palm.gif",
    ],
  },
  neck: {
    visible: false,
    container: "#neckup",
    uiElement: "#necknext",
    images: ["blue.png", "bluecity.png", "bluecloud.png", "cloudgif.jpeg"],
  },
  shoulders: {
    visible: false,
    container: "#shouldersup",
    uiElement: "#shouldersnext",
    images: ["mushroom.png", "candle.png"],
  },
  hands: {
    visible: false,
    container: "#handsup",
    uiElement: "#handnext",
    images: ["rainy.gif", "pinkswirl.png"],
  },
};

function init() {
  for (const key in state) {
    try {
      const currentStateItem = state[key];
      const uiElementDOMNode = document.querySelector(
        currentStateItem.uiElement
      );
      currentStateItem.clickListener = uiElementDOMNode.addEventListener(
        "click",
        () => {
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
  const skipThis = args?.skipThis;
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
  hideEverythingExcept({ skipThis: key });
  if (item) {
    const randomPick = Math.floor(Math.random() * item.images.length);
    const currentDOMNode = document.querySelector(item.container);
    currentDOMNode.src = `img/${item.images[randomPick]}`;
    currentDOMNode.classList.toggle("hidden");
  }
}

init();


const outerDiv = document.getElementById("outer");
const middleDiv = document.getElementById("middle");
const innerDiv = document.getElementById("inner");

const outerButton = document.getElementById("outerButton");
const middleButton = document.getElementById("middleButton");
const innerButton = document.getElementById("innerButton");

function handleEvent(event) {
  alert(`${event.currentTarget.id} clicked!`);
  console.log(`Current target: ${event.currentTarget.id}`);
}

outerDiv.addEventListener("click", handleEvent, false);
middleDiv.addEventListener("click", handleEvent, false);
innerDiv.addEventListener("click", handleEvent, false);

outerDiv.addEventListener("click", handleEvent, true); 
middleDiv.addEventListener("click", handleEvent, true);
innerDiv.addEventListener("click", handleEvent, true);

outerButton.addEventListener("click", handleEvent);
middleButton.addEventListener("click", handleEvent);

innerButton.addEventListener("click", (event) => {
  alert("Inner Button clicked!");
  event.stopPropagation(); 
  console.log("Propagation stopped at inner button");
});

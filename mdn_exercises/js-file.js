const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.style.color = "Red"
redText.textContent = "Hey I'm Red";
container.appendChild(redText);

const blueHeading = document.createElement("h3");
blueHeading.style.color = "Blue";
blueHeading.textContent = "I'm a blue h3";
container.appendChild(blueHeading);

const div = document.createElement("div");
div.style.backgroundColor = "Pink";
div.style.borderStyle = "solid";
div.style.borderColor = "Black";
container.appendChild(div);

const anotherHeading = document.createElement("div");
anotherHeading.textContent = "I'm in a div";
div.appendChild(anotherHeading);
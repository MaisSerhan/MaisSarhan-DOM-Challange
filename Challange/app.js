// 1. Select an Element by ID
let element = document.getElementById("myElement");
console.log(element);

// 2. Select Multiple Elements by Class
let elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
}

// 3. Change Text of an Element
// Select an element with a given ID and change its text content to "Hello, JavaScript!"
let myElementToChangeText = document.getElementById("myElement");
if (myElementToChangeText) {
    myElementToChangeText.textContent = "Hello, JavaScript!";
}

// 4. Change Background Color of an Element
// Write a function that selects an element by its id and changes its background color to blue.
function changeBackgroundColor(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = "blue";
    }
}
changeBackgroundColor("myElement"); // Example usage

// 5. Add Event Listener for Click
// Create a button in HTML and add a click event listener in JavaScript to display a message when clicked.
let button = document.getElementById("myButton");
if (button) {
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });
}

// 6. Remove an Element from the DOM
// Write JavaScript code that selects an element by its id and removes it from the DOM.
// Note: Uncommenting this will remove the element, affecting subsequent challenges that rely on it.
// let elementToRemove = document.getElementById("myElement");
// if (elementToRemove) {
//     elementToRemove.remove();
// }

// 7. Create a New Element and Append it to the Body
// Write a function that creates a new div element, adds text to it, and appends it to the body of the document.
function createAndAppendDiv() {
    let newDiv = document.createElement("div");
    newDiv.textContent = "This is a new div element!";
    document.body.appendChild(newDiv);
}
createAndAppendDiv();

// 8. Toggle a Class on an Element
// Write a JavaScript function that toggles a class on a button when clicked. The class should change the button's style.
function toggleButtonStyle() {
    let buttonToToggle = document.getElementById("myButton");
    if (buttonToToggle) {
        buttonToToggle.classList.toggle("toggled-style");
    }
}
let buttonForToggle = document.getElementById("myButton");
if (buttonForToggle) {
    buttonForToggle.addEventListener("click", toggleButtonStyle);
}

// 9. Change the Style of an Element Dynamically
// Write a JavaScript function that changes the font size of an element when a button is clicked.
function changeFontSize() {
    let myParagraph = document.getElementById("myParagraph");
    if (myParagraph) {
        myParagraph.style.fontSize = "24px";
    }
}
// Create a button for this challenge if not already in HTML
let fontSizeButton = document.createElement("button");
fontSizeButton.textContent = "Change Paragraph Font Size";
document.body.appendChild(fontSizeButton);
fontSizeButton.addEventListener("click", changeFontSize);

// 10. Handle Mouse Hover Event
// Add an event listener to an element that changes its color when the mouse hovers over it.
let hoverElement = document.getElementById("myElement");
if (hoverElement) {
    hoverElement.addEventListener("mouseenter", function() {
        hoverElement.style.color = "red";
    });
    hoverElement.addEventListener("mouseleave", function() {
        hoverElement.style.color = "#333"; // Revert to original color
    });
}

// 11. Change the Text of a Paragraph When a Button is Clicked
// Write a function that changes the text content of a paragraph when a button is clicked.
function changeParagraphText() {
    let myParagraph = document.getElementById("myParagraph");
    if (myParagraph) {
        myParagraph.textContent = "The paragraph text has been changed by a button click!";
    }
}
// Create a button for this challenge if not already in HTML
let paragraphChangeButton = document.createElement("button");
paragraphChangeButton.textContent = "Change Paragraph Text";
document.body.appendChild(paragraphChangeButton);
paragraphChangeButton.addEventListener("click", changeParagraphText);

// 12. Find and Change Parent Element's Text
// Given a list of items, write a JavaScript function that finds a list item and changes the text of its parent element.
function changeParentText() {
    let targetItem = document.getElementById("targetItem");
    if (targetItem && targetItem.parentElement) {
        targetItem.parentElement.textContent = "Parent Text Changed!";
    }
}
changeParentText();

// 13. Loop Through All Elements with a Class and Change Their Style
// Write a function that loops through all elements with a specific class and changes their background color to yellow.
function changeClassElementsStyle() {
    let myClassElements = document.getElementsByClassName("myClass");
    for (let i = 0; i < myClassElements.length; i++) {
        myClassElements[i].style.backgroundColor = "yellow";
    }
}
changeClassElementsStyle();

// 14. Create an Image Element Dynamically
// Write a JavaScript function that dynamically creates an img element, sets its src attribute, and appends it to the body.
function createImageElement() {
    let newImage = document.createElement("img");
    newImage.src = "https://github.com/MaisSerhan/MaisSarhan/blob/main/static/photo/shorticon.png?raw=true"; // Changed size for variety
    newImage.alt = "Dynamically created image";
    document.body.appendChild(newImage);
}
createImageElement();

// 15. Add Multiple Event Listeners to a Single Element
// Write JavaScript code that adds both a click and a mouseenter event listener to a single button element.
let multiEventButton = document.getElementById("myButton");
if (multiEventButton) {
    multiEventButton.addEventListener("click", function() {
        console.log("Button clicked (multiple listeners)!");
    });
    multiEventButton.addEventListener("mouseenter", function() {
        console.log("Mouse entered the button (multiple listeners)!");
    });
}

// 16. Create a List of Items Dynamically
// Write a JavaScript function that dynamically creates a list of items and appends them to an existing ul element.
function createDynamicList() {
    let ulElement = document.getElementById("dynamicList");
    if (ulElement) {
        let items = ["Item A", "Item B", "Item C"];
        items.forEach(itemText => {
            let li = document.createElement("li");
            li.textContent = itemText;
            ulElement.appendChild(li);
        });
    }
}
createDynamicList();

// 17. Select the First Child of an Element
// Write JavaScript code to select the first child element of a parent element and log its content.
let parentElementForChild = document.getElementById("parentForFirstChild");
if (parentElementForChild && parentElementForChild.firstElementChild) {
    console.log("First child content:", parentElementForChild.firstElementChild.textContent);
}

// 18. Change the Text of All Paragraphs
// Write a JavaScript function that changes the text of all paragraph elements on a page to "New Text".
function changeAllParagraphsText() {
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = "New Text";
    }
}
changeAllParagraphsText();

// 19. Create a Table Dynamically
// Write a JavaScript function that creates a table with 3 rows and 3 columns, and appends it to the body of the document.
function createDynamicTable() {
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse"; // Simple styling for visibility

    for (let i = 0; i < 3; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("td");
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
            cell.style.border = "1px solid black";
            cell.style.padding = "8px";
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}
createDynamicTable();

// 20. Use querySelector to Select an Element and Modify Its Content
// Write JavaScript code that uses querySelector to select the first h2 element on the page and changes its content to "Updated Heading".
let firstH2 = document.querySelector("h2");
if (firstH2) {
    firstH2.textContent = "Updated Heading";
}

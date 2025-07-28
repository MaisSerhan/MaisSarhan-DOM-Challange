//1. Select an Element by ID
/*• Write a JavaScript code to select an element by its id and log it to
the console.*/
let element = document.getElementById("divId1")
console.log(element)




/*2. Select Multiple Elements by Class
• Write a JavaScript code to select all elements with a specific class
name and log their text content.*/
let elemtClass = document.getElementsByClassName("class1")
for(i=0;i<elemtClass.length;i++){
    console.log(elemtClass[i])
    console.log(elemtClass[i].textContent)
}




/*3. Change Text of an Element
• Select an element with a given ID and change its text content to
"Hello, JavaScript!"*/
element.textContent = "Hello, JavaScript!"
console.log(element)








/*4. Change Background Color of an Element
• Write a function that selects an element by its id and changes its
background color to blue.*/
function changeBackground(id){
    let elem = document.getElementById(id)
    elem.style.backgroundColor = "blue"
}
changeBackground("divId1")







/*5. Add Event Listener for Click
• Create a button in HTML and add a click event listener in
JavaScript to display a message when clicked.*/
let btn = document.createElement("button");
btn.textContent="Click Me"
btn.onclick = function () {
  alert("Click me");
};
document.body.appendChild(btn)
//or use event listen
/*btn.addEventListener("click", function () {
  alert("Click me");
});*/








/*6. Remove an Element from the DOM
• Write JavaScript code that selects an element by its id and
removes it from the DOM.*/

let removElm = document.getElementById("divId1");
if(removElm){
    removElm.remove()
}



/*7. Create a New Element and Append it to the Body
• Write a function that creates a new div element, adds text to it,
and appends it to the body of the document.*/

let newDivElm = function(){
    let newDiv = document.createElement("div");
    newDiv.textContent = "new div element";
    document.body.appendChild(newDiv);
}
newDivElm();



/*8. Toggle a Class on an Element
• Write a JavaScript function that toggles a class on a button when
clicked. The class should change the button's style.*/

function toggleClass(btnClass) {
    let btn = document.getElementsByClassName(btnClass)[0]; // Get the first element

    btn.addEventListener("click", function () {
        if (btn.classList.contains("active")) {
            btn.textContent = "old btn class";
            btn.style.backgroundColor = "blue";
        } else {
            btn.textContent = "new btn class";
            btn.style.backgroundColor = "green";
        }
        btn.classList.toggle("active");
    });
}


toggleClass("myBtn");



/*9. Change the Style of an Element Dynamically
• Write a JavaScript function that changes the font size of an
element when a button is clicked.*/

let btn9=document.getElementById("task9")
btn9.onclick=function(){
    btn9.style.fontSize = "50px";
}




/*10. Handle Mouse Hover Event
• Add an event listener to an element that changes its color when the
mouse hovers over it.*/

const element10 = document.getElementById('hoverElement10');

// When mouse enters the element
  element10.addEventListener('mouseenter', () => {
    element10.style.backgroundColor = 'orange';
  });

  // When mouse leaves the element
  element10.addEventListener('mouseleave', () => {
    element10.style.backgroundColor = 'lightblue';
  });






  /*11. Change the Text of a Paragraph When a Button is Clicked 
• Write a function that changes the text content of a paragraph when 
a button is clicked. */

button.addEventListener("click", function () {
  document.getElementById("myParagraph").textContent = "Text changed!";
});





/*12. Find and Change Parent Element’s Text 
• Given a list of items, write a JavaScript function that finds a list 
item and changes the text of its parent element.*/

function changeParentText(childId) {
  let child = document.getElementById(childId);
  if (child && child.parentElement) {
    child.parentElement.textContent = "Parent text changed!";
  }
}





/*13. Loop Through All Elements with a Class and Change Their 
Style 
• Write a function that loops through all elements with a specific 
class and changes their background color to yellow. */

function yellowAllByClass(cls) {
  let items = document.getElementsByClassName(cls);
  for (let item of items) {
    item.style.backgroundColor = "yellow";
  }
}




/*14. Create an Image Element Dynamically 
• Write a JavaScript function that dynamically creates an img 
element, sets its src attribute, and appends it to the body. */

function createImage() {
  let img = document.createElement("img");
  img.src = "https://github.com/MaisSerhan/MaisSarhan/blob/main/static/photo/shorticons.png?raw=true";
  img.alt = "Dynamic Image";
  document.body.appendChild(img);
}
createImage();



/*15. Add Multiple Event Listeners to a Single Element 
• Write JavaScript code that adds both a click and a 
mouseenter event listener to a single button element. */

button.addEventListener("mouseenter", function () {
  console.log("Mouse entered button!");
});






/*16. Create a List of Items Dynamically 
• Write a JavaScript function that dynamically creates a list of items 
and appends them to an existing ul element. */

function createList(items) {
  let ul = document.createElement("ul");
  items.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}
createList(["Item 1", "Item 2", "Item 3"]);








/*17. Select the First Child of an Element 
• Write JavaScript code to select the first child element of a parent 
element and log its content. */

function logFirstChild(id) {
  let parent = document.getElementById(id);
  if (parent && parent.firstElementChild) {
    console.log(parent.firstElementChild.textContent);
  }
}







/*18. Change the Text of All Paragraphs 
• Write a JavaScript function that changes the text of all paragraph 
elements on a page to "New Text". */

let paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
  p.textContent = "New Text";
}








/*19. Create a Table Dynamically 
• Write a JavaScript function that creates a table with 3 rows and 3 
columns, and appends it to the body of the document. */

function createTable(rows, cols) {
  let table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let td = document.createElement("td");
      td.textContent = `Row ${i + 1}, Col ${j + 1}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}
createTable(3, 3);




/*20. Use querySelector to Select an Element and Modify Its 
Content 
• Write JavaScript code that uses querySelector to select the 
first h2 element on the page and changes its content to "Updated 
Heading". */

let h2 = document.querySelector("h2");
if (h2) h2.textContent = "Updated Heading";
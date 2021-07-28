function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector('#content') // getting the div from the HTML doc using the querySelector.
  let createUl = document.createElement('ul'); // created a unordered list. 
  content.appendChild(createUl); // appended my ul to my div in my HTML doc.
  for (let i = 0; i < arrayOfPeople.length; i++) {
    let createLi = document.createElement('li'); // creating a list tag that will be recreated for every iteration within the for loop.
    createUl.appendChild(createLi); // appending my li to my ul within my div.
    createLi.innerText = arrayOfPeople[i]; // printing the list within the shopping array to the unordered list.
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

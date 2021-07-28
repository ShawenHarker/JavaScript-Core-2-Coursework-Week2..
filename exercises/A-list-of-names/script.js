let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];
/*
In the function below I got the div by getting it with the querySelector and then I created and h1 and h2 tag and appended it to the div in the HTML document. 
I then used a for loop to iterate through the array and for each iteration I added a new h1 and h2 tag with the name and job title of the person in the array into the div in the HTML doc.
*/ 
function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content"); // getting the div from the HTML doc.
  
  for (let i = 0; i < arrayOfPeople.length; i++) { // looping through the people object array.
    let createH1 = document.createElement("h1"); // creating a new h1 tag for every iteration.
    let createH2 = document.createElement("h2"); // creating a new h2 tag for every iteration.
    content.appendChild(createH1); // appending the h1 tag to the div tag for every iteration.
    content.appendChild(createH2); // appending the h1 tag to the div tag for every iteration.
    createH1.innerText = `${arrayOfPeople[i].name}`; // adding the name to the h1 tag for every iteration of the for loop which goes into the div on the HTML doc.
    createH2.innerText = `${arrayOfPeople[i].job}`; // adding the job title to the h2 tag for every iteration of the for loop which goes into the div on the HTML doc.
  }
}

listOfNames(people);

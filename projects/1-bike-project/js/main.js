/* Part 1

 Getting targetted elements via their ids I inputted myself in the HTML.
 */
let jumbotron = document.getElementById("jumbotron-id");
let donateButton = document.getElementById("btn btn-primary btn-lrg-id");
let volunteerButton = document.getElementById("btn btn-secondary btn-lrg-id");

// Getting the buttons with their ids which was supplied to me.
let blueButton = document.getElementById("blueBtn");
let orangeButton = document.getElementById("orangeBtn");
let greenButton = document.getElementById("greenBtn");

// Adding an event listener to each button as spicified in the README.md file, giving each button its own unique style.
blueButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = `#588fbd`;
  donateButton.style.backgroundColor = `#ffa500`;
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
});

orangeButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = `#f0ad4e`;
  donateButton.style.backgroundColor = `#5751fd`;
  volunteerButton.style.backgroundColor = `#31b0d5`;
  volunteerButton.style.color = "white";
});

greenButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = `#87ca8a`;
  donateButton.style.backgroundColor = `black`;
  volunteerButton.style.backgroundColor = `#8c9c08`;
  volunteerButton.style.color = "white";
});

//____________________________________________________________________//

/* Part 2

Getting targetted elements via their ids I inputted myself in the HTML.
*/

// This function takes the validate functions, checks that it does validate and returns an alert message or a red warning background.
function submitForm(event) {
  event.preventDefault();
  event.stopPropagation();

  let returnForm = validate();

  Object.keys(returnForm.fields).forEach((key) => {
    if (returnForm.fields[key].isValid) {
      returnForm.fields[key].input.style.backgroundColor = "white";
    } else {
      returnForm.fields[key].input.style.backgroundColor =
        "rgba(255, 0, 0, 0.3)";
    }
  });

  if (returnForm.allFieldsValid === true) {
    setTimeout(() => {
      alert("Thank you for filing in the form.");
    }, 250);
  }
  if (returnForm.allFieldsValid === false) {
    setTimeout(() => {
      alert("Opps!!! You need to fill in the correct info");
    }, 250);
  }
}

// This function checks and validates all the values of the different input fields
function validate() {
  let emailInput = document.getElementById("exampleInputEmail1");
  let nameInput = document.getElementById("example-text-input");
  let textAreaInput = document.getElementById("exampleTextarea");
  
  let inputs = {
    fields: {
      email: {
        isValid: true,
        input: emailInput,
      },
      name: {
        isValid: true,
        input: nameInput,
      },
      textArea: {
        isValid: true,
        input: textAreaInput,
      },
    },
    allFieldsValid: true,
  };

  if (emailInput.value.length < 1 || !emailInput.value.includes("@")) {
    inputs.fields.email.isValid = false;
    inputs.allFieldsValid = false;
  }
  if (nameInput.value.length < 1) {
    inputs.fields.name.isValid = false;
    inputs.allFieldsValid = false;
  }
  if (textAreaInput.value.length < 1) {
    inputs.fields.textArea.isValid = false;
    inputs.allFieldsValid = false;
  }

  return inputs;
}

document
  .getElementById("btn btn-primary-id")
  .addEventListener("click", submitForm);

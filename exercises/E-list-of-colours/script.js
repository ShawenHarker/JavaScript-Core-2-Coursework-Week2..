function listOfColours(coloursArr) {
  // Write your code here...
  let content = document.getElementById('content');
  let createPTag = document.createElement('p');
  content.appendChild(createPTag);
  let select = document.createElement('select');
  select.setAttribute('id', 'selectID');
  content.appendChild(select);
  
  coloursArr.map((col) => {
    let option = document.createElement('option');
    option.textContent = col;
    return select.appendChild(option);
  })

  let getID = document.getElementById('selectID');

  getID.addEventListener('change', function () {
    let findValue = getID.value;
    createPTag.innerText = `You have selected: ${findValue}`;
    createPTag.style.color = findValue;
  }) 
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
colours.push("lightgreen");
listOfColours(colours);

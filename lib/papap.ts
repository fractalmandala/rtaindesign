import Papa from 'papaparse'

let data = undefined
let display = document.getElementById("result-text")

const parseFile = file => {
Papa.parse("/Users/amrit/Project Syn/Library/conc.csv", {
    complete: function(result) {
        data = result.data;
        renderData(data);       
  }
})
}

function renderData(data) {  

  for (let i = 1; i < data.length; i++) {
    let card = document.createElement("div");
    card.className = 'profile-card'
      let html = ''
    for (let j = 0; j < data[i].length; j++) {
      if (j === 0) {
        if (data[i][j] === '') return;
        html += `<h1>${data[i][j]}</h1>`
        // card.insertAdjacentHTML('afterend', `<h1>${data[i][j]}</h1>`)
         // += `<h1>${data[i][j]}</h1>`;
      } else {
        html += `<p>${data[i][j]}</p>`
        // card.insertAdjacentHTML('afterend', `<p>${data[i][j]}</p>`)
        // card += `<p>${data[i][j]}</p>`;
      }
    card.innerHTML = html;
    display.appendChild(card);
      
      
    }
    
    // card.innerHTML = html;
    // card += '</div>'
    // let card = document.createElement("div");

    // display.appendChild(card);
  }
}

export default renderData
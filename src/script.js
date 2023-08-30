// script.js

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("cotizacion");
    
    button.addEventListener("click", function() {
      // Redirect to cotizacion.html
      window.location.href = "cotizacion.html";
    });
  });

document.addEventListener("DOMContentLoaded", function() {
const button = document.getElementById("ExitButton");

button.addEventListener("click", function() {
    // Redirect to cotizacion.html
    window.location.href = "index.html";
});
});
  
 
// script.js

document.addEventListener("DOMContentLoaded", function() {
    const addRowButton = document.getElementById("addRowButton");
    const columnContainer = document.querySelector(".column-container");
  
    addRowButton.addEventListener("click", function() {
      addNewRow();
    });
  
    function addNewRow() {
      const newRow = document.createElement("div");
      newRow.classList.add("column-row");
  
      const inputTypes = ['number', 'text', 'number', 'number', 'number'];
      const inputWidths = ['20%', '40%', '20%', '20%', '20%'];
  
      for (let i = 0; i < inputTypes.length; i++) {
        const newInput = document.createElement("input");
        newInput.type = inputTypes[i];
        newInput.classList.add("column");
        newInput.style.width = inputWidths[i]; // Apply the specific width
        newRow.appendChild(newInput);
      }
  
      columnContainer.appendChild(newRow);
    }
  });
  
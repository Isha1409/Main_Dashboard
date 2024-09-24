let currentPanel = 1;
let rowCounter = 1;

// Function to show specific panel based on index
function showPanel(panelIndex) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel, index) => {
        panel.classList.remove('active');
        if (index + 1 === panelIndex) {
            panel.classList.add('active');
        }
    });
}

// Function to go to the next panel
function goNext() {
    if (currentPanel < 6) { // Adjusted to support 6 panels
        currentPanel++;
        showPanel(currentPanel);
    }
}

// Function to go to the previous panel
function goBack() {
    if (currentPanel > 1) {
        currentPanel--;
        showPanel(currentPanel);
    }
}

// Function to close the form
function closeForm() {
    document.querySelector('.container').style.display = 'none';
}

// Function to dynamically add a new row to the table with a remove (cross icon) button
function addNewRow() {
    const tableBody = document.querySelector('#order-table tbody');
    
    // Create a new row
    const newRow = document.createElement('tr');
    
    // Create cells for each column and add them to the new row
    newRow.innerHTML = `
        <td>${rowCounter}</td>
        <td><input type="text" placeholder="Enter Book Code"></td>
        <td><input type="number" placeholder="Enter Price"></td>
        <td><input type="number" placeholder="Enter Weight"></td>
        <td><input type="number" placeholder="Enter Quantity"></td>
        <td><input type="number" placeholder="Subtotal"></td>
    `;
    
    // Append the new row to the table body
    tableBody.appendChild(newRow);
    
    // Increment row counter for the next row
    rowCounter++;
}

// Initialize first panel
showPanel(currentPanel);

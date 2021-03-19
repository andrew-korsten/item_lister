// Listing rules:
// 1. Root tasks are marked as "a, b, c"
// 2. The second deeper levels are a1.1, a1.1.1, etc.
// 3. I always try to use only 2-3 levels in order to simplify the navigations. And I use the PMF for the larger projects

// Tasks: 
// + a. Create the functionality to add new items to the list
// + b. Create the functionality to delete items via the button
// c. Create the functionality to search in the search field (the search should be done letter by letter)


// a1 Create the let for the form
let addForm = document.getElementById('addForm');

// b1 Create let for list
let items = document.getElementById('items');

// c1 Create let for filter
let filter = document.getElementById('filter');

// a2 Create the EL for the form submit
addForm.addEventListener('submit', addItem);

// b2 Create EL for items
items.addEventListener('click', deleteItem);

// c2 Cerate the EL for filter
filter.addEventListener('keyup', searchItems);




// a3 Create the addItem function 
function addItem(e){
    // a4. create the e.preventDefault();
    e.preventDefault();
    // a5. Grab the data from the input field
    inputData = document.getElementById('addField').value;
    // a6. Create the new li
    let li = document.createElement('li');
    // a7. Copy the styles for the li from the other li's
    li.className = 'list-group-item';
    // a8. Append the textNode from the input to the new li
    li.appendChild(document.createTextNode(inputData));
    // a9. copy the delete button from the other lis
    // a9.1 Create the delete button
    let deleteBtn = document.createElement('button');

    // a9.2 Copy the styles for delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // a9.3 Add the id 
    deleteBtn.setAttribute("id", "deleteBtn");

    // a9.4 append the textNode
    deleteBtn.appendChild(document.createTextNode('X'));

    // a9.5 append the delete button to the li
    li.appendChild(deleteBtn);

    // a7. append the new li to the list
    let items = document.getElementById('items');
    items.appendChild(li);
    console.log(items);
}



// b3 Create deleteItem function
function deleteItem(e) {
    // b4 Limit the click to the button by selecting the class
    if(e.target.classList.contains('delete')) {
        // b5 Grab the parent
        e.target.parentElement.remove();
    }
}


// c3. Create the function searchItems
function searchItems(e) {
    // c4 assign the value + lower
    let input = e.target.value.toLowerCase();

    // c5 grab the lis content for comparison
    // c5.1 create the html collection
    let itemsLi = items.getElementsByTagName('li');

    // c5.2 convert the html collection into the array 
    let itemsArray = Array.from(itemsLi);

    // for loop
    for(let i = 0; i < itemsArray.length; i++) {
        // c5.3 for through the array and show the text only
        let itemsText = itemsArray[i].firstChild.textContent;

        // c5.4 make the content of items to lower
        let itemsTextLower = itemsText.toLowerCase();;     
        
        // c6 compare the input with the items and display only the matching items
        // c6.1 check whether the existing items text can't be found in the search input
        if(itemsTextLower.indexOf(input) == -1) {
            // c6.2 if it can't, hide
            itemsArray[i].style.display = 'none';
        } else {
            // c6.3 if it can, show
            itemsArray[i].style.display = 'block';            
        }

    }




}











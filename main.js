// Listing rules:
// 1. Root tasks are marked as "a, b, c"
// 2. Second-level tasks are marked as "a1, a2, a3"
// 3. Third-level tasks are marked as "1., 2., 3."
// 4. Fourth-level tasks are marked as "i, ii, iii"
// 5. Fifth-level & all other levels are marked as "1., 2., 3."
// 6. I always try to use only three levels of tasks
// to simplify navigation 


// Tasks: 
// + a. Create the functionality to add new items to the list
// + b. Create the functionality to delete items via the button
// c. Create the functionality to search in the search field
// (the search should be done letter by letter)




// I. Global variables
// a1 Create the var for form 
var form = document.querySelector('#addForm');

// a2 Create the var for the items list
var itemsList = document.querySelector('#items');

// c1 Create the var for filter
var filter = document.querySelector('#filter');




// II. Event Listeners
// a3 Create the form submit EL (IMP - use 'submit' instead of 'button click')
form.addEventListener('submit', addItem);

// b1 Create the EL for the delete button activation 
// (IMP - we create EL for overall list, and we'll deal with 
// targeting inside the function)
itemsList.addEventListener('click', deleteItem);

// c2 Creat the EL for the filter (IMP - use the "keyup"
// in order to check the match for every new letter, as 
// opposed to completed words
filter.addEventListener('keyup', filterItems);




// III. Functions
// a4 Create addItem function and pass in the "e" event 
function addItem(e) {
    // a5 Prevent the default behavior 
    e.preventDefault();
    
    // a6 Get the input value
    var newItem = document.querySelector('#addField').value;

    // a7 Create the new li element
    var li = document.createElement('li');

    // a8 Add the class because other li's have the the class
    li.classList = 'list-group-item'

    // a9 Add the texNode with the value 
    li.appendChild(document.createTextNode(newItem));

    // a10 Add the delete button 
    // 1. Create the delete button el 
    var deleteButton = document.createElement('button');

    // 2. Add the textNode with the text inside 
    deleteButton.classList = 'btn btn-danger btn-sm float-right delete';

    // 3. Append the textNode
    deleteButton.appendChild(document.createTextNode('X'));

    // 4. Append the button to the l
    li.appendChild(deleteButton);

    // a11 Append the li to the list
    itemsList.appendChild(li);
}

// b2 Create the deleteItem function and pass in the "e" event 
function deleteItem(e) {
    // b3 Use the classList.contains to filter the btn click
    if(e.target.classList.contains('delete')) {
        // b4 Create the simple confirm 
        if(confirm('Are you sure')) {
            // b5 Delete the li
            // 1. Select the respective li
            var liDeleted = e.target.parentElement;
            
            // 2. Delete the selected li
            liDeleted.remove();
        }
    }
}

// c3 Create the filterItems function
function filterItems(e) {
    // c4 Get the text from the input
    inputText = e.target.value;

    // c5 Convert the inputText to lowercase for ease
    inputTextLower = inputText.toLowerCase();

    // c6 Grab the li's content for comparison
    // 1. Grab the HTML collection from li's
    var items = itemsList.getElementsByTagName('li');

    // 2. Convert the HTML collection into the array
    // because I can't look through HTML collection elements
    var itemsArray = Array.from(items);

    // 3. Grab (and test-log) individual array elements
    for(let i = 0; i < itemsArray.length; i++) {
        // 4. Grab the text (by referring to firstChild.textContent)
        var itemsNames = itemsArray[i].firstChild.textContent;

        // 5. Convert the li's content toLowerCase
        var itemsNamesLower = itemsNames.toLocaleLowerCase();

        // c7 Compare itemsNamesLower with inputTextLowe
        // 1. Check whether any itemsNamesLower element 
        // contains the inputTextLower by using the 
        // indexOf array method
        if(itemsNamesLower.indexOf(inputTextLower) == -1) {
            // 2. hide the li's that don't have matches
            itemsArray[i].style.display = 'none';
        } else {
            // 3. show (retain) the li's that have the matches
            // this line is a must-have for new searches or
            // changed searches to work
            itemsArray[i].style.display = 'block';
        }
    }
}











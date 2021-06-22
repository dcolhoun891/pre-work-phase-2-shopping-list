window.onload = function () {
    initShoppingList ();
}; //onload rt brace

function initShoppingList () {
    let form = document.getElementById("item-form");
    form.addEventListener("submit", (event) => {
        handleItemForm (event, form);
    }); //submit event rt brace
}  //initShoppingList rt brace

function handleItemForm (event, formRef)  {
    if(event.preventDefault) {
        event.preventDefault()
    } // if block rt brace
    addItemToShoppingList();
    formRef.reset();
    // put insertion point back into the item name field after resetting form.
    //Thanks to W3 Schools.com for the tutorial...
    document.getElementById("item-name").focus();
    return false;
}  //handleItem rt brace

function addItemToShoppingList () {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");
    let id = getRandomInt(0, 10000000);
    let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
    console.log("Item HTML: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);
    setDeleteButtonEvent(id);

}  //addItem rt brace

function setDeleteButtonEvent (id) {
    let deleteButton = document.getElementById("button" + id);
    deleteButton.addEventListener("click", () => {
        console.log("Delete Button Works.");
        removeListItem(id);

    }); //event function rt brace
}  //set delete button rt brace

function createListItemHtml (itemName, itemAmount, id) {
    return `<li id = "item${id}">${itemName} - ${itemAmount} <button id = "button${id}" type="button">Delete Item</button></li>`;
} // createList rt brace

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}  //random int rt brace

function removeListItem(id){
    let listItem = document.getElementById("item"+id);
    listItem.parentNode.removeChild(listItem);

}  //remove list item rt brace
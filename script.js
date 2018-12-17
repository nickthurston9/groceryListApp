$(document).ready(function () {
    $('.header').slideDown(1000);
});

//New List Warning function
function reload() {
    if(confirm("If you start a new list, you will lose your current list. Do you wish to continue?")){
        location.reload();
    } else {
       return false; 
    }
}
//End List Warning function

//remove item function
function removeItem() {
    var removal = prompt("Please type the grocery you'd like to get off the list. " + "\n" + "Exact Spelling:");
    groceryList.pop(removal);
}
//End remove function

var groceryList = []

function addToList() { 
    var item =  $('#textInput').value;
    
    groceryList.push(item);
    console.log(groceryList)
 }

 $('button').on('click', function () {
    var item =  $('#textInput').val();

    groceryList.push(item);
    var items = "";

    for(var i = 0; i < groceryList.length; i++){
        items = items + "<li>" + groceryList[i] + "</li>";
    }

    document.getElementById("itemList").innerHTML = items;

    $('#textInput').val('');
 });
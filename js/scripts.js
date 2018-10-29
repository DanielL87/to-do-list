// Business Logic for AddressBook ---------
var listArray = [];

var itemAdd = function(item) {
  listArray.push(item);
}

var itemDelete = function(item) {
  listArray = listArray.filter(x => x != item)
}


//Front End Code

$(document).ready(function(){
  $("#add").click(function(event){
    itemAdd($("#userInput").val());
    var htmlOutput = "";
    listArray.forEach(function(contact) {
    htmlOutput += "<li>" + contact + "</li>";
  });
    $("#output").html(htmlOutput);
  });
  $("#delete").click(function(event){
    itemDelete($("#userInput").val());
    var htmlOutput = "";
    listArray.forEach(function(contact) {
    htmlOutput += "<li>" + contact + "</li>";
  });
    $("#output").html(htmlOutput);
  });

  event.preventDefault();
});

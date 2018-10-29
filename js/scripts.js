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
    var htmlForContactInfo = "";
    listArray.forEach(function(contact) {
    htmlForContactInfo += "<li>" + contact + "</li>";
  });
    $("#output").html(htmlForContactInfo);
  });
  $("#delete").click(function(event){
    itemDelete($("#userInput").val());
    var htmlForContactInfo = "";
    listArray.forEach(function(contact) {
    htmlForContactInfo += "<li>" + contact + "</li>";
  });
    $("#output").html(htmlForContactInfo);
  });

  event.preventDefault();
});

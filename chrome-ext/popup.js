
function save_options() {
  var address1 = document.getElementById("address-1");
  var address2 = document.getElementById("address-2");

  if(address1.value){
    chrome.storage.local.set({"address":address1.value})
    $('#storedAddress1').text(address1.value);
  }


  if(address2.value){
    chrome.storage.local.set({"address-2":address2.value})
    $('#storedAddress2').text(address2.value);
  }
  else alert("Not valid address format :/ please try again")
}

//onload, if there is no address two, then don't load it
//on save, if never been loaded, append
//if loaded before just modify

function main(){

  chrome.storage.local.get("address",function(data){
    console.log(data);
    $('#status').append("<h3>Address 1:</h3> " + "<p  id='storedAddress1'>"+data["address"]+"</p>");
  });
  chrome.storage.local.get('address-2',function(data){
    $('#status').append("<h3>Address 2:</h3> " + "<p  id='storedAddress2'>"+data["address-2"]+"</p>");
  })


  $('button').click(save_options);

}

$(document).ready(main);
//store current address
//

function validAddress(string){

}

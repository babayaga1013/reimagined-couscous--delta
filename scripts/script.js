$(document).ready(function () {  
    console.log("doc is ready");
   
    let revName; 
  
    $("#btnillest").click(function (){
  
        let userName = $("#userName").val();
        let illestFacts = illestNameFacts(userName); 
        
        $("#illestNameOutput").html(illestFacts);
     
      });
   
  });
  
  function illestNameFacts(userName) {
    let illestFacts = ''; 
    
    illestFacts = findStringLength(userName);
    illestFacts += "<br>" + reverseName(userName);
    illestFacts += "<br>"+ randomizeString(userName)
  
    return illestFacts;
  }
  
  function findStringLength(name) {
    return "The length of your name is " + name.length +" characters.";
}
  
  function reverseName(name) {
    
    return "Your name in reverse is " + name.split("").reverse().join("")+".";
       
  }
  function randomizeString(name) {
    const arr = name.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return "Your name encrypted is " + arr.join('')+".";
}
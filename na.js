function valli(){
    var name= document.forms["fo"]["na"];
      var clg= document.forms["fo"]["colg"];
      var sel= document.forms["fo"]["sel"];
    var mai= document.forms["fo"]["email"];
      var pas= document.forms["fo"]["pas"];
    if(mai.value.indexOf("@",0) < 0){
        alert("give the valid email");
        mai.focus;
        return false;
    }
    if(mai.value.indexOf(".",0) < 0){
        alert("give the valid email");
        mai.focus;
        return false;
    }
    
    
   
    
}
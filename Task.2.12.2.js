(function CheckNumber(messageN){
    var messageN = messageN == undefined ? "" : messageN;
    var response = prompt(messageN + "Please, enter a number", "");
    if(response == null || response  == undefined){
        return;
    }
    var result = +response
    if(isNaN(result)){
        debugger;
        response = CheckNumber(response + " is not a number!");
    }else if(typeof(result) == "number"){
        var message = (result > 0 )
                      ? 1
                      : (result < 0 )
                            ? -1
                            : 0;
      alert(message)
    }
    
}())
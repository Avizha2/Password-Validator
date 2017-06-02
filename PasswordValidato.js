var input = prompt('Please enter password to check if valid');

function checkUpperCase(input){
  for(var i = 0; i < input.length; i++){
    if(input[i] === input[i].toUpperCase()){
      return true;
    }
  }
  return false;
}

function checkLowerCase(input){
  for(var i = 0; i < input.length; i++){
    if(input[i] === input[i].toLowerCase()){
      return true;
    }
  }
  return false;
}

function checkLength(input){
  if(input.length < 8){
  	return false;   
  }
  return true;
}

function checkSpecialChar(input){
  var special = ['!','@', '#', "$", "%", '^', '&', "*",      	',','.','/','?','<','>'];
  
  for(var i = 0; i < input.length; i++){
    for(var j = 0; j < special.length; j++){
    	if(input[i] === special[j]){
      	return true;
    	}
  	}
  }
  return false;
}

function checkNumber(input){
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', 	    '9', '0'];
  for(var i = 0; i < input.length; i++){
    for(var j = 0; j < numbers.length; j++){
    	if(input[i] === numbers[j]){
      	return true;
    	}
  	}
  }
  return false;
}

function isValid(input){
  var upper = checkUpperCase(input);
  var lower = checkLowerCase(input);
  var length = checkLength(input);
  var specialChar = checkSpecialChar(input);
  var number = checkNumber(input);
  
  if(upper === true && lower === true && length === true && specialChar === true && number === true){
    console.log("Your Password is secure.");
  } else{
    console.log("Your password is not secure. Please adhere to the following  restrictions ");
    	if(upper === false){
        console.log("	>Has at least one uppercase letter");
      }
    	if(lower === false){
        console.log("	>Has at least one lowercase letter");
      }
    	if(length === false){
        console.log("	>Is at least 8 characters long");
      }
    	if(specialChar === false){
        console.log("	>Has at least one special character");
      }
    	if(number === false){
        console.log("	>Has at least one number");
      }
  }
}

isValid(input);

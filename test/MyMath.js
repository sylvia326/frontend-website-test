function getAbs()
{
    
    var txt1 = document.getElementById('txt').value;

    
    if(isNaN(txt1)){
        document.getElementById('txt2').value= "please input numbers!";
    } else if (/^[0]\d+/.test(txt1)){
        document.getElementById('txt2').value= "please start with none zero!";
    }
    else if((txt1 > Number.MAX_SAFE_INTEGER)){
        document.getElementById('txt2').value= "the value is too big!";
    }
    else if((txt1 < Number.MIN_SAFE_INTEGER)){
        document.getElementById('txt2').value= "the value is too little!";
    }
    else if (txt1.indexOf('.')> 0){
        document.getElementById('txt2').value= "There is no input!";
    }
    else if (txt1.indexOf('.')> 0){
        document.getElementById('txt2').value= "please input integers!";
    }
    else{
        document.getElementById('txt2').value= Math.abs(txt1);
    }
    
}


function getCaptalized(){
  
     var str = document.getElementById('word').value;
     var isletter = /^[a-zA-Z]+$/.test(str);
     var length = str.split("").length;
     if (isletter && length >= 3 && length < Number.MAX_SAFE_INTEGER){
        var arr= str.split("");
        arr[2] = arr[2].toUpperCase();
        document.getElementById('word2').value= arr.join("");
    }
     else if (length < 3 && length > 0){
        document.getElementById('word2').value= "please input enough letters!";
    }
     else if (length > Number.MAX_SAFE_INTEGER){
        document.getElementById('word2').value= "please input less letters!"; 
    }
     else if (str == ''){
        document.getElementById('word2').value= "No input letters!";
    }
      else{
        document.getElementById('word2').value= "please input only letters!";
    }

}



function getSort(){

	var number1 = document.getElementById('number').value;
	var number2 = number1.split(',');
	for (i=0; i < number2.length; i++){
		number2.sort(function(a,b){return a-b;});
		document.getElementById('number5').value = number2;
	}
}














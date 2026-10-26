
function showNumber(value){
    document.getElementById("result").value += value;
}

function clearResult(){
    document.getElementById("result").value = "";
}

function deleteNumber(){
    let result = document.getElementById("result");
    result.value = result.value.slice(0,-1);
}

function calculate(){
    let result = document.getElementById("result");

    try{
        if(result.value == ""){
            return;
        }

        let answer = Function("return " + result.value)();
        result.value = answer;
    }
    catch{
        result.value = "Error";
    }
}

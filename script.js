// function sumTwoNumbers(){
//     let num1;
//     let num2;

//     num1 = parseInt(prompt('Add a number'));
//     num2 = parseInt(prompt('Add a number'));

//     let result = num1 + num2;

//     alert('The result is: ' +result);

// }

// //using the init function allows us load multiple functions at once
// function init(){
//     sumTwoNumbers();
// }

// //this is the line that is calling the function and its happening after the browser finishes loading all its elements.
// window.onload = init; 

let array = [];

function add(){
    let num = document.getElementById('number').value; //adding the value attribute at the end here allows us to only retrieve the value, not the entire html element.
    num = parseInt(num);
    array.push(num);
    console.log(array);
}

function avg(){
    let result

    for(let i=0; i<array.length; i++){
        //result = result + array[i];
        result += array[i];
    }

    result = result/array.length;

    alert('The average is: ' + result);

    return result;
}


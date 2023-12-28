function button(x){
    document.getElementById("screen").innerHTML+=x
}

function negative(){
    var hey = - + document.getElementById("screen").innerHTML
    document.getElementById("screen").innerHTML= hey
}

function percent(){
    var hello = eval(document.getElementById("screen").innerHTML) / 100
    document.getElementById("workings").innerHTML= "=" + hello
}

function equal(){
   document.getElementById("workings").innerHTML = eval(document.getElementById("screen").innerHTML)
   document.getElementById("screen").innerHTML = ""
}

function remove(){
    document.getElementById("screen").innerHTML= ""
    document.getElementById("workings").innerHTML=""
}























// function calcNumbers(result){
//     form.displayResult.value=form.displayResult.value+result;
// }


// function button(display){
// var display = Number(document.getElementById("one").value)
// document.getElementById("screen").innerHTML = display

    // var display = document.querySelector("screen");
    // display.value += display;
// }




// <h1>Calculation of the Area of a Triangle</h1>
// <div>
//  <input type="number" id="base" placeholder="Base">
//  <input type="number" id="height" placeholder="Height"> <br>
//  <button id="calculate" onclick="hey()">Calculate</button> <br>
//  <span id="answer"></span>
//  </div>


// function hey(){
//     var doj = Number(document.getElementById("base").value) * Number(document.getElementById("height").value);
//     var don = doj/2
//     document.getElementById("answer").innerHTML = don
// }
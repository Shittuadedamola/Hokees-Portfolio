var colors = ['RED', 'GREY', 'BLUE', 'GREEN', 'YELLOW', 'BROWN', 'TEAL','AZURE', 'CRIMSON', 'SILVER', 'LAVENDER', 'IVORY', 'PURPLE', 'PINK', 'ORANGE', 'ORANGERED', 'MAROON', 'KHAKI', 'LIME', 'WHEAT', 'AQUAMARINE', 'CORAL', 'FUCHSIA', 'OLIVE', 'PLUM', 'SALMON', 'BEIGE', 'VIOLET', 'CADETBLUE', 'BURLYWOOD', 'YELLOWGREEN', 'TOMATO', 'STEELBLUE', 'LIMEGREEN', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

var y = 0
var t = 0

function red(x){
    document.getElementById("biggerscreen").style.backgroundColor = colors[y++]
    document.getElementById("biggerscreen").innerHTML = colors[t++]
}
var rangeSlider = document.getElementById("rangeNumber");
var rangeOutput = document.getElementById("choosenRange");
var bishSlider = document.getElementById("bishNumber");
var bishOutput = document.getElementById("choosenBish");
var boshSlider = document.getElementById("boshNumber");
var boshOutput = document.getElementById("choosenBosh");

rangeSlider.oninput = function() {
    rangeOutput.innerHTML = this.value;
    bishSlider.max = this.value;
    boshSlider.max = this.value;
}

bishSlider.oninput = function() {
    bishOutput.innerHTML = this.value;
}

boshSlider.oninput = function() {
    boshOutput.innerHTML = this.value;
}

var numberList = [];

function run() {

    let x = Number(rangeSlider.value);
    let y = 1;
    for (let i = 0; i < x; i++) {
        if (y % bishSlider.value == 0  && y % boshSlider.value != 0) {
            numberList[i] = "Bish";
        } else if (y % boshSlider.value == 0  && y % bishSlider.value != 0) {
            numberList[i] = "Bosh";
        } else if (y % boshSlider.value == 0  && y % bishSlider.value == 0) {
            numberList[i] = "Bish-Bosh";
        } else {
            numberList[i] = y;
        }

        y++;
    }
    
    window.addEventListener("click", function(){
        var perrow = 5;
        html = "<table><tr>";
    
        for (var i = 0; i < numberList.length; i++) {
            html += `<td>${numberList[i]}</td>`;
    
            var next = i + 1;
            if (next%perrow==0 && next!=numberList.length) {
            html += "</tr><tr>";
        }
        }
        html += "</tr></table>";
    
        document.getElementById("container").innerHTML = html;
    })

}


function click_button(e) {
    document.getElementById("inp").value += e;
}

function clrLast() {
    var displayValue = document.getElementById("inp").value;
    document.getElementById("inp").value = displayValue.slice(0, -1);
}

function clrall() {
    document.getElementById("inp").value = "";
}

function calculate() {
    try {
        var result = eval(document.getElementById("inp").value);
        document.getElementById("inp").value = result;
    } catch (error) {
        document.getElementById("inp").value = "Error";
    }
}

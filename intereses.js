//Toggler
function toggleUp() {
    // const f2style = window.getComputedStyle(document.getElementById("f2")).getPropertyValue("display");
    let f2style = document.getElementById("f2").style.display
    let f3style = document.getElementById("f3").style.display
    if (f3style === "none") {
        if (f2style === "none") {
        document.getElementById("f2").style.display = "block";
        return}
        document.getElementById("f3").style.display = "block";
    }
} 

function toggleDown() {
    let f2style = document.getElementById("f2").style.display
    let f3style = document.getElementById("f3").style.display
    if (f3style === "block") {
        document.getElementById("f3").style.display = "none";
        return}
        document.getElementById("f2").style.display = "none";
}
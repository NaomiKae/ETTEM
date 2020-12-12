var acc = document.getElementsByClassName("accordion");

var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    //once the condition is met it triggers the clicked function...
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var frmacc = document.getElementsByClassName("form-accordion");

var i;

for (i = 0; i < acc.length; i++) {
  frmacc[i].addEventListener("click", function () {
    //once the condition is met it triggers the clicked function...
    this.classList.toggle("active");
    // "show that active object!"

    //Next,to expand and collapse the div panels.

    //the variable called "panel"  equals this. "this" means the html element getting the event.In this case its the div and its siblings that follow.
    var frmpanel = this.nextElementSibling;

    //the first condition is "panel.style.display==="block," which says the display HAS to be block in order for the "this" to toggle the active event.  The if is a block of code to be executed if the condition is met.
    if (frmpanel.style.display === "block") {
      frmpanel.style.display = "none";
    } else {
      frmpanel.style.display = "block";
    }
  });
}

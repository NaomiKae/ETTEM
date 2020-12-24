//Establishing the variables
//"acc" is short for the class named "accordian." acc is a giant button essentually.Each "section" is a button.
var acc = document.getElementsByClassName("accordion");

var i;
//we've decided that i equals 0

//The functions to make the divs expand and collapse or show/hide.

//first,the initial value of i is set to zero. Listed next is the condition which says, "the value of i or zero has to be less than the number of options in the array or the index." And when i is increased in incriements, it will keep the lop running trying until the condition has been met.
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    //once the condition is met it triggers the clicked function...
    this.classList.toggle("active");
    // "show that active object!"

    //Next,to expand and collapse the div panels.

    //the variable called "panel"  equals this. "this" means the html element getting the event.In this case its the div and its siblings that follow.
    var panel = this.nextElementSibling;

    //the first condition is "panel.style.display==="block," which says the display HAS to be block in order for the "this" to toggle the active event.  The if is a block of code to be executed if the condition is met.
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(document).ready(function () {

  // EXERCISE 1
  /*
  Change the text of the button to "Please click me!". Putting your code in the document ready block is important.
  */
  // $("#the-button").text("Please click me!");




  // EXERCISE 2
  /* When the button is clicked, print "You clicked!" to the console. */
  // $("#the-button").click(function() {
  //   console.log("You clicked!");
  // });





  // EXERCISE 3
  /*
    When the button is clicked, change the text of the paragraph #the-message to "You clicked me!", and the text of the button #the-button to "Click again?".
    */
  // $("#the-button").click(function() {
  //   $("#the-message").text("You clicked me!");
  //   $("#the-button").text("Click again?");
  // });




  // EXERCISE 4
  /*
    When the clear button is clicked, clear the text field.
    When the save button is clicked, take the text value inside the text field, and append a new <li> element to the #log with the entered text value.
    */
    // $("#clear-button").click(function() {
    //   $("#text-field").val("");
    // });
    // $("#save-button").click(function () {
    //   var msg = $("#text-field").val();
    //   $("#log").append("<li>" + msg + "</li>");
    // });




  // EXERCISE 5
  /*
      Make it so that when you click on one of the links on this page,
      instead of navigating the browser to that page, it renders that
      page in the iframe below. Set the iframe's `src` attribute to a URL will cause it to render the page.
      */

    // $("a").click(function(event) {
    //   event.preventDefault();
    //   let address = $(this).attr('href');
    //   $("#iframe").attr('src', address);
    // });




  // EXERCISE 6
  /*
Make the hide the section the first time the section header is clicked, show it when it is clicked again.
*/


  // $("#section-header").click(function() {
  //   $("#section").toggle();
  // });






  // EXERCISE 7
  /*
    Make a Todo List

    0. Make it so that after entering the task description, in the text field and clicking the "Add Task" button, a new task appears inside the element with the id todo-list.
    1. the ability to remove tasks (add an x button)
    2. the ability to check off tasks - strikes them out wo removing (add a checkbox)
    3. the ability to delete a task
    4. the ability to edit an existing task

    */
    var removeBtn = $(".remove")[0].outerHTML;
    var editBtn = $(".edit")[0].outerHTML;

    $(".add-button").click(function() {
      let item = $(".description").val();
      $(".description").val("");
      $("#todo-list").append("<li><input type='checkbox' class='check'><span> " + item + "</span> " + editBtn + " " + removeBtn + "</li>");
    });

    $("#todo-list").on("click", ".remove", function() {
      $(this).parent().remove();
    });

    $("#todo-list").on("click", ".check", function() {
      $(this).parent().toggleClass("strike");
    });

    $("#todo-list").on("click", ".edit", function() {
      let msg = $(this).prev().text();
      $(this).parent().replaceWith("<li><input type='text' value='" + msg + "'> <button class='edit-done'>Done Editing</button></li>");
    });

    $("#todo-list").on("click", ".edit-done", function() {
      let msg = $(this).prev().val();
      $(this).parent().replaceWith("<li><input type='checkbox' class='check'><span> " + msg + "</span> " + editBtn + " " + removeBtn + "</li>");
    });
});

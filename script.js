/*

// Get all the list items
var listItems = document.querySelectorAll(".menu li");

// Attach click event listeners to the links
listItems.forEach(function (item) {
  var link = item.querySelector("a");
  link.addEventListener("click", function (event) {
    // Remove the 'current' class from all list items
    listItems.forEach(function (item) {
      item.classList.remove("current");
    });

    // Add the 'current' class to the clicked list item
    item.classList.add("current");
  });
});
*/
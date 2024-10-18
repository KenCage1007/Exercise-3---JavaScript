/**
 * JS for blog post exercise
 * You will be writing JavaScript to add the functionality of adding a new blog post to the blog.
 
  addEntry function specification:
  - An article should be appended to the #posts container. Inside should be a third level heading followed by a paragraph. The article should have the class .post added to it
  - The third level heading text content should be the text "Date: " followed by the date submitted. The paragraph's text content should be the text "Entry: " followed by the entry submitted
    - Hint: to grab the text from a form element use .value
  - If a user double clicks on any of the blog posts, the post that was clicked should be removed from the page
  The content in #date and #entry should be cleared

 */

"use strict";
(function() {

    window.addEventListener("load", init);

    function init() {
    qs("button").addEventListener("click", addEntry);
    }

    function addEntry() {
    let dateValue = id("date").value;
    let entryValue = id("entry").value;

    if (dateValue && entryValue) {
        let article = document.createElement("article");
        article.classList.add("post");

        let heading = document.createElement("h3");
        heading.textContent = "Date: " + dateValue;

        let paragraph = document.createElement("p");
        paragraph.textContent = "Entry: " + entryValue;

        article.appendChild(heading);
        article.appendChild(paragraph);

        id("posts").appendChild(article);

        id("date").value = "";
        id("entry").value = "";

        article.addEventListener("dblclick", function() {
        article.remove();
        });
    } else {
        alert("Please enter both a date and your thoughts.");
    }
    }

    function id(id) {
    return document.getElementById(id);
    }

    function qs(selector) {
    return document.querySelector(selector);
    }

})();
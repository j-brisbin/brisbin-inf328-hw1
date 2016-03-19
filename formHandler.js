window.onload = init;

var body;
var bookForm;
var isbn;
var bookID;
var author;
var title;
var year;
var addButton;
var bookList;
var newBook;
var bookDiv;
var bookNum;
var bookDisplay

function init()
{
    body = document.getElementsByTagName("body");
    bookForm = document.getElementById("addBookForm");
    isbn = document.getElementById("isbnText");
    bookID = document.getElementById("idText");
    title = document.getElementById("titleText");
    author = document.getElementById("authorText");
    year = document.getElementById("yearField");
    addButton = document.getElementById("addButton");
    addButton.onclick = formAction;
    bookList = new Array();
    bookDiv = document.getElementById("bookList");
}

function formAction(evt)
{
    try{
        newBook = new Book(bookID.value, isbn.value, title.value, author.value, year.value);
        bookList.push(newBook);
        bookDiv.innerHTML = "";
        for(var i = 0; i<bookList.length; i++)
        {
           bookDisplay = document.createElement("p");
           bookList.sort(Book.compareTo);
           bookDisplay.innerHTML = bookList[i].display();
           bookDiv.appendChild(bookDisplay);

        }
        bookID.innerHTML = bookList.size + 1;
    }
    catch(ex){
        window.alert("Error! " + ex.message);
    }

}

/**
 * Created by User on 1/26/14.
 */
var Book = function (newId, newIsbn, newTitle, newAuthor, newYear) { // implements Publication

    // Private attributes.
    var id, isbn, title, author, year;
    var numberOfBooks = 0;

    // Private method.
    function checkIsbn(isbn) {
        var sum = 0;
        if (isbn == undefined || typeof isbn != 'string') {
            return false;
        }

        isbn = isbn.replace(/-/g, ""); // Remove dashes.
        console.log(isbn.length + ": " + isbn);
        if (isbn.length != 10 && isbn.length != 13) {
            return false;
        }


        if (isbn.length === 10) { // 10 digit ISBN.
            if (!isbn.match(/^\d{9}/)) { // Ensure characters 1 through 9 are digits.
                return false;
            }
            sum = 0;
            for (var i = 0; i < 9; i++) {
                sum += ((10 - i) * parseInt(isbn.charAt(i)));
            }
            if(isbn.charAt(9) == 'X' || isbn.charAt(9) == 'x')
            {
                sum += 10;
            }
            else
            {
                sum += parseInt(isbn.charAt(9));
            }
            if(sum % 11 != 0)
            {
                return false;
            }
        }
        else { // 13 digit ISBN.

            /*if (!isbn.match(/^\d{12}/)) { // Ensure characters 1 through 12 are digits.
                return false;
            }
            sum = 0;
            for (var i = 0; i < 12; i++) {
                sum += parseInt(isbn.charAt(i)) * ((i % 2 === 0) ? 1 : 3);
                console.log(i + ": " + isbn.charAt(i) + ", " + sum + ", " + parseInt(isbn.charAt(i)));
            }
            var checksum = sum % 10;
            if (isbn.charAt(12) != checksum) {
                return false;
            }*/
        }
        return true; // All tests passed.
    }

    // Privileged methods.
    this.getId = function () {
        return id;
    };

    this.setId = function (newId) {
        id = newId;
    };

    this.getIsbn = function () {
        return isbn;
    };
    this.setIsbn = function (newIsbn) {
        if (!checkIsbn(newIsbn)) throw new Error('Your ISBN is invalid. Please enter a valid 10 or 13 digit ISBN.');
        isbn = newIsbn;
    };

    this.getTitle = function () {
        return title;
    };
    this.setTitle = function (newTitle) {
        title = newTitle || 'No title specified';
    };

    this.getAuthor = function () {
        return author;
    };
    this.setAuthor = function (newAuthor) {
        author = newAuthor || 'No author specified';
    };

    this.getYear = function () {
        return year;
    };
    this.setYear = function (newYear) {
        year = newYear;
    };

    numberOfBooks++;
    if(numberOfBooks > 50) throw new Error('Book: Only 50 instances of Book can be ' +
        'created.');
    // Constructor code.
    this.setId(newId);
    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);
    this.setYear(newYear);
};

// Public, non-privileged methods.
Book.prototype = {
    display: function () {
        return "ID: " +this.getId() + ", Author: " + this.getAuthor() + ", ISBN: " + this.getIsbn()
        + ", Title: " + this.getTitle() + ", Year: " + this.getYear();
    }
};

Book.compareTo = function(book1, book2)
{
    if(book1.getTitle() < book2.getTitle())
    {
        return -1;
    }
    else if(book1.getTitle() == book2.getTitle())
    {
        return 0;
    }
    else
    {
        return 1;
    }
}

/* What is local storage

localStorage is a read-only property of the window interface allows you to access a Storage object
for the Document´s origin

The stored data is saved across sessions

local Storage data has no expiration time

session storage is cleared when the page session ends , when the page is closed.

localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared when the last private tab is closed"

Value

a Storage object which can be used to access the current origins' local storage space.

Exceptions 

SecurityError

Description 

The keys and the values stored with localStorage are always in the UTF-16 string format,

localStorage data is specific to the protocol of the document. In particular, for a site loaded over HTTP (e.g., http://example.com), localStorage returns a different object than localStorage for the corresponding site loaded over HTTPS (e.g., https://example.com).

For documents loaded from file: URLs (that is, files opened in the browser directly from the user's local filesystem, rather than being served from a web server) the requirements for localStorage behavior are undefined and may vary among different browsers.*/


/* How to set an item in the localStorage */

localStorage.setItem("myCat", "Tom");

localStorage.setItem("myMouse", "Jerry")

/* Syntax for reading the localStorage item */

const cat = localStorage.getItem("myCat")
const mouse = localStorage.getItem("myMouse")

/* Syntax for removing an item */

localStorage.removeItem("myCat")

console.log("myCat on localStorage before cleaning", cat);
console.log("myMouse on localStorage before cleaning", mouse);

/* The syntax for removing all the localStorage items is as follows */

localStorage.clear();

/* Storage interface of the web Storage API provides access to a particular domains' session or local storage. It allows, for example , the addition, modification, or deletion of stored data items */

/* To manipulate the session storage for a domain a callWindow.sessionStorage is made */

console.log("window.sessionStorage", window.sessionStorage);

/* for localStorage */

console.log("window.localStorage", window.localStorage);









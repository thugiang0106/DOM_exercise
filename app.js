/////////////////Examines the HTML document object//////////

//console.dir(document);

//Print domain
// console.log(document.domain);

// //access URL
// console.log(document.URL);

// //title of page
// console.log(document.title);

// //type of DOC
// console.log(document.doctype);

// //head
// console.log(document.head);

// //body
// console.log(document.body);


//////Get a specific div/class
console.log(document.all[11]); //-> title

/////change a content of a div/class
//thismethod should be avoided because when you squeeze div/element -> it will target the new div
document.all[11].textContent = 'Hello';

//print the whole form
console.log(document.forms);
//print first line of form
console.log(document.forms[0]);
console.log(document.link);

//img
console.log(document.images);



//////////////SELECTOR//////////

//GetElementByID
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

//////////Change content by targeting ID
//textContent # innerHTML : innerHTML pays attention to styling
headerTitle.textContent = 'Hello';
headerTitle.innerHTML = "Goodbye";

//doesn't change h1 ->h3, put h3 inside original h1
headerTitle.innerHTML= '<h3>Hello</h3>';

/////////Change style
//use camelCase for selector: borer-bottom ->borderBottom
header.style.borderBottom = 'solid 3px black';



///////////////Get Element by Class Name///////
var items = document.getElementsByClassName('list-group-item');
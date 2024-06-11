// ADD NEW ITEM TO END OF LIST
let item = document.createElement('li');
let page = document.getElementById("page");
let u0 = page.querySelector('ul');
item.innerHTML = "cream";
u0.appendChild(item);

// ADD NEW ITEM START OF LIST
let item01 = document.createElement('li');
item01.innerHTML = "kale";
u0.insertBefore(item01, u0.firstChild);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
let numberofitems = 0;
let li = u0.querySelectorAll('li');
li.forEach(function(element) {
    element.classList.add('cool');
    numberofitems += 1;
});


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let h2 = page.querySelector('h2');
let span = document.createElement('span');
span.innerHTML = numberofitems;
h2.appendChild(span);



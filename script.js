// task 1

document.querySelector('h2').nextElementSibling.textContent = 'DOM method description';

// task 2

console.log(document.querySelectorAll('a[href*="/ua"]'));

// task 3

let list = document.querySelector('ul');
let li = document.createElement("li");
let li2 = document.createElement("li");
let li4 = document.createElement("li");

li.innerHTML = 0;
li.setAttribute('id', 'null');
list.prepend(li);
li2.innerHTML = 2;
li2.setAttribute('id', 'second');
document.getElementById('first').after(li2);
li4.innerHTML = 4;
li4.setAttribute('id', 'forth');
list.appendChild(li4);

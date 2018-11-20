//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
undefined
element.innerHTML = "I'll make you holla fo' a dolla'"
"I'll make you holla fo' a dolla'"
element
<div>​I'll make you holla fo' a dolla'​</div>​
element.style.border = "dotted 3px blue"
"dotted 3px blue"
element
<div style=​"border:​ 3px dotted blue;​">​I'll make you holla fo' a dolla'​</div>​
document.body.appendChild(element)
<div style=​"border:​ 3px dotted blue;​">​I'll make you holla fo' a dolla'​</div>​
element.style.textAlign = 'center';
"center"
var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
<ul>​…​</ul>​
ul.removeChild(ul.querySelector('li:nth-child(3)'));
<li>​3​</li>​
ul.remove()
undefined

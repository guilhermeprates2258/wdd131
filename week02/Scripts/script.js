const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector ('_________');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.Value;
deleteButton.textContent ='❌';

li.append(deleteButton);
li.append(li);

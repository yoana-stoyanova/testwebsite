window.addEventListener("load", solve);

function solve() {
  let type = document.querySelector('#type');
  let intensity = document.querySelector('#intensity');
  let calories = document.querySelector('#calories');
  let duration = document.querySelector('#duration');
  let date = document.querySelector('#date');

  let addBtn = document.querySelector('#add-activity');

  let previewUl = document.querySelector('#preview-activity');
  let activitiesTable = document.querySelector('#activities-table');

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(!(type.value && intensity.value && calories.value && duration.value && date.value)) return;

    addBtn.disabled = true;

    let li = createLi();

    let div = document.createElement('div');
    div.setAttribute('class', 'btn-container');

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let nextBtn = document.createElement('button');
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next';
    
    div.appendChild(editBtn);
    div.appendChild(nextBtn);
    li.appendChild(div);

    editBtn.addEventListener('click', (e) => {
      editEvent(li);
    });

    nextBtn.addEventListener('click', (e) => {
      nextEvent(li);
    });

    previewUl.appendChild(li);

    type.value = '';
    intensity.value = '';
    calories.value = '';
    duration.value= '';
    date.value = '';

  });

  function editEvent(li){
    addBtn.disabled = false;

    li.remove();

    let fields = li.querySelector('article').querySelectorAll('p');

    type.value = fields[0].textContent.split(': ')[1];
    intensity.value = fields[1].textContent.split(': ')[1];
    duration.value = fields[2].textContent.split(' ')[1];
    date.value = fields[3].textContent.split(': ')[1];
    calories.value = fields[4].textContent.split(': ')[1];

  }

  function nextEvent(li){
    addBtn.disabled = false;
    li.remove();

    let tr = createRow(li);
    activitiesTable.appendChild(tr);
  }

  function deleteEvent(tr){
    tr.remove();
  }

  function createLi(){
    let li = document.createElement('li');
    let article = document.createElement('article');

    let p1 = document.createElement('p');
    p1.textContent = 'Activity: ' + type.value;

    let p2 = document.createElement('p');
    p2.textContent = 'Intensity: ' + intensity.value;
    
    let p3 = document.createElement('p');
    p3.textContent = 'Duration: ' + duration.value + ' min.';
    
    let p4 = document.createElement('p');
    p4.textContent = 'Date: ' + date.value;

    let p5 = document.createElement('p');
    p5.textContent = 'Calories: ' + calories.value;

    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    article.appendChild(p5);

    li.appendChild(article);

    return li;

  }

  function createRow(li){
    let fields = li.querySelector('article').querySelectorAll('p');

    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.setAttribute('class', 'type-cell');
    td1.textContent = fields[0].textContent.split(': ')[1];

    let td2 = document.createElement('td');
    td2.setAttribute('class', 'duration-cell');
    td2.textContent = duration.value = fields[2].textContent.split(' ')[1];

    let td3 = document.createElement('td');
    td3.setAttribute('class', 'calories-cell');
    td3.textContent = fields[4].textContent.split(': ')[1];;

    let td4 = document.createElement('td');
    td4.setAttribute('class', 'date-cell');
    td4.textContent = date.value = fields[3].textContent.split(': ')[1];

    let td5 = document.createElement('td');
    td5.setAttribute('class', 'intensity-cell');
    td5.textContent = intensity.value = fields[1].textContent.split(': ')[1];;

    let td6 = document.createElement('td');
    td6.setAttribute('class', 'btn-cell');
    
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete';

    td6.appendChild(deleteBtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    
    deleteBtn.addEventListener('click', (e) => {
      deleteEvent(tr);
    });

    return tr;
  }
}

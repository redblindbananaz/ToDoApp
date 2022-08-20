window,addEventListener('load',()=>{
    const newTodoForm = document.querySelector('#new-todo-form');
    const input = document.querySelector('#content');
    const list = document.querySelector('#todo-list');

    newTodoForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        // If input is empty: message error to input before submit

        const task = input.value;
        if (!task){
            alert("Please enter item before submit")
            return;
        }

        // This is to set all elements and appending:

        //My label for the Custom Checkbox:
        const todoItem = document.createElement('div');
        todoItem.classList.add("todo-item");
        list.appendChild(todoItem);

        const label = document.createElement('label');
        todoItem.appendChild(label);

        const Check = document.createElement('input');
        Check.type = 'checkbox';

        //Action if checkbox is selected:
        
        Check.addEventListener('input',()=>{
            if(Check.checked == true){
                todoContent.classList.add("done");
            }
            else{
                todoContent.classList.remove("done");
            }   
        })

        label.appendChild(Check);

        const Bubble = document.createElement('span');
        Bubble.classList.add("bubble");
        label.appendChild(Bubble);

        //My Div for content with icon category:
        const todoContent = document.createElement('div');
        todoContent.classList.add("todo-content");
        todoItem.appendChild(todoContent);

        
     
        const categories =document.createElement('span');
        categories.classList.add("material-symbols-outlined");
        
        //To retrieve the category selected and insert the associate icon
        const ele = document.querySelectorAll('.options input');
       
        if (document.getElementById('category1').checked){
            categories.innerHTML = "movie";
        }
        else if (document.getElementById('category2').checked){
            categories.innerHTML = "menu_book";
        }
        else if (document.getElementById('category3').checked){
            categories.innerHTML = "music_note";
        }
        else if (document.getElementById('category4').checked){
            categories.innerHTML = "checklist";
        }
        else {
            categories.innerHTML = "done";
        }

        todoContent.appendChild(categories);

        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.setAttribute('readonly', "readonly");
        inputItem.value = task;
        todoContent.appendChild(inputItem);

        //My Div for Edit and Delete Buttons:
        const actions = document.createElement('div');
        actions.classList.add("actions");
        todoItem.appendChild(actions);

        const editBtn = document.createElement('button');
        editBtn.classList.add("material-symbols-outlined");
        editBtn.setAttribute('id',"edit");
        editBtn.innerHTML = "edit";
        actions.appendChild(editBtn);

        //Adding actions to the edit button:
        editBtn.addEventListener('click', ()=>{

            if (editBtn.innerHTML == "edit"){
                inputItem.removeAttribute('readonly', "readonly");
                inputItem.focus();
                editBtn.setAttribute('id',"save");
                editBtn.innerHTML = "done";
            }
            else{
                inputItem.setAttribute('readonly', "readonly");
                editBtn.setAttribute('id',"edit");
                editBtn.innerHTML = "edit";
                
            }

        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("material-symbols-outlined");
        deleteBtn.setAttribute('id',"delete");
        deleteBtn.innerHTML = "delete";
        actions.appendChild(deleteBtn);

        //Adding actions for the delete Button:
        deleteBtn.addEventListener('click', ()=>{
            list.removeChild(todoItem);
        })

        input.value = '';









    })
});
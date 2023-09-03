
  const todosDiv = document.getElementById("todo-box") ;
  const inputTodo = document.getElementById("input-task") ;
  const addButton = document.getElementById("add-btn") ;
  const tasksDiv = document.getElementById("tasks-box") ;

  const removeHandler = (tasksDiv , taskItem)=>{
     tasksDiv.removeChild(taskItem) ;
 }

  addButton.addEventListener('click' ,()=>{

       const inputTodo = document.getElementById("input-task") ;
       const inputValue = inputTodo.value ;


       const taskItem = document.createElement("div") ;
       taskItem.setAttribute("class" , "taskItem") ;
       const taskTitle = document.createElement("div") ;
       taskTitle.textContent = inputValue ;

       const removeButton = document.createElement("button") ;
       removeButton.setAttribute("type" , "button") ;
       removeButton.setAttribute("class" , "remove-btn") ;
       removeButton.textContent = " remove " ;

       removeButton.addEventListener('click' , ()=> removeHandler(tasksDiv , taskItem) ) ;

       
       taskItem.appendChild(taskTitle) ;
       taskItem.appendChild(removeButton) ;
       tasksDiv.appendChild(taskItem) ;

       inputTodo.value = "" ;


  }) ;

  





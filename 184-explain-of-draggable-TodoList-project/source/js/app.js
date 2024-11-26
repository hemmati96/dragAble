let $=document
const button=$.getElementById('add_btn')
const modal=$.getElementById('todo_form')
const todoInput=$.getElementById('todo_input')
const addTodo=$.getElementById('todo_submit')
const statusElems=$.getElementById('no_status')
const divElem=$.querySelector('.body')
const statuses=$.querySelectorAll('.status')
const closeElem=$.querySelector('.close')
const todoElem=$.querySelectorAll('.todo')

function clickHandler(){
modal.classList.add('active')

}
function submitHandler(){
preventDefault()

}
divElem.addEventListener('submit',submitHandler)

function removeValue(){
	todoInput.value=''
	
}

function addTodoHandler(){
    let inputValue=todoInput.value
    if(todoInput.value!=""){
        let todoCounter=1;
           let newTodo=$.createElement('div')
           newTodo.className='todo'
           newTodo.draggable='true'
           
           newTodo.setAttribute('ondragstart',"dragStartHandler(event)")
           newTodo.innerHTML=inputValue
           let newSpan=$.createElement('span')
           newSpan.className='close'
           newSpan.innerHTML='&times;'
            newTodo.append(newSpan)
           statusElems.append(newTodo)
           const todoId='todo'+ todoCounter;
           newTodo.id=todoId;
           todoCounter++
           removeValue()
           modal.classList.remove('active')
             
           }
           
 }        

function dragStartHandler(event){

    event.dataTransfer.setData('elemId',event.target.id)
 
     
             }

             function dragOverHandler(event){
                event.preventDefault()
            }
            
            function dropHandler(event){
               const data= event.dataTransfer.getData('elemId')
            
             const targetElem=$.getElementById(data)
             event.target.append(targetElem)
             
            }          
 
addTodo.addEventListener('click',addTodoHandler)
button.addEventListener('click',clickHandler)





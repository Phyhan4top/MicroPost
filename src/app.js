// const greeting = 'Hello World';
// console.log(greeting);

// const person=require('./myModule1');

// console.log(person.name)
// console.log(person.age)


// import { person,sayHello } from './myModule2';
// import* as mod from './myModule2'

// // console.log(person.name)
// console.log(mod.person)


import {http} from './http'
import{ui} from './ui'

document.addEventListener('DOMContentLoaded',getPost);
document.querySelector('.post-submit').addEventListener('click', SubmitPost);

document.querySelector('#posts').addEventListener('click', deletePost);
document.querySelector('#posts').addEventListener('click', editStatePost);
document.querySelector('.card-form').addEventListener('click', cancelEditState);

function getPost(){
  http.get('http://localhost:3000/posts')
  .then(data=>ui.ShowPosts(data))
  .catch(err=>console.log(err))
}


function SubmitPost(){
  const title=document.getElementById('title').value;
  const body=document.getElementById('body').value;
  const id=document.getElementById('id').value;

      const Data={
       id,
    title,
    body
  }
  if(title ==='' && body ===''){
ui.ShowAlert('fill the input..','alert alert-danger')
  }else{
    if(id===''){
http.post('http://localhost:3000/posts',Data)
.then(function(data){
  ui.ShowAlert('Post Added...','alert alert-success');
  ui.ClrInput()

getPost()
})
.catch(err=>console.log(err))
    }else{

      http.put(`http://localhost:3000/posts/${id}`,Data)
      .then(function(data){
        ui.ShowAlert('Post Updated...','alert alert-success');
    ui.cancelEdit()
   
      getPost()
      })
      .catch(err=>console.log(err))
    }


}





}



 

 function deletePost(e){
if(e.target.parentElement.classList.contains('delete')){
const id=e.target.parentElement.dataset.id;
if(confirm('Are you sure?')){
  http.delete(`http://localhost:3000/posts/${id}`)
  .then(function(){
        ui.ShowAlert('Post Deleted...','alert alert-success');
  
    
    getPost()
      })
      .catch(err=>err)
}

}


    e.preventDefault()
  }


function editStatePost(e){
if(e.target.parentElement.classList.contains('edit')){
  const id=e.target.parentElement.dataset.id;
  const body=e.target.parentElement.previousElementSibling.textContent;
  const title=e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
  const data={
    id,
    title,
    body
  }

ui.fillInputs(data);

  
}
  e.preventDefault()
}

function cancelEditState(e){
if(e.target.classList.contains('cancel-edit')){
ui.cancelEdit();
}
}
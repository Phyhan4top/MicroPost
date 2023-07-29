class UI {
  constructor() {
    this.posts = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.formState = "add";
  }

  ShowPosts(posts) {
    let output = "";
    posts.forEach((post) => {
      output += `
  <div class="card mb-3">
  <div class="card-body">
  <h4 class="card-title">${post.title}</h4>
  <p class="card-text">${post.body}</p>
  
  <a href="#" class="edit card-link" data-id="${post.id}"><i class="fa fa-pencil"></i></a>
  <a href="#" class="delete card-link" data-id="${post.id}"><i class="fa fa-remove"></i></a>
  
  </div>
  </div>
  
  `;
    });
    this.posts.innerHTML = output;
  }
  ShowAlert(message,className){
 this.clrAlert()

const div=document.createElement('div');
div.appendChild(document.createTextNode(message))
div.className=className;

const container=document.querySelector('.postsContainer');
const posts=document.querySelector('#posts');
container.insertBefore(div,posts);

setTimeout(()=>{
  this.clrAlert();
 
 
},3000)

  }
  clrAlert(){
const CurrentAlert=document.querySelector('.alert');

if(CurrentAlert){
  CurrentAlert.remove();
}
  }
  ClrInput(){
this.titleInput.value='';
this.bodyInput.value='';
  }
fillInputs(data){
  this.titleInput.value=data.title;
  this.bodyInput.value=data.body;
  this.idInput.value=data.id;
  this.changeState('edit')
}

changeState(type){
if(type==='edit'){
  
this.postSubmit.textContent='Update post';
this.postSubmit.className='post-submit btn btn-warning btn-block';

// create cancel btn
const cancelBtn=document.createElement('button');
cancelBtn.className='cancel-edit btn btn-light btn-block';
cancelBtn.textContent='Cancel post'
const form=document.querySelector('.card-form');
const formEnd=document.querySelector('.form-end');
form.insertBefore(cancelBtn,formEnd)
}else{
  this.postSubmit.textContent='Post it';
this.postSubmit.className='post-submit btn btn-primary btn-block';
// remove cancel btn
document.querySelector('.cancel-edit').remove()
// clear input
this.ClrInput()
}
}
  cancelEdit(){
    this.changeState('add')
  }
}

export const ui = new UI();

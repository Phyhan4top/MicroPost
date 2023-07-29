class EasyHTTP{
  // GET USERS
   async get(url){
    const res=await   fetch(url)
      const data= await res.json();
      return data
    }
    // CREATE USER
   async post(url,data){
    const res=await   fetch(url,{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
   
      const user= await res.json();
      return user
    
    }
  
    // UPDATE USER
   async put(url,data){
    const res=await   fetch(url,{
      method:'PUT',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
   
      const user= await res.json();
      return user
    
    }
  
    //DELETE USER
   async delete(url){
    const res= await   fetch(url,{
      method:'DELETE',
      headers:{'content-type':'application/json'},
     
    })
   
      const user= await 'user deleted';
    return user;
     
    
    }
      
  }
  export const http= new EasyHTTP();

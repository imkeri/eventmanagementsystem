export function validate(){
    if(document.login.email.value.match(/^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/))
    {
    
    }
    else
      {   
        alert("please enter valid email");
         document.login.email.focus();
          return false;
    }
    if(document.login.password.value.length == "")
    {
          alert("please enter password");
         document.login.password.focus();
          return false;
    }

}



export function validate(){
    if(document.ragistration.f_name.value === "")
    {
        alert("please enter a name");
         document.ragistration.f_name.focus();
          return false;
    }
    if(document.ragistration.f_name.value.match(/^[a-zA-Z]+$/))
    {

    }
    else
    {
        alert("please enter only alpha  in name");
     document.ragistration.f_name.focus();
      return false;
    }
    if(document.ragistration.l_name.value === "")
    {
        alert("please enter a last name");
         document.ragistration.l_name.focus();
          return false;
    }
    if(document.ragistration.l_name.value.match(/^[a-zA-Z]+$/))
    {

    }
    else
    {
        alert("please enter only alpha  in lastname");
     document.ragistration.l_name.focus();
      return false;
    }
    if(document.ragistration.mobile_number.value.length !== 10)
    {
          alert("please enter 10 digite");
         document.ragistration.mobile_number.focus();
          return false;
    }
    if(document.ragistration.email.value.match(/^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/))
    {
    
    }
    else
      {   
        alert("please enter valid email");
         document.ragistration.email.focus();
          return false;
    }
    if(document.ragistration.password.value.length < 8)
    {
          alert("password must be 8 digite");
         document.ragistration.password.focus();
          return false;
    }
    if(document.ragistration.confirm_password.value !== document.ragistration.password.value )
    {
          alert("not match a password");
         document.ragistration.confirm_password.focus();
          return false;
    }

}
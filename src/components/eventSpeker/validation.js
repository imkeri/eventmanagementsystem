export function validate(){

    if(document.booking.name.value === "")
    {
        alert("please enter a name");
         document.booking.name.focus();
          return false;
    }
  
    if(document.booking.mobile.value.length !== 10)
    {
          alert("please enter 10 digite");
         document.booking.mobile.focus();
          return false;
    }
    if(document.booking.email.value.match(/^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/))
    {
    
    }
    else
      {   
        alert("please enter valid email");
         document.booking.email.focus();
          return false;
    }
    // if(document.booking.event.value === "")
    // {
    //     alert("please choose a event");
    //      document.booking.event.focus();
    //       return false;
    // }
    // if(document.booking.ticket.value === "")
    // {
    //     alert("please choose a event");
    //      document.booking.event.focus();
    //       return false;
    // }

}
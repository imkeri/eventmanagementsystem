import './App.css';
import {Routes, Route} from 'react-router-dom'
import About from './pages/about/About';
import Home from './pages/home/Home';
import Venue from './pages/venue/Venue';
import Login from './components/Login/Login';
import Contect from './pages/Contect/Contect';
import Registration from './components/Registration/Registration';
import Buy_ticket from './components/eventSpeker/Buy_ticket';
import Evetdetail from './components/vanue/Evetdetail';
import Dashborad from './admin/Dashboard';
import Events from './admin/Events';
import Contact from './admin/Contect';
import TicketData from './admin/TicketData';
import Update_event from './admin/update_event';
import Insert_event from './admin/Insert_event';
import Ticketdata from './pages/TicketData/Ticketdata';
function App() {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email")
  console.log("token -=", token);
  return (
    
    <div>
 
     <Routes>
          <Route path='/'>
          <Route index element={<Login />}/>
          <Route path="ragistration" element={<Registration />}></Route>
          </Route>
          {
            email==="admin@gmail.com" ?
            <>
            <Route path ="dashborad" element={token ? <Dashborad/> : <Login />}></Route>
            <Route path="events" >
              <Route index element={token?<Events />:<Login />}/>
              <Route path="new" element={token ? <Insert_event />: <Login />}/>
              <Route path="update/:id" element={token ? <Update_event />: <Login />}/>
            </Route>
            <Route path="contact" element={token ? <Contact />: <Login />}/>
            <Route path="ticketdata" element={<TicketData />}/>
            </>
             : <>
             <Route path="home" element={token ? <Home /> : <Login/>}> </Route>
          <Route path="about" element={token?<About />:<Login />}></Route>
          <Route path="venue">
              <Route index element={token ? <Venue />:<Login />}/>
              <Route path="detail/:id" element={token ? <Evetdetail />:<Login />}></Route>
          </Route>   
          <Route path="contect" element={token ? <Contect/>:<Login />}></Route>
          <Route path="buytickets" element={token? <Buy_ticket />:<Login />}></Route>
          <Route path="ticketdata" element={token? <Ticketdata />:<Login />}></Route>
             </>
            

          }
         
          
    </Routes>
    </div>
  );
}

export default App;

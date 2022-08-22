import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DataTable from 'react-data-table-component'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate ,Link} from 'react-router-dom'
import { baseurl } from '../Baseurl';
import './css/events.css'
import axios from 'axios';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Events = () => {
    const [search, setSearch] = useState("");
    const [data, setdata] = useState([]);
    const [filterdata, setfilter] = useState([]);
    const [view,setview] = useState([]);
    const navigate  = useNavigate()
     function logout(e){
      alert("are you sure?");
       e.preventDefault();
       localStorage.removeItem("token");
       navigate("/"); 
     }
// ------------------
     const getdata = async () => {
        try {
          const res = await axios.get(`${baseurl}/event/viewall`);
          console.log(res.data.data)
          setdata(res.data.data);
          setfilter(res.data.data);
        
          
        }
        catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getdata();
      }, []);
      useEffect(() => {
        const result = data.filter(val => {
          return val.e_name.toLowerCase().match(search.toLowerCase());
      
        });
      
        setfilter(result);
      }, [search]);
    //------------view
    const [open, setOpen] = useState(false);
const handleClickOpen = async (id) => {
  setOpen(true);
  const data = await axios.get(`${baseurl}/event/viewbyid/${id}`).then((res) => {
    console.log(res.data.data);
    setview(res.data.data);
   
  }).catch((err) => {
    console.log(err);
  })
};
const handleClose = () => {
  setOpen(false);

};
  
    // delete--------------------------
function deletestaff(_id){
    fetch(`${baseurl}/event/delete/${_id}`,{
      method:"DELETE"
    }).then((r)=>{
      r.json().then((resp)=>{
        console.log(resp); 
        getdata();
      })
    })
  }   
     const columns =[
        {
          name : "Event Name",
          selector : (row) => row.e_name,
          sort:true
        },
        {
          name : "Event organizer",
          selector : (row) => row.e_organizer
        },
        {
          name : "Event venue",
          selector : (row) => row.e_venue
        },
        {
          name : "Price",
          selector : (row) => `${row.price}$`
        },
        {
          name : "Date",
          selector : (row) => row.date
        },
        {
          name : "Time",
          selector : (row) => row.time
        },
       {
        name:"action",
        cell:(row) => <>
            
            <Link to={`update/${row._id}`} style={{textDecoration:"none"}} className="edit"><EditIcon ></EditIcon></Link>
            <VisibilityIcon  onClick={() => handleClickOpen(row._id)} ></VisibilityIcon>
            <DeleteIcon onClick={()=>deletestaff(row._id)}></DeleteIcon>
        </>
      
      }
      ]
  return (
    <div className='events'>
       <div  className="sidebar">
          <Sidebar />
          </div>
          <div className="events_main">
          <div className="Log_Out">
                <button className="btn" onClick={logout}>Log Out</button>
            </div>
            <Link to="new" style={{textDecoration:"none"}} className="link">
                Add New
            </Link>
            <DataTable
          title="event list"
          columns={columns}
          data={filterdata}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='650px'
          highlightOnHover
          subHeader
          subHeaderAlign="left"
          subHeaderComponent={
            <input
              type="text"
              placeholder='search'
              className='w-25 form-control'
              value={search}
              onChange={(event) => setSearch(event.target.value)} />
          }
        />
          </div>

          <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
        <div className='d-flex view'>
             <h6 >Event Name:</h6><p> {view.e_name}</p>
          </div><hr></hr>
          <div className='d-flex view'>
            <h6>Event organizer: </h6><p> {view.e_organizer}</p>
          </div><hr></hr>
          <div className='d-flex view'>
          <h6>Event venue: </h6><p> {view.e_venue}</p>
          </div><hr></hr>
          <div className='d-flex view'>
            <h6>Price: </h6><p> {view.price}</p>
          </div><hr></hr>
          <div className='d-flex view'>
            <h6>Date : </h6><p> {view.date}</p>
          </div><hr></hr>
          <div className='d-flex view'>
          <h6>Time: </h6><p> {view.time}</p>
          </div><hr></hr>
        </Box>
      </Modal>
    </div>
  )
}

export default Events

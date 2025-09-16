import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import PersonIcon from '@mui/icons-material/Person';
import DataTable from 'react-data-table-component'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate, Link } from 'react-router-dom'
import './css/events.css'
import axios from 'axios';
import { baseurl } from '../Baseurl';
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
const Contact = () => {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState([]);
  const [filterdata, setfilter] = useState([]);
  const [view, setview] = useState([]);
  const navigate = useNavigate()
  function logout(e) {
    alert("are you sure?");
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  }
  // ------------------
  const viewall = async () => {
    try {
      const res = await axios.get(`${baseurl}/ticket/viewall`);
      console.log("...........", res.data.data)
      setdata(res.data.data);
      setfilter(res.data.data);


    }
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    viewall();
  }, []);

  //------------view
  const [open, setOpen] = useState(false);
  const handleClickOpen = async (email) => {
    setOpen(true);
    console.log(email)
    const data = await axios.get(`http://localhost:4000/ticket/viewbyid/${email}`).then((res) => {
      console.log(res.data.data[0]);
      setview(res.data.data[0]);

    }).catch((err) => {
      console.log(err);
    })
  };
  const handleClose = () => {
    setOpen(false);

  };

  //     // delete--------------------------
  function deletestaff(_id) {
    fetch(`http://localhost:4000/ticket/delete/${_id}`, {
      method: "DELETE"
    }).then((r) => {
      r.json().then((resp) => {
        console.log(resp);
        viewall();
      })
    })
  }
  useEffect(() => {
    const result = data.filter(val => {
      return val.name.toLowerCase().match(search.toLowerCase());

    });
    setfilter(result);
  }, [search]);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sort: true
    },
    {
      name: "Email",
      selector: (row) => row.email
    },
    {
      name: "mobile",
      selector: (row) => row.mobile
    },
    {
      name: "Event Name",
      selector: (row) => row.event
    },
    {
      name: "ticket",
      selector: (row) => row.ticket
    },
    {
      name: "action",
      cell: (row) => <>
        <button onClick={() => handleClickOpen(row.email)} className="view-btn" >view</button>
        <button onClick={() => deletestaff(row._id)} className="delete">Delete</button>
      </>

    }
  ]
  return (
    <div className='events'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="events_main">
        <div className="Log_Out">
          <button className="btn" onClick={logout}>Log Out</button>
        </div>
       <div className=''>
         <DataTable
          title="Contect data"
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
      </div>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <div className="d-flex">
            <PersonIcon style={{ "width": "100%", "height": "100px" }} />
          </div>
          <div className='d-flex view'>
            <h6 > Name:</h6><p> {view.name}</p>
          </div><hr></hr>
          <div className='d-flex view'>
            <h6>Email: </h6><p> {view.email}</p>
          </div><hr></hr>
          <div className='d-flex view'>
            <h6>Mobile: </h6><p> {view.mobile}</p>
          </div><hr></hr>
          <div className='d-flex view'>
            <h6>Event Name: </h6><p> {view.event}</p>
          </div><hr></hr>
          <div className='d-flex view'>
            <h6>Ticket: </h6><p> {view.ticket}</p>
          </div><hr></hr>

        </Box>
      </Modal>
    </div>
  )
}

export default Contact

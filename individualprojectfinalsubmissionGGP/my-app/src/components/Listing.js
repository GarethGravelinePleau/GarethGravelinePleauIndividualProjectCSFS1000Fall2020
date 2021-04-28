import React, { useEffect, useState } from 'react'
import parseJwt from './Authentication'
import { useHistory, Link } from "react-router-dom";
import '../Listing.css';
import axios from "axios";

const Listings = () => {
    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const URL = "http://localhost:4000/entries/";
    const user = parseJwt(token).users_email
    const [listings, setListings] = useState("");
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    useEffect(() => {
        async function fetchData() {
            try {
              const responseData = await axios
                .get(`${URL}`, {
                  headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`

                  },
                })
                .then((response) => {
                  return response;
                })
                .catch((err) => {
                  console.log(err);
                });
              console.log(responseData.data.result);
              setListings(responseData.data.result);
            } catch (err) {
              console.log(err);
            }
          }
        fetchData()
    }, [token])
    return (
        <container>
            
            <h1 style={{fontSize:"30px", textAlign:"center", marginBottom:"50px"}}>Hello, here are your entries!</h1>
            
            <table id="listingTable">
                <thead>
                    <tr>
                    <th >ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {listings.length === 0 &&
                        <tr><td colSpan="5"><i>No Current Entries</i></td></tr>
                    }
                    {listings.length > 0 &&
                        listings.map((p)=> 
                            <tr key={p.entry_id}>
                            <td style={{width: "50px", color: "white"
                            }}>{p.entry_id}</td>
                            <td>{p.entry_name}</td>
                            <td>{p.entry_email}</td>
                            <td>{p.entry_number}</td>
                            <td>{p.entry_content}</td>
                            
                            </tr>)
                    }
                </tbody>
            </table>
        <tr>
            <button onClick={logout} style={{marginTop:"100px"}}>Logout</button>
            
        </tr>
        <tr>
            <Link to ={`/admin`}>
                <button>
                    RESUME CRUD
                </button>
            </Link>
        </tr>
        <tr>
            <Link to ={`/users/register`}>
                <button>
                    ADD NEW ADMIN
                </button>
            </Link>
        </tr>
        <tr>
            <Link to ={`/admin2`}>
                <button>
                    PORTFOLIO CRUD
                </button>
            </Link>
        </tr>
        
        </container>
    )
}

export default Listings
import React, { useEffect, useState } from 'react'
import parseJwt from './Authentication'
import { useHistory } from "react-router-dom";
import '../Listing.css';



const Listings = () => {
    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).email
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/contact_form/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        }
        getData()
    }, [token])
    return (
        <container>
            
                <h1 style={{fontSize:"30px", textAlign:"center", marginBottom:"50px"}}>Hello: {user}, here are your entries!</h1>
            
            <table id="listingTable">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr><td colSpan="5"><i>No Current Entries</i></td></tr>
                    }
                    {listing.length > 0 &&
                        listing.map(entry => 
                            <tr>
                            <td>{entry.id}</td>
                            <td>{entry.name}</td>
                            <td>{entry.phoneNumber}</td>
                            <td>{entry.email}</td>
                            <td>{entry.content}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        <tr>
            <button onClick={logout} style={{marginTop:"100px"}}>Logout</button>
        </tr>
        </container>
    )
}

export default Listings
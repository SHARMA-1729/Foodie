import React from 'react';
import './account.css';
import { useSelector } from 'react-redux';
import Header from './header1.js';
import { Link } from 'react-router-dom';

export default function EditButton() {

  const data = useSelector((state) => state.user.user);
 
  
  return (
<>
<Header/>
    <div className="profile-container">
      <aside className="sidebar">
        <div className="user-info">
          <img src={data.user.avatar} alt="User Avatar" className="avatar" />
          <h3 className="user-name">Hello!! {data.user.fullName}</h3>
        </div>
        <nav className="menu">
          <ul>
            <Link to='/orderdetail'>
            <li>My Orders</li>
            </Link>
            <li>Payments History</li>
            <Link to="/update" >
            <li>Update Account</li>
            </Link>
          </ul>
        </nav>
      </aside>

      <main className="profile-details">
        <h2>Personal Information</h2>
        <hr/>
        <div className="details-section">
          <div className="detail-item">
            <label>User ID</label>
            
            <p>{data.user._id}</p>
          </div>
          <div className="detail-item">
            <label>User Name</label>
            
            <p>{data.user.fullName}</p>
          </div>
         
         
          <div className="detail-item">
            <label>Email Address</label>
            <p>{data.user.email}</p>
          </div>
          <div className="detail-item">
            <label>Mobile Number</label>
           <p>{data.user.phoneNumber}</p>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
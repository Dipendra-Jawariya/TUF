import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [description, setDescription] = useState('');
    const [timer, setTimer] = useState(10);
    const [link, setLink] = useState('');

    // const handleUpdate = () => {
    //     axios.post('http://localhost:5000/api/banner/post', { description, timer, link })
    //         .then(response => alert('Banner updated successfully'));
    // };

    const handleUpdate = () => {
        axios.post('http://localhost:5000/api/banner/post', { description, timer, link })
            .then(response => {
                alert('Banner updated successfully');
                window.location.reload(); // Reload the page to fetch the newly added data
            })
            .catch(error => {
                console.error('Error updating banner:', error);
                alert('Failed to update banner');
            });
    };
    
    return (
        <div className="dashboard">
            <h2>Banner Dashboard</h2>
            <div>
                <label>Description:</label>
                <input 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>
            <div>
                <label>Timer (seconds):</label>
                <input 
                    type="number" 
                    value={timer} 
                    onChange={(e) => setTimer(e.target.value)} 
                />
            </div>
            <div>
                <label>Link:</label>
                <input 
                    type="text" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)} 
                />
            </div>
            <button onClick={handleUpdate}>Update Banner</button>
        </div>
    );
};

export default Dashboard;

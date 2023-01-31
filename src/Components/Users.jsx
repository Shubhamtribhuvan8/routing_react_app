import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Users = () => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const location = useLocation();
const history = useHistory();

const fetchUsers = async (page) => {
setLoading(true);
try {
const response = await fetch(`https://reqres.in/api/users?page=${page}`);
const data = await response.json();
setUsers(data.data);
setLoading(false);
} catch (error) {
setError(error);
setLoading(false);
}
};

useEffect(() => {
const page = new URLSearchParams(location.search).get('page') || 1;
fetchUsers(page);
}, [location.search]);

const handlePagination = (page) => {
history.push(`/users?page=${page}`);
};

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return (
<div style={{textAlign:"center"}}>
<h1>Users</h1>
<div style={{
              margin: "50px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}>
{users.map((user) => (
<div key={user.id} 
            style={{
                boxShadow: "0 0 10px black",
                padding: "10px",
                margin: "10px",
                borderRadius: "52px",
              }}
            >
<img src={user.avatar} alt="" style={{width:"280px", height:"280px", borderRadius:"50%"}}   />
<h1>{user.first_name} 
{user.last_name}</h1>
<h2>{user.email}</h2>
</div>
))}
</div>
<button onClick={() => handlePagination(1)}>Page 1</button>
<button onClick={() => handlePagination(2)}>Page 2</button>
<button onClick={() => handlePagination(3)}>Page 3</button>
</div>
);
};

export default Users;
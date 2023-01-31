import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const User = ({ match }) => {
  const [user, setUser] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = match.params;
  const history = useHistory();

  const handlePageChange = (newPage) => {
    setPage(newPage);
    history.push(`/users/${id}?page=${newPage}`);
    };

    const fetchUser = async () => {
        setLoading(true);
        try {
        const response = await fetch(`https://reqres.in/api/users/${id}?page=${page}`);
        const data = await response.json();
        setUser(data.data);
        setLoading(false);
        console.log(data)
        } catch (error) {
        setError(error);
        setLoading(false);
        }
        };

        useEffect(() => {
            fetchUser();
            }, [id, page]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Details</h1>
      <p>Id: {user.id}</p>
      <p>Name: {user.first_name} {user.last_name}</p>
      <p>Email: {user.email}</p>
      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default User;

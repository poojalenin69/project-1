import { AppBar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Api = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>; // Add a loading indicator
  }

  return (
    <div>
      <AppBar>
        <Toolbar>
          <div>MyBlog</div>
          <Link to="/Api">
            <Button variant="contained">Api</Button>
          </Link>
          <Link to="/Signup">
            <Button variant="contained">Signup</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <br />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val) => (
              <TableRow key={val.id}>
                <TableCell>{val.id}</TableCell>
                <TableCell>{val.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Api;

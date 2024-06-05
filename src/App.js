import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Posts from './components/Posts';
import SearchBar from './components/SearchBar';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
        // console.log(data);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Posts
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <Posts posts={filteredPosts} />
    </Container>
  );
};

export default App;

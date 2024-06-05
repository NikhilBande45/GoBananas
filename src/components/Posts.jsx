
import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const Posts = ({ posts }) => {
  return (
    <Paper style={{ backgroundColor: '#f5f5f5', padding: '16px' }}>
      <List>
        {posts.map(post => (
          <ListItem
            key={post.id}
            style={{ 
              marginBottom: '12px', 
              borderBottom: '1px solid #ddd',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <ListItemText
              primary={<Typography variant="h6">{post.title}</Typography>}
              secondary={<Typography variant="body2" color="textSecondary">{post.body}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Posts;

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Grid, Typography, Link, Container , Box, Avatar, Card, CardHeader, Skeleton} from '@mui/material';
import IconButton  from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";



function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Album App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Albums() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    const fetchAlbumsData = () => {
      axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
        setAlbums(response?.data.length > 0 ? response?.data : []);
        setLoading(false)
      });

    }
  
  
    useEffect(() => {
      fetchAlbumsData();
    }, []);
  
    return (
            <Container maxWidth="sm">
             
             {loading ? (
                     <Skeleton animation="wave" />
                    ) :  (
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        All Albums
                    </Typography>
                    
                   

                    <Grid container spacing={2} >
                      {albums.map((i, index) =>
                          <Grid xs={12} sm={6} md={6} key={index} item spacing={2} >
                            <Card sx={{ maxWidth: 345, bgcolor: '#e6faf880' }} >
                              <CardHeader
                                avatar={
                                  <Avatar sx={{ bgcolor: '#069482' }} aria-label="user">
                                    {i?.userId}
                                  </Avatar>
                                }
                                action={
                                  <IconButton aria-label="more" onClick={() => navigate(`/albums/${i?.id}`,{state:{albumId:i?.id}})
                                  }>
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                title={i?.title}
                              />
                          </Card>
                          </Grid>
                      )}
                    </Grid>


                <Copyright />

                             
              </Box>
                    )}
            </Container>
           
              
    );
  }
  
  export default Albums;
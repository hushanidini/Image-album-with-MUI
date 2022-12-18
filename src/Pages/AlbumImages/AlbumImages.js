import React from 'react';
import { useState, useEffect } from 'react';
import { useParams  } from "react-router-dom";
import axios from 'axios';
import {Grid, Typography, Link, Container , Box, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';


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

  function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

function AlbumImages () {
     // Get the albumId param from the URL.
    let { albumId } = useParams();

    const [selectedAlbumId, setSelectedAlbumId] = useState(albumId)
    const [images, setImages] = useState([])
    const [selectedImageId, setSelectedImageId] = useState(0);


    // fetch images of selected album
    const fetchAlbumsImageData = (selectedAlbumId) => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            const images = response?.data.length > 0 ? response?.data : [];
            const selectedAlbumImages = images?.length > 0 ? images.filter(image => {
                return image?.albumId == selectedAlbumId;
              }) : [];
          setImages(selectedAlbumImages);
        });
  
      }

      useEffect(() => {
        fetchAlbumsImageData(selectedAlbumId);
      }, [selectedAlbumId]);

      const handleShowLargeImage = (id) => {
        setSelectedImageId(id)
      }

      const selectedImageDetails =  images?.length > 0 ? images.filter(image => {
        return image?.id == selectedImageId;
      }) : [];
    
    return (
        <Container fixed>
            <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Images of album
                    </Typography>

                    <Grid container spacing={2} >
                        <Grid xs={12} sm={selectedImageId > 0 && selectedImageDetails?.length > 0? 6 : 12} md={selectedImageId > 0 && selectedImageDetails?.length > 0? 6 : 12}  item spacing={2}>

                        <ImageList
                            sx={{
                                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                                transform: 'translateZ(0)',
                            }}
                            gap={2}
                            >

                            {images.map((item) => {
                                const cols = 1;
                                const rows = 1;

                                return (
                                <ImageListItem key={item?.id} cols={cols} rows={rows}  onClick={()=> handleShowLargeImage(item?.id)} style={{ cursor: 'pointer'}}>
                                    <img
                                    {...srcset(item?.thumbnailUrl, 250, 200, rows, cols)}
                                    alt={item?.title}
                                    loading="lazy"
                                    />
                                    <ImageListItemBar
                                    sx={{
                                        background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                    title={item?.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton
                                        sx={{ color: 'white' }}
                                        aria-label={`star ${item?.title}`}
                                        onClick={()=> handleShowLargeImage(item?.id)}
                                        >
                                        <StarBorderIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                    />
                                </ImageListItem>
                                );
                            })}
                            </ImageList>
                        </Grid>
                        <Grid xs={12} sm={6} md={6} item spacing={2} style={{display: selectedImageId > 0 && selectedImageDetails?.length > 0? 'block' : 'none'}}>
                        
                        {selectedImageDetails?.map((img) => (
                            
                            <img
                                src={img?.url}
                                alt={img?.title}
                                onClick={()=> setSelectedImageId(0)}
                                style={{ cursor: 'zoom-out'}}
                                />
                        ))}
                        </Grid>
                    </Grid>

                    <Copyright />
            </Box>
            
        </Container>
    )
}

export default AlbumImages;
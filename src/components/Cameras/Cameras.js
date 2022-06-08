import React, { useState } from 'react';
import Button from '../Button/Button';
import PostmanKam from '../PostmanKam/PostmanKam';
import classes from './Cameras.module.css';

const CAMERAS = [
  {
    name: 'id kamery: ',
    cameraId: '0AAAAAAAAAAAAAA',
  },
  {
    name: 'id kamery: ',
    cameraId: '1BBBBBBBBBBBBBB',
  },
  {
    name: 'id kamery: ',
    cameraId: '5G04C9BPAGC8B5D',
  },
  {
    name: 'id kamery: ',
    cameraId: '6FFFFFFFFFFFFFFF',
  },
  {
    name: 'id kamery: ',
    cameraId: '7GGGGGGGGGGGGGG',
  }
];

const Cameras = () => {

  const [idCamera, setIdCamera] = useState('');
  const [photo, setPhoto] = useState(null);  
 // const [httpError, setHttpError] = useState(false);
 //const [isLoaded, setIsLoaded] = useState(false);

  console.log(photo, idCamera);
//   useEffect(() => {
//     const fetchPhoto = async () => {
//       const response = await fetch('http://localhost:8080/feed/posts');
//       if (!response.ok) {
//         throw new Error('coś poszło nie tak');
//       }
//       const responseData = await response.json();
//       console.log(responseData.posts[0]);
//       setPhoto(responseData);
//       setIsLoaded(true);
//     };
//     fetchPhoto().catch((error) => {
//       setIsLoaded(false);
//       setHttpError(error.message);
//     });
//   }, [idCamera]);

  const grabPhotoHandler = (cameraId) => {
    setIdCamera(cameraId);
    fetch('http://localhost:8080/feed/posts')    
       .then(res => res.json())
        .then(resData => setPhoto(resData.posts[0].idCamera + ' ' + resData.posts[0].pathCamera))
        .catch(err => console.log(err));
  };
  
  const buttons = CAMERAS.map((el) => (
    <Button
      key={el.cameraId}
      name={el.name + el.cameraId}
      click={() => grabPhotoHandler(el.cameraId)}
    />
  ));

  const display = <div>{photo}</div>

  return (
    <div className={classes.container}>
      {buttons}
      {display}
      <PostmanKam/>
    </div>
  )
};
export default Cameras;

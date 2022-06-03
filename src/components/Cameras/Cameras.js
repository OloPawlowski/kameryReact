import React, { useState } from 'react';
import Button from '../Button/Button';
import classes from './Cameras.module.css';

const CAMERAS = [
  {
    cameraId: '0AAAAAAAAAAAAAA',
  },
  {
    cameraId: '1BBBBBBBBBBBBBB',
  },
  {
    cameraId: '5G04C9BPAGC8B5D',
  },
  {
    cameraId: '6FFFFFFFFFFFFFFF',
  },
  {
    cameraId: '7GGGGGGGGGGGGGG',
  },
];

const Cameras = (props) => {

  const [idCamera, setIdCamera] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [httpError, setHttpError] = useState(false);
  const [photo, setPhoto] = useState(null);  

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
        .then(resData => setPhoto(resData.posts[0].title + ' ' + resData.posts[0].content + idCamera))
        .catch(err => console.log(err));
  };
  
  const buttons = CAMERAS.map((el) => (
    <Button
      key={el.cameraId}
      name={el.cameraId}
      click={() => grabPhotoHandler(el.cameraId)}
    />
  ));

  const display = <div>{photo}</div>

  return (
    <div className={classes.container}>
      {buttons}
      {display}
    </div>
  )
};
export default Cameras;

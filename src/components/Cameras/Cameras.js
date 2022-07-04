import React, { useState } from 'react';
import Button from '../Button/Button';
//import PostmanKam from '../PostmanKam/PostmanKam';
import classes from './Cameras.module.css';

const CAMERAS = [ 
  {
    name: 'id kamery: ',
    cameraId: '5G04C9BPAGC8B5D',
  },
  {
    name: 'id kamery: ',
    cameraId: '6J02D05PAG57E44',
  }
];

const Cameras = () => {
  const [idCamera, setIdCamera] = useState('');
  const [photo, setPhoto] = useState(null);
  // const [httpError, setHttpError] = useState(false);
  //const [isLoaded, setIsLoaded] = useState(false);

 // console.log('photo: ', photo, 'idCamera:', idCamera);
  //   useEffect(() => {
  //     const fetchPhoto = async () => {
  //       const response = await fetch('http://localhost:8080/feed/photo');
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
    fetch('http://localhost:8080/feed/photo/' + cameraId)
    //  .then((res) => res.json())
    //  .then(resData => setPhoto( 'http://localhost:8080/' + resData.photo))
    .then(res => res.blob())
    .then((resData) => setPhoto(URL.createObjectURL(resData)))//  'http://localhost:8080/' + resData.photo
      .catch((err) => console.log(err));
  };
  const buttons = CAMERAS.map((el) => (
    <Button
      key={el.cameraId}
      name={el.name + el.cameraId}
      click={() => grabPhotoHandler(el.cameraId)}
    />
  ));

  const display = (//   <p>niżej zdjęcie z tej ścieżki: { photo }</p> 
    <div className={classes.display}>
     
      <img src={ photo } alt="zdjęcie drogi"/>
    </div>
  );

  return (
    <div className={classes.container}>
      {buttons}
      {display}
    </div>
  );
};
export default Cameras;

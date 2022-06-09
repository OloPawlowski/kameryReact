import React, { useState } from 'react';
import Button from '../Button/Button';
import PostmanKam from '../PostmanKam/PostmanKam';
import fotka from '../../assets/image.jpg';
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
  },
];

const Cameras = () => {
  const [idCamera, setIdCamera] = useState('');
  const [photo, setPhoto] = useState(null);
  // const [httpError, setHttpError] = useState(false);
  //const [isLoaded, setIsLoaded] = useState(false);

  console.log('photo: ', photo, 'idCamera: ', idCamera);
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
    fetch('http://localhost:8080/feed/photo')
      .then((res) => res.json())
      .then((resData) => setPhoto(resData.photo[0].imageUrl))
      .catch((err) => console.log(err));
  };
  //new Date(resData.photos[0].createdAt).toLocaleDateString('en-US')
  const buttons = CAMERAS.map((el) => (
    <Button
      key={el.cameraId}
      name={el.name + el.cameraId}
      click={() => grabPhotoHandler(el.cameraId)}
    />
  ));

  const display = (
    <div>
      <p>{typeof photo}</p> 
      <img src={photo} alt="zdjęcie drogi"/>
    </div>
  );

  return (
    <div className={classes.container}>
      {buttons}
      {display}
      <PostmanKam />
    </div>
  );
};
export default Cameras;

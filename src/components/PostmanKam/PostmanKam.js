import Button from '../Button/Button';

const PostmanKam = () => {
  const downLoadPictures = () => {
    fetch('http://localhost:8080/feed/photo')
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(
            'Failed to fetch posts from PostmanKam downLoadPictures.'
          );
        }
        return res.json();
      })
      .then(resData => {
        console.log('PostmanKam downLoadPictures', resData);
      })
      .catch();
  };

  const upLoadPhoto = () => {
    let url = 'http://localhost:8080/feed/photo';
    let method = 'POST';
    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idCamera: '7GGGGGGGGGGGGGG',
        pathCamera: '//zpostmana/7GGGGGGGGGGGGGG/10-17',
      }),
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Creating or editing a photopost failed!');
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        // const photo = {
        //   _id: resData.post._id,
        //   idCamera: resData.post.idCamera,
        //   pathCamera: resData.post.pathCamera,
        //   createdAt: resData.post.createdAt,
        // };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button type="button" click={downLoadPictures} name="load all" />
      <Button type="button" click={upLoadPhoto} name="send" />
    </div>
  );
};
export default PostmanKam;

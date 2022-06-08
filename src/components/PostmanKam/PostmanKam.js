import Button from '../Button/Button';

const PostmanKam = () => {
  const downloadPictures = () => {
    fetch('http://localhost:8080/feed/posts')
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(
            'Failed to fetch posts from PostmanKam loadPictures.'
          );
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
      })
      .catch();
  };

  const uploadPhoto = () => {
    let url = 'http://localhost:8080/feed/post';
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
        // const post = {
        //   _id: resData.post._id,
        //   title: resData.post.title,
        //   content: resData.post.content,
        //   creator: resData.post.creator,
        //   createdAt: resData.post.createdAt,
        // };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button type="button" click={uploadPhoto} name="send" />
      <Button type="button" click={downloadPictures} name="load all" />
    </div>
  );
};
export default PostmanKam;

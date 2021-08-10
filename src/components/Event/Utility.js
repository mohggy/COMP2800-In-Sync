//utility functions for events

//messagge show up and disappear after 2.5 seconds
export function messageAppear (setMessage, newMessage) {
  setMessage(newMessage);
  setTimeout(() => {
    setMessage('');
  }, 2500);
};

//user selected image store locally use useState (setImage)
export function uploadImg (e, setImage, setError) {
  const types = ['image/png', 'image/jpeg'];
  const selectedImage = e.target.files[0];
  if (selectedImage && types.includes(selectedImage.type)) {
    setImage(selectedImage);
    setError('');
  } else {
    setImage('');
    messageAppear(setError, 'Please select an image file (png or jpeg)');
  }
};
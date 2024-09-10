import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { useRef } from 'react';
import PostForm from '../PostForm/PostForm';
import BottomNav from '../BottomNav/BottomNav';



const UploadPost = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [image, setImage] = useState(null);
  const webcamRef = useRef(null);

  const handleCapture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setImage(screenshot);
    setIsCameraOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => setIsCameraOpen(true)}
        className="mb-4 p-2 bg-blue-500 text-white rounded-full"
      >
        +
      </button>

      {isCameraOpen && (
        <div className="flex flex-col items-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={350}
            height={350}
            className="mb-4 border rounded-lg"
          />
          <button
            onClick={handleCapture}
            className="mb-4 p-2 bg-green-500 text-white rounded-lg"
          >
            Capturar
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4"
          />
        </div>
      )}

      {image && (
        <div className="w-full max-w-xs">
          <img src={image} alt="Vista previa" className="w-full h-auto border rounded-lg mb-4" />
          <button
            onClick={handlePublish}
            className="p-2 bg-blue-500 text-white rounded-lg"
          >
            Confirmar Publicación
          </button>
        </div>
      )}
      <PostForm/>
      <BottomNav/>
    </div>
    
  );
  
};


export default UploadPost;
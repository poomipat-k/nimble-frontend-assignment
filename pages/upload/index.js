import { useState } from 'react';
import axios from 'axios';

import styles from './Upload.module.scss';

const UploadPage = () => {
  // States
  const [selectedFile, setSelectedFile] = useState();

  const onFileChangeHandler = (e) => {
    const value = e.target;

    setSelectedFile(value.files[0]);
  };

  const onFileUploadHandler = () => {
    const formData = new FormData();

    formData.append('csvFile', selectedFile, selectedFile.name);
    console.log(formData);
    axios.post('http://localhost:5000/api/keywords/upload', formData);
  };
  console.log('===selectedFile', selectedFile);
  return (
    <div>
      <h1>Upload Keywords</h1>
      <div>
        <input type="file" onChange={onFileChangeHandler} />
        <button onClick={onFileUploadHandler}>Upload!</button>
      </div>
    </div>
  );
};

export default UploadPage;

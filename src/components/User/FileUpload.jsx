import React from 'react';

function FileUpload() {
  const submitForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const files= document.getElementById("files");
    const formData = new FormData();

    formData.append("name", name.value);
    for (let i = 0; i < files.files.length; i++) {
      formData.append("file", files.files[i]);
    }
    fetch("http://localhost:5000/user/upload_files", {
      method: 'POST',
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then((res) => console.log(res))
      .catch((err) => console.error("Error occurred", err));
  };

  return (
    <div className="container">
      <h1>File Upload</h1>
      <form id='form' onSubmit={submitForm}>
        <div className="input-group">
          <label htmlFor='name'>Your name</label>
          <input name='name' id='name' placeholder="Enter your name" />
        </div>
        <div className="input-group">
          <label htmlFor='files'>Select files</label>
          <input id='files' type="file" multiple />
        </div>
        <button className="submit-btn" type='submit'>Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;

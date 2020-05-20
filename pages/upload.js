import React, { useState } from "react";

export default function upload() {

    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };


    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
        await fetch("/api/upload", {
          method: "POST",
          body: formData
        });
      };

    return (
        <>
 
             <label className="custom-file-upload">
             <input type="file" accept="image/*" onChange={handleChange}/> 
            <img src={image.preview} alt="image"width="300" height="300" /> 
            </label>
            <br />
            <button  onClick={handleUpload}>Upload Image</button>

            <style jsx>{
                `
                input[type="file"] {
                    display: none;
                }
                    
                .custom-file-upload {
                    border: 1px solid #ccc;
                    display: inline-block;
                    padding: 6px 12px;
                    cursor: pointer;
                } 
              `
            }
            </style>
        </>
    )

}
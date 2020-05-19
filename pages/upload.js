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

    return (
        <>
             <label class="custom-file-upload">
             <input type="file" 
                    accept="image/*"
                    onChange={handleChange}/> 
                <img src={image.preview} alt="dummy" width="300" height="300" />
            </label>
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
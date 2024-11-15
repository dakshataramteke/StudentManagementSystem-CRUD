import { React, useState } from 'react';
import axios from 'axios';

const MultipleFile = () => {
    const [image, setImage] = useState({
        adharcard: null,
        photo: null,
        lasttc: null,
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const name = e.target.name;

        if (file) {
            setImage(prevImage => ({
                ...prevImage,
                [name]: file, // Set the file based on the input name
            }));
        }
    };

    const Submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Append the files to FormData
        for (const key in image) {
            if (image[key]) {
                formData.append(key, image[key]);
            }
        }

        axios.post('http://localhost:8081/uploadImg', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(error => console.log(error));
    };

    return (
        <div>
            <form onSubmit={Submit}>
                <h3>Upload Documents</h3>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <label htmlFor="Adharcard" className="form-label">
                            Adhar Card
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="Adharcard"
                            name="adharcard"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="Photo" className="form-label">
                            Photo
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="photo"
                            name='photo'
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="lastTc" className="form-label">
                            Last Tc
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="lastTc"
                            name='lasttc'
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MultipleFile;
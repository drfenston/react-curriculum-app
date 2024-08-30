import React, { FunctionComponent, useState } from "react";
import CV from "../models/cv";
import CVService from "../services/cv-service";

type Props = {
    cv: CV,
    sendDataToParent: any
};

const UploadAndDisplayImage: FunctionComponent<Props> = ({ cv, sendDataToParent }) => {
    const [previewImage, setPreviewImage] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleUploadImage = (file: File) => {
        const data = new FormData();
        if (file != null) {
            data.append('upload', file);
            CVService.uploadProfileImage(data).then(response => {
                try {
                    cv.profileImage = response.data.filename
                    CVService.updateCV(cv).then(response => { sendDataToParent() });
                } catch {

                }
            });
        }
    }

    const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        if (event.target.files) {
            const file = event.target.files[0];
            handleUploadImage(file)
        }
    }

    return (
        <div className="row text-center mx-3 mt-5">
            <div className="card p-3">
                <h5>Choisissez une image de profil</h5>
                <input className="form-control" type="file" id="formFile" onChange={(e) => handleSelectImage(e)} />
            </div>
        </div>
    );
}

export default UploadAndDisplayImage;
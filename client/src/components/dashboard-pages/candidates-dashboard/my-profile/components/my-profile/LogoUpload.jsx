const LogoUpload = ({ register, watch }) => {

    return (
        <div className="uploading-outer" style={{ border: "none", padding: 0, margin: 0 }}>
            <div className="uploadButton">
                <input
                    className="uploadButton-input"
                    type="file"
                    accept="image/*"
                    id="upload"
                    {...register}
                    required
                />
                <label
                    className="uploadButton-button ripple-effect"
                    htmlFor="upload"
                >
                    {watch?.length > 0 ? watch?.[0]?.name : "Upload File"}
                </label>
                {/* <span className="uploadButton-file-name"></span> */}
            </div>
            <div className="text">
                {/* Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg & .png */}
            </div>
        </div>
    );
};

export default LogoUpload;

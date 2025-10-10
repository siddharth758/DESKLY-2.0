import "../vc-css/folder-navbar.css";

function FolderNavbar() {
  return (
    <div className="folder-container">
      <div className="folder-div">
        <div className="upload-files">
          <div className="files-border">
            <input
              type="file"
              multiple
              id="fileInput"
              style={{ display: "none" }}
            />
            <label htmlFor="fileInput" className="files-btn">
              Upload File
            </label>
          </div>
        </div>
        <div className="upload-folders">
          <div className="folder-border">
            <button className="folder-btn">Upload Folder</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FolderNavbar;

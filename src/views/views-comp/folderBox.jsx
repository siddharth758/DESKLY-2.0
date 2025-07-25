import "../vc-css/folder-box.css";
import { Upload, Clock, History, FolderPlus } from "lucide-react";

function FolderBox() {
  return (
    <>
      <div className="folders-boxes">
        <div className="recent-folders-div">
          <div className="recent-folders">
            <h1>Recent Folders</h1>
            <Clock size={20} />
          </div>
        </div>
        <div className="uploaded-folders-div">
          <div className="uploaded-folders">
            <h1>Uploaded Folders</h1>
            <Upload size={20} />
          </div>
        </div>
        <div className="create-folders-div">
          <div className="create-folders">
            <h1>Create Folders</h1>
            <FolderPlus size={20} />
          </div>
        </div>
      </div>
    </>
  );
}
export default FolderBox;

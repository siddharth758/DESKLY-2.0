// import "../vc-css/folder-box.css";
import { Upload, Clock, History, FolderPlus } from "lucide-react";
import FileItem from "../file-item/fileItem";
import "../file-item-css/folder-item.css";

function FolderBox() {
  return (
    <>
      <div className="folders-boxes">
        <FileItem title="Recent Folders" Icon={Clock} />
        <FileItem title="Uploaded Folders" Icon={Upload} />
        <FileItem title="Create Folders" Icon={FolderPlus} />
      </div>
    </>
  );
}
export default FolderBox;

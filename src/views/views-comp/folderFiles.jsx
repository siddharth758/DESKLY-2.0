import { useState } from "react";
import "../vc-css/folder-files.css";
import { Edit, Trash2, Share2, Heart, Bookmark } from "lucide-react";

function FolderFiles() {
  // const [activeIndex, setActiveIcons] = useState(null);

  const files = ["Project 1", "Project 2", "College project"];

  // const showIconsList = (index) => {
  //   setActiveIcons(index === activeIndex ? null : index);
  // };

  return (
    <>
      <div className="folder-separataion">
        <ul>
          <li>All</li>
          <li>My Docs</li>
          <li>Favorite</li>
          <li>Bookmark</li>
          <li>Share</li>
        </ul>
        <div className="folder-border-line"></div>
      </div>

      <div className="fixed-li-div">
        <div className="fixed-li">
          <ul>
            <li>Name</li>
            <li>Location</li>
            <li>Date viewed</li>
          </ul>
          <div className="folder-border-line"></div>
        </div>
      </div>

      <div className="file-list-div">
        <div className="file-list">
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <span>{file}</span>
                {/* {activeIndex === index && ( */}
                <span className="file-icons">
                  <Edit size={18} />
                  <Trash2 size={18} />
                  <Share2 size={18} />
                  <Heart size={18} />
                  <Bookmark size={18} />
                </span>
                {/* )} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FolderFiles;

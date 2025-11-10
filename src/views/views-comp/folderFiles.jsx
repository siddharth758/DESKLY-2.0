import { useState } from "react";
import "../vc-css/folder-files.css";
import { Edit, Trash2, Share2, Heart, Bookmark } from "lucide-react";

function FolderFiles() {
  const [activeTab, setActiveTab] = useState("All"); // default active

  const currentFiles = {
    All: ["Project 1", "Project 2", "College project", "Notes"],
    "My Docs": ["Project 1", "College project"],
    Favorite: ["Project 2"],
    Bookmark: ["Notes"],
    Share: ["Shared Doc 1", "Shared Doc 2"],
  };

  return (
    <>
      <div className="folder-separataion">
        <ul>
          {["All", "My Docs", "Favorite", "Bookmark", "Share"].map((item) => (
            <li
              key={item}
              className={activeTab === item ? "active" : ""}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
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
            {currentFiles.length > 0 ? (
              currentFiles.map((file, index) => (
                <li key={index}>
                  <span>{file}</span>
                  <span className="file-icons">
                    <Edit size={18} />
                    <Trash2 size={18} />
                    <Share2 size={18} />
                    <Heart size={18} />
                    <Bookmark size={18} />
                  </span>
                </li>
              ))
            ) : (
              <li className="no-files">No files in {activeTab}</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FolderFiles;

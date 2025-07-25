import "../vc-css/action-list.css";
import { Edit, Trash2, Share2, Heart, Bookmark } from "lucide-react";
function ActionList() {
  return (
    <>
      <div className="action-list-container">
        <div className="action-list-border">
          <div className="action-list">
            <ul>
              <li>
                <Edit size={18} />
              </li>
              <li>
                <Trash2 size={18} />
              </li>
              <li>
                <Share2 size={18} />
              </li>

              <li>
                <Heart size={18} />
              </li>

              <li>
                <Bookmark size={18} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionList;

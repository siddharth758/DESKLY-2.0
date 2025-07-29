import "../file-item-css/folder-item.css";

function FileItem({ title, Icon }) {
  return (
    <>
      <div className="recent-folders-div">
        <div className="recent-folders">
          <h1>{title}</h1>
          {Icon && <Icon size={20} />}
        </div>
      </div>
    </>
  );
}
export default FileItem;

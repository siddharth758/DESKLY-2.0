import FolderNavbar from "./views-comp/folderNavbar";
import ActionList from "./views-comp/folderActionList";
import FolderBox from "./views-comp/folderBox";
import FolderFiles from "./views-comp/folderFiles";

function FolderView() {
  return (
    <>
      <div>
        <>
          <div>
            <FolderNavbar />
            <ActionList />
            <FolderBox />
            <FolderFiles />
          </div>
        </>
      </div>
    </>
  );
}

export default FolderView;

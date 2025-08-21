import "../home-view/home-css/home-box.css";

function HomeMainBox({ children }) {
  return (
    <>
      <div className="scroll-box">{children}</div>
    </>
  );
}

export default HomeMainBox;

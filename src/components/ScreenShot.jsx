import "../css/ScreenShot.css";
import InsideImage from "../assets/inside.png";
function ScreenShot() {
  return (
    <>
      <div>
        <div className="image-div-center">
          <div className="image-div">
            <img
              src={InsideImage}
              alt="Inside preview"
              className="adjust-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScreenShot;

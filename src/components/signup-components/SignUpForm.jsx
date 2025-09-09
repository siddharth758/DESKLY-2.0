import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faGoogle,
  faGithub,
  faApple,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import "../signup-components/SignUp.css/SignUpform.css";

function SignupForm() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/main");
  };

  return (
    <>
      <div className="wrapper">
        <div className="sign-form">
          <div>
            <h1>Create your account</h1>
          </div>
          <div className="social-buttons">
            <div>
              <button className="google-btn brand-btn">
                <FontAwesomeIcon icon={faGoogle} />
              </button>
            </div>
            <div>
              <button className="github-btn brand-btn">
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </div>
            <div>
              <button className="apple-btn brand-btn">
                <FontAwesomeIcon icon={faApple} />
              </button>
            </div>
            <div>
              <button className="outlook-btn brand-btn">
                <FontAwesomeIcon icon={faMicrosoft} />
              </button>
            </div>
          </div>
          <div>
            <p>other</p>
          </div>
          <div>
            <div className="sign-input">
              <input className="signin-input" type="text" placeholder="Name" />
            </div>
            <div className="sign-input">
              <input
                className="signin-input"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="sign-input">
              <input
                className="signin-input"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="sign-input">
              <input
                className="signin-input"
                type="password"
                placeholder="Password (optional)"
              />
            </div>
          </div>
          <div className="sign-btn">
            <button onClick={handleGetStarted} className="btn-box">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupForm;

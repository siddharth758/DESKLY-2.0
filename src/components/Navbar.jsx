import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="navbar-option">
            <ul className="navbar-options">
              <li>DESKLy</li>
              <div className="divider"></div> {/* ← Vertical line */}
              <li>Desktop Manager</li>
            </ul>
          </div>
          <div className="navbar-option">
            <ul className="navbar-options">
              <li>Product</li>
              <li>Resources</li>
              <li>Pricing</li>
              <li>Enterprise</li>
              <li>Learning</li>
            </ul>
          </div>

          <div className="navbar-sep2">
            <div className="navbar-option">
              <ul className="navbar-options">
                <li>Login</li>
                <li>Sign Up</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

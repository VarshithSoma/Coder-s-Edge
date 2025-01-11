import leetCodeLogo from "../assets/LeetCode_Logo_2.png";
import CodeChefLogo from "../assets/codeChef_logo.png";
import codeForcesLogo from "../assets/codeForces.png";
import "./Header.css";
function Header() {
  return (
    <div className="headerMain">
      <img src={leetCodeLogo} className={leetCodeLogo} alt="" srcset="" />
      <img src={CodeChefLogo} className={CodeChefLogo} alt="" srcset="" />
      <img src={codeForcesLogo} className={codeForcesLogo} alt="" srcset="" />
    </div>
  );
}
export default Header;

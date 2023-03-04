import "./../styles/Header.css";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <header>
      <div>
        <Navbar />
        <HeaderContent />
      </div>
      <img src="https://plus.unsplash.com/premium_photo-1669559808911-10decf70b075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
    </header>
  );
}

export default Header;

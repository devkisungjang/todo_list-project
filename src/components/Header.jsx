import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>방명록 페이지</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;

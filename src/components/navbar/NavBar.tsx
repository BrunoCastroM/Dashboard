import "./navbar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Administrator</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon"/>
        <img src="/app.svg" alt="" className="icon"/>
        <img src="/expand.svg" alt="" className="icon"/>
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp" alt="" />
          <span>João</span>
        </div>
        <img src="/settings.svg" alt="" className="icon"/>
      </div>
    </div>
  );
}

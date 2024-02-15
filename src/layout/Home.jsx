export default function Navbar() {
  const navStyle = {
    backgroundColor: "#12282D",
  };

  return (
    <div className="navbar bg-base-100 " style={navStyle}>
      <div className="navbar-center hidden lg:flex ">
        <ul className=" menu menu-horizontal px-1 ">
          <li>
            <a>หน้าเเรก</a>
          </li>
          <li>
            <a>รายการการสั่งซื้อ</a>
          </li>
          <li>
            <a>รายการโปรด</a>
          </li>
          <li>
            <a>ตะกร้าสินค้า</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

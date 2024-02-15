import axios from "axios";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post("http://localhost:8889/auth/login", input);
      console.log(rs.data.token);
      localStorage.setItem("token", rs.data.token);
      const rs1 = await axios.get("http://localhost:8889/auth/me", {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });
      console.log(rs1.data);
      setUser(rs1.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const navStyle = {
    backgroundColor: "#101828",
  };

  return (
    <div
      className="p-5  w-4/6 min-w-[500px] mx-auto  mt-20 shadow-md rounded-2xl max-w-sm "
      style={navStyle}
    >
      <div className="text-3xl mb-5  text-[#FFE177]">เข้าสู่ระบบ</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-[#FFFFFF]">
              อีเมลหรือเบอร์โทรศัพท์
            </span>
          </div>

          <input
            type="text"
            className="input input-bordered w-full max-w-xs min-w-[460px] bg-white"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>

        <label className="form-control w-full max-w-xs ">
          <div className="label">
            <span className="label-text text-[#FFFFFF]">รหัสผ่าน</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs min-w-[460px] bg-white"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>

        <button type="submit" className="btn  bg-green-900 mt-7">
          เข้าสู่ระบบ
        </button>

        <Link
          type="submit"
          className="btn  bg-amber-200 mt-3  text-[#151515]"
          to="/register"
        >
          สมัครสมาชิค
        </Link>
        <button type="submit" className="btn bg-amber-50 mt-3 text-[#151515]">
          เข้าระบบโดยบัญชี Google
        </button>
      </form>
    </div>
  );
}

import axios from "axios";
import { useState } from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      if (input.password !== input.confirmPassword) {
        return alert("Please check confirm password");
      }
      const rs = await axios.post("http://localhost:8889/auth/register", input);
      console.log(rs);
      if (rs.status === 200) {
        alert("Register Successful");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const navStyle = {
    backgroundColor: "#101828",
  };

  return (
    <div
      className="p-5  w-4/6 min-w-[500px] mx-auto  mt-12 shadow-md rounded-xl max-w-sm"
      // className="p-6 max-w-sm mx-auto  rounded-xl shadow-md flex items-center space-x-4 mt-7"
      style={navStyle}
    >
      <div className="text-3xl mb-5 text-[#FFE177]">สมัครสมาชิค</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-[#FFFF] ">username</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xl min-w-[460px] bg-gray-200"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-[#FFFF]">E-mail</span>
          </div>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs min-w-[460px] bg-gray-200 "
            name="email"
            value={input.email}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-[#FFFF]">password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs min-w-[460px] bg-gray-200"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-[#FFFF]">Confirm Password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs min-w-[460px] bg-gray-200"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={hdlChange}
          />
        </label>

        <button
          type="submit"
          className="btn  bg-amber-200 mt-7  text-[#151515]"
          to="/register"
        >
          สมัครสมาชิค
        </button>

        <button type="submit" className="btn bg-amber-50 mt-3 text-[#151515]">
          เข้าระบบโดยบัญชี Google
        </button>
      </form>
    </div>
  );
}

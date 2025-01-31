import React from "react";

const Login = () => {
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Hello guys ! form is subbmit");
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20 ">
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className="flex flex-col justify-center items-center">
          <input required
            type="text"
            placeholder="Enter your email"
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
          />
          <input required
            type="password"
            placeholder="Enter password"
            className="mt-3 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
          />
          <button className="text-white mt-7 outline-none hover:bg-emerald-700 font-semibold  bg-emerald-600 text-lg py-2 px-8 w-full rounded-full
           placeholder:text-gray-400">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
//24:43
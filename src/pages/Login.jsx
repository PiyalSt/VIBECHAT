import React, { useState } from "react";
import loginImg from "../assets/login.jpg";
import { Button, TextField } from "@mui/material";
import googleImg from "../assets/google.png";
import { Link } from "react-router";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(email);
  console.log(password);
  

  return (
    <>
      <section id="loginPage">
        <div className="flex h-screen">
          <div className="w-6/12 flex items-center justify-center">
            <div className=" py-4 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-8">
                <h2 className="font-nunito font-bold text-4xl text-text-primary">
                  Login to your account!
                </h2>
                <div className="w-fit flex items-center gap-2 border-2 border-gray-300 py-5 px-10 rounded-lg cursor-pointer">
                  <img
                    className="w-5 h-5 object-cover "
                    src={googleImg}
                    alt="googleImg"
                  />
                  <p>Login with Google</p>
                </div>
              </div>


              {/* TEXT FIELD START */}
              <div className="w-full flex flex-col gap-8 my-12">
                <div>
                  <TextField
                    sx={{ width: "90%" }}
                    type="email"
                    variant="standard"
                    label="Email Address"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                  ></TextField>
                </div>
                <div>
                  <TextField
                    sx={{ width: "90%" }}
                    type="password"
                    variant="standard"
                    label="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                  ></TextField>
                </div>
              </div>
              {/* TEXT FIELD END */}


              <div className="w-full">
                <div className="mb-8">
                  <Button
                    sx={{
                      width: "90%",
                      padding: "10px 64px",
                      background: "#00899b",
                      color: "#fff",
                      borderRadius: "100px",
                      fontFamily: "Nunito",
                      fontWeight: "500",
                    }}
                    variant="contained"
                  >
                    Login to Continue
                  </Button>
                </div>
                <p className="font-nunito font-medium text-sm text-center -ml-8">
                  Don’t have an account ?{" "}
                  <Link to={"/registration"}>
                    <span className="text-text-primary cursor-pointer font-bold">
                      Sign Up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-6/12 bg-blue-400">
            <img
              className="w-full h-full object-cover"
              src={loginImg}
              alt="loginImg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

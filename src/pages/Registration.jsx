import React from "react";
import registrationImg from "../assets/x.jpg";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router";

const Registration = () => {
  return (
    <>
      <section id="registration">
        <div className="flex h-screen">
          <div className="w-6/12 flex items-center justify-center">
            <div className=" py-4 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4">
                <h2 className="font-nunito font-bold text-4xl text-text-primary">
                  Get started with easily register
                </h2>
                <p className="font-nunito font-normal text-xl text-black/50">
                  Free register <span className="text-text-primary/50">and</span>{" "}
                  you can enjoy it
                </p>
              </div>

              <div className="w-full flex flex-col gap-4 my-12">
                <div>
                  <TextField
                    sx={{ width: "90%" }}
                    label="Email Address"
                  ></TextField>
                </div>
                <div>
                  <TextField
                    sx={{ width: "90%" }}
                    label="Full Name"
                  ></TextField>
                </div>
                <div>
                  <TextField
                    sx={{ width: "90%" }}
                    type="password"
                    label="Password"
                  ></TextField>
                </div>
                <div>
                  <TextField
                    sx={{ width: "90%" }}
                    type="password"
                    label="Confirm Password"
                  ></TextField>
                </div>
              </div>

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
                    Sign Up
                  </Button>
                </div>
                <p className="font-nunito font-medium text-sm text-center -ml-8">
                  Already have an account ?{" "}
                  <Link to={'/login'}>
                    <span className="text-text-primary cursor-pointer font-bold">
                      Sign In
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-6/12 bg-blue-400">
            <img className="w-full h-full object-cover" src={registrationImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;

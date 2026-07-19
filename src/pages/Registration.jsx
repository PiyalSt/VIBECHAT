import React, { useState } from "react";
import registrationImg from "../assets/x.jpg";
import { Button, IconButton, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { PiEyeClosedThin, PiEyeThin } from "react-icons/pi";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";

const Registration = () => {

  const auth = getAuth();
    const db = getDatabase();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);

  const registrationValidation = () => {
    if (!email) {
      toast.error("Please enter email!");
      setEmailError(true);
      return;
    }

    if (!name) {
      toast.error("Please enter name!");
      setNameError(true);
      return;
    }

    if (!password) {
      toast.error("Please enter password!");
      setPasswordError(true);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      setConfirmPasswordError(true);
      return;
    }

    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user.uid);
      
      toast.success("Registration Successful!");

      // SEND DATA FIREDATABASW
      let userRef = ref(db, 'users/' + userCredential.user.uid)
      set(userRef, {
        username: name,
        useremail: email,
      });

      setInterval(()=> {
        navigate('/')
      }, 3000)
    })
    .catch((error)=> {
      const errorCode = error.code

      toast.error(errorCode)
    })
  };

  const handleShow = () => {
    setShowPassword(!showPassword)
  }

  const handleShowConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm)
  }
  

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
                  Free register{" "}
                  <span className="text-text-primary/80">and</span> you can
                  enjoy it
                </p>
              </div>

              <div className="w-full flex flex-col gap-4 my-12">
                <div>
                  <TextField
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(false);
                    }}
                    sx={{ width: "90%" }}
                    label="Email Address"
                    error={emailError}
                    helperText={emailError ? "Please enter your email" : ""}
                  ></TextField>
                </div>
                <div>
                  <TextField
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError(false);
                    }}
                    sx={{ width: "90%" }}
                    label="Full Name"
                    error={nameError}
                    helperText={nameError ? "Please enter your name" : ""}
                  ></TextField>
                </div>
                <div className="relative">
                  <TextField
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError(false);
                    }}
                    sx={{ width: "90%" }}
                    type={showPassword ? "password" : "text"}
                    label="Password"
                    error={passwordError}
                    helperText={passwordError ? "Please enter your email" : ""}
                  ></TextField>
                  {showPassword ? (
                    <div className="absolute top-2 right-16">
                      <IconButton onClick={handleShow}>
                        <PiEyeClosedThin className="text-xl" />
                      </IconButton>
                    </div>
                  ) : (
                    <div className="absolute top-2 right-16">
                      <IconButton onClick={handleShow}>
                        <PiEyeThin className="text-xl" />
                      </IconButton>
                    </div>
                  )}
                </div>
                <div className="relative flex gap-6">
                  <TextField
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setConfirmPasswordError(false);
                    }}
                    sx={{ width: "90%" }}
                    type={showPasswordConfirm ? 'password' : 'text'}
                    label="Confirm Password"
                    error={confirmPasswordError}
                    helperText={
                      confirmPasswordError ? "Password don't match" : ""
                    }
                  ></TextField>
                  {showPasswordConfirm ? (
                    <div className="absolute top-2 right-16 ">
                      <IconButton onClick={handleShowConfirm}>
                        <PiEyeClosedThin className="text-xl" />
                      </IconButton>
                    </div>
                  ) : (
                    <div className="absolute top-2 right-16">
                      <IconButton onClick={handleShowConfirm}>
                        <PiEyeThin className="text-xl" />
                      </IconButton>
                    </div>
                  )}
                </div>
              </div>
              
              {/* POPUP NOTIFICATION */}
              <ToastContainer position="top-left" />

              <div className="w-full">
                <div className="mb-8">
                  <Button
                    onClick={registrationValidation}
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
                  <Link to={"/login"}>
                    <span className="text-text-primary cursor-pointer font-bold">
                      Sign In
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-6/12 bg-blue-400">
            <img
              className="w-full h-full object-cover"
              src={registrationImg}
              alt="registrationImg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;

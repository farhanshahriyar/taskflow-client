/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import loginImg from "../../../public/loginImg.avif";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // const [user, setUser] = useState(null)
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { user, loading, createUser, signIn, googleSignIn, githubSignIn } =
    useContext(AuthContext);

  // load captcha engine on component mount
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        // User is signed in
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data); // user created
          // Toast Showing
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You are logged in successfully!",
          });
        });
        navigate("/dashboard/projects");
      })
      .catch((error) => {
        // Handle errors here
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  // github sign in
  const hanleGithubSignIn = (e) => {
    e.preventDefault();
    // console.log('github sign in')
    githubSignIn()
      .then((result) => {
        // User is signed in
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data); // user created
          // Toast Showing
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You are logged in successfully!",
          });
        });
        navigate("/dashboard/projects");
      })
      .catch((error) => {
        // Handle errors here
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log('login e tip porse mama')
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are logged in successfully!",
      });
      navigate("/dashboard/projects");
    });
  };

  // validate captcha
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
      console.log("captcha validated");
    } else {
      setDisabled(true);
      console.log("captcha not validated");
    }
  };

  return (
    <div>
      {/* login */}

      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-10 md:px-8">
          <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-3xl lg:leading-tight dark:text-gray-200">
              <span className="text-[#153E3D] dark:text-blue-500">
                Taskflow
              </span>{" "}
              is here to help you to manage your tasks.
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Taskflow is a task management software that helps you to manage
              your tasks. It is a simple and easy to use software. It is a web
              based software so you can use it from anywhere.
            </p>

            {/* <form onSubmit={handleLogin}> */}
            <form >
              <div className="mt-8 grid">
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="w-4 h-auto"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  Sign up with Google
                </button>
                <br></br>
                <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>


                <button
                disabled={loading}
                  onClick={hanleGithubSignIn}
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-green-600 to-green-600 hover:from-green-600 hover:to-green-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 w-4.5 h-4.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  Get Started with GitHub
                </button>
              </div>

              <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>

             <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="text-black ml-4">Email address</span>
                </label>
                <input
                  type="email"
                  id="hs-hero-email-2"
                  name="email"
                  className="py-3 px-4 block w-full border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="text-black ml-4">Password</span>
                </label>
                <input
                  type="password"
                  id="hs-hero-password-2"
                  name="password"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-white">
                  <span className="text-black ml-4">Captcha</span>
                </label>
                <LoadCanvasTemplate />
                <input
                  type="text"
                  ref={captchaRef}
                  id="hs-hero-password-2"
                  name="captcha"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter the captcha code above"
                />
                <button
                  // onClick={handleValidateCaptcha}
                  type="button"
                  className=" mt-2 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Validate
                </button>
              </div>

              <div className="grid">
                <button
                  disabled={disabled}
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#153E3D] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sign up
                </button>
              </div> 
            </form>
            <p className="mt-3 text-base text-gray-500">
              <Link to="/sign-up">
                Dont have an account?{" "}
                <a className="text-[#153E3D] decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Sign up
                </a>
              </Link>
            </p>
          </div>
        </div>

        <div
          className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${loginImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default Login;

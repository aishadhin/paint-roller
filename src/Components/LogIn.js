import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "./Hooks/UseToken";
const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(user || gUser)

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let signInErrors;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])

  if (error || gError) {
    signInErrors = (
      <p className="text-red-500">{error?.message || gError?.message}</p>
    );
  }

  if (loading || gLoading) {
    return <button className="block mx-auto btn loading">loading</button>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="justify-center card-title">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs form-control">
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full max-w-xs input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide valid email address",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className="w-full max-w-xs form-control">
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full max-w-xs input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInErrors}
            <input
              className="w-full max-w-xs text-white btn btn-primary"
              type="submit"
              value="LOGIN"
            />
          </form>
          <small>
            New to doctors portal?{" "}
            <Link className="text-primary" to="/signup">
              Create new Account.
            </Link>
          </small>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="text-white btn btn-outline bg-secondary"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import googleimg from "../../assets/images/web/google.png";
import facebookIMg from "../../assets/images/web/facebook.png";
import githubImg from "../../assets/images/web/github.png";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mr-12 w-1/2">
            <img className="w-3/4" src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login now!</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <div className="text-center">
                <h2 className="pb-4 text-xl">Login with</h2>
                <div className="flex justify-around py-4">
                  {/* <Link className='text-3xl'><FaGoogle></FaGoogle></Link>
                            <Link className='text-3xl'><FaGithub></FaGithub></Link>
                            <Link className='text-3xl'><FaFacebook></FaFacebook></Link> */}
                  <Link>
                    <img className="w-8 h-8" src={googleimg} alt="" />
                  </Link>
                  <Link>
                    <img className="w-8 h-8" src={facebookIMg} alt="" />
                  </Link>
                  <Link>
                    {" "}
                    <img className="w-8 h-8" src={githubImg} alt="" />
                  </Link>
                </div>
              </div>
              <p className="text-center">
                New to Car Doctors{" "}
                <Link className="text-orange-600 font-bold" to={"/signup"}>
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

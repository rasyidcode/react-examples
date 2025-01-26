export default function LoginPage() {
  return (
    <div className=" bg-sky-50 h-screen flex justify-center items-center">
      <div className=" max-w-6xl w-full flex items-center">
        <div className=" flex-1">
          <h3 className=" text-5xl font-extrabold text-blue-500">Mernsocial</h3>
          <p className=" mt-1 text-2xl">
            Connect with friends and the world around you on Mernsocial.
          </p>
        </div>
        <div className="flex-1">
          <div className="min-h-80 bg-white rounded-xl p-4">
            <form className="flex flex-col gap-4">
              <label>
                <input
                  type="text"
                  className="h-14 rounded-xl border border-slate-200 w-full pl-4 text-lg"
                  placeholder="Email"
                />
              </label>
              <label>
                <input
                  type="password"
                  className="h-14 rounded-xl border border-slate-200 w-full pl-4 text-lg"
                  placeholder="Password"
                />
              </label>
              <button
                type="submit"
                className="h-14 rounded-xl border-0 bg-blue-500 text-white font-medium cursor-pointer
                hover:bg-blue-600 transition-colors ease-linear duration-150"
              >
                Log In
              </button>
              <a href="" className="text-center text-blue-500 hover:underline">
                Forgot Password?
              </a>
              <button
                type="button"
                className="h-14 rounded-xl border-0 bg-emerald-500 text-white font-medium cursor-pointer
                hover:bg-emerald-600 transition-colors ease-linear duration-150"
              >
                Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

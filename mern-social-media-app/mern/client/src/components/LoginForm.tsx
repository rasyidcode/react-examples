export default function LoginForm() {
  return (
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
  );
}

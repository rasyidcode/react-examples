export default function SearchBar() {
  return (
    <div className="w-full h-8 bg-white rounded-4xl flex items-center max-w-xl">
      <form className="w-full">
        <label className="flex gap-1 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 ml-3 text-slate-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            placeholder="Search for friend, post or video"
            className="w-full outline-0"
          />
        </label>
      </form>
    </div>
  );
}

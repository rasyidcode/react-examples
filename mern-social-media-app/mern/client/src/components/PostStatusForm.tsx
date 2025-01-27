import {
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
  TagIcon,
} from "@heroicons/react/20/solid";

export default function PostStatusForm() {
  return (
    <div className="w-full rounded-md shadow-md">
      <form className="p-3 flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4 w-full flex-1">
          <img
            src="/assets/person/2.jpeg"
            alt="Person 2"
            className="w-12 h-12 rounded-full object-cover aspect-square"
          />
          <label className="w-full">
            <input
              type="text"
              className="border-0 focus:outline-0 w-full"
              placeholder="What's in your mind?"
            />
          </label>
        </div>
        <hr className="border-slate-300" />
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 flex items-center gap-3 flex-wrap">
            <button
              type="button"
              className="flex items-center cursor-pointer gap-1 hover:bg-slate-100 rounded-md p-1"
            >
              <PhotoIcon className="size-6 text-red-400" />
              <span className="text-xs font-medium text-slate-700">
                Photo or Video
              </span>
            </button>
            <button
              type="button"
              className="flex items-center cursor-pointer gap-1 hover:bg-slate-100 rounded-md p-1"
            >
              <TagIcon className="size-6 text-blue-400" />
              <span className="text-xs font-medium text-slate-700">Tag</span>
            </button>
            <button
              type="button"
              className="flex items-center cursor-pointer gap-1 hover:bg-slate-100 rounded-md p-1"
            >
              <MapPinIcon className="size-6 text-green-400" />
              <span className="text-xs font-medium text-slate-700">
                Location
              </span>
            </button>
            <button
              type="button"
              className="flex items-center cursor-pointer gap-1 hover:bg-slate-100 rounded-md p-1"
            >
              <FaceSmileIcon className="size-6 text-yellow-400" />
              <span className="text-xs font-medium text-slate-700">
                Feeling
              </span>
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 py-1 px-4
            rounded-md text-white cursor-pointer hover:bg-blue-600/90
            transition-colors duration-150 ease-linear"
          >
            Share
          </button>
        </div>
      </form>
    </div>
  );
}

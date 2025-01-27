import {
  EllipsisVerticalIcon,
  HandThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";

function PostItem() {
  return (
    <div className="w-full rounded-md shadow-md p-3 flex flex-col space-y-4">
      <div className="flex items-center">
        <div className="flex-1 flex items-center gap-2">
          <img
            src="/assets/person/2.jpeg"
            alt="Person 2"
            className="size-9 rounded-full object-cover aspect-square"
          />
          <span className="font-medium text-sm">Person 2</span>
          <span className="text-xs text-slate-700">10 mins ago</span>
        </div>
        <button
          type="button"
          className="hover:bg-gray-200 rounded-full cursor-pointer p-1
        transition-colors duration-150 ease-linear"
        >
          <EllipsisVerticalIcon className="size-6" />
        </button>
      </div>
      <div>
        <p>This is my first post</p>
        <img
          src="/assets/post/1.jpeg"
          alt="Post 1"
          className="max-h-[500px] w-full object-cover mt-2"
        />
      </div>
      <div className="flex items-center">
        <div className="flex-1 flex items-center gap-2">
          <button type="button" className="group cursor-pointer">
            <HandThumbUpIcon
              className="size-7 text-blue-400 group-hover:text-blue-500
            transition-colors ease-linear duration-150"
            />
          </button>
          <button type="button" className="group cursor-pointer">
            <HeartIcon
              className="size-7 text-pink-400 group-hover:text-pink-500
             transition-colors ease-linear duration-150"
            />
          </button>
          <span className="text-slate-700">100 peoples like it</span>
        </div>
        <button
          type="button"
          className="cursor-pointer text-slate-700 hover:text-slate-900
          transition-colors duration-150 ease-linear"
        >
          9 comments
        </button>
      </div>
    </div>
  );
}

export default function PostList() {
  return (
    <div className="flex-1">
      <PostItem />
    </div>
  );
}

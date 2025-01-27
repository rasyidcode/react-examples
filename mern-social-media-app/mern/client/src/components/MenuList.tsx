import {
  BookmarkIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  PlayCircleIcon,
  QuestionMarkCircleIcon,
  RssIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/20/solid";

export default function MenuList() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <ul className="grid gap-2">
        <li>
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-slate-100 rounded-md
                p-2 transition-colors duration-150 ease-linear text-slate-700"
          >
            <RssIcon className="size-6" />
            <span>Feed</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-slate-100 rounded-md
                p-2 transition-colors duration-150 ease-linear text-slate-700"
          >
            <ChatBubbleBottomCenterTextIcon className="size-6" />
            <span>Chat</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-slate-100 rounded-md
                p-2 transition-colors duration-150 ease-linear text-slate-700"
          >
            <PlayCircleIcon className="size-6" />
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-slate-100 rounded-md
                p-2 transition-colors duration-150 ease-linear text-slate-700"
          >
            <BookmarkIcon className="size-6" />
            <span>Bookmark</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-slate-100 rounded-md
                p-2 transition-colors duration-150 ease-linear text-slate-700"
          >
            <QuestionMarkCircleIcon className="size-6" />
            <span>Question</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-slate-100 rounded-md
                p-2 transition-colors duration-150 ease-linear text-slate-700"
          >
            <BriefcaseIcon className="size-6" />
            <span>Job</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-slate-100 rounded-md
                p-2 transition-colors duration-150 ease-linear text-slate-700"
          >
            <CalendarDaysIcon className="size-6" />
            <span>Event</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-slate-100 rounded-md
                p-2 transition-colors duration-150 ease-linear text-slate-700"
          >
            <BookOpenIcon className="size-6" />
            <span>Courses</span>
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="w-full border-0 p-3 rounded-xl font-medium bg-slate-200 text-slate-700
        block cursor-pointer hover:bg-slate-300/80 transition-colors duration-150 ease-linear"
      >
        Show More
      </button>
    </div>
  );
}

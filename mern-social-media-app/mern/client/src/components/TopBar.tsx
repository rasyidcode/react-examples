import { BellIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/20/solid";
import IconButtonWithBadge from "../components/IconButtonWithBadge";
import SearchBar from "../components/SearchBar";

export default function TopBar() {
  return (
    <div className="h-12 bg-blue-500 flex items-center sticky z-50 sm:gap-4 lg:gap-56">
      <div className="flex-1 sm:flex-0">
        <a className="text-2xl pl-5 font-bold text-white">Mernsocial</a>
      </div>
      <div className="sm:flex-1 flex items-center gap-6">
        <div className="flex-1 hidden sm:block">
          <SearchBar />
        </div>
        <div className="lg:flex-1 flex items-center gap-4">
          <div className="flex-1 hidden lg:flex items-center text-white gap-4">
            <a
              href="#"
              className="font-medium hover:text-slate-200 transition-colors duration-150 ease-linear"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium hover:text-slate-200 transition-colors duration-150 ease-linear"
            >
              Timeline
            </a>
          </div>
          <div className="flex-1 hidden md:flex items-center gap-4">
            <IconButtonWithBadge badgeCount={9}>
              <UserIcon
                className="size-6 text-white group-hover:text-slate-200 transition-colors
              duration-150 ease-linear"
              />
            </IconButtonWithBadge>
            <IconButtonWithBadge badgeCount={69}>
              <EnvelopeIcon
                className="size-6 text-white group-hover:text-slate-200 transition-colors
              duration-150 ease-linear"
              />
            </IconButtonWithBadge>
            <IconButtonWithBadge badgeCount={18}>
              <BellIcon
                className="size-6 text-white group-hover:text-slate-200 transition-colors
              duration-150 ease-linear"
              />
            </IconButtonWithBadge>
          </div>
          <div className="mr-5">
            <a href="#">
              <img
                src="/assets/person/1.jpeg"
                className="aspect-square border-2 border-transparent hover:border-white transition-all 
                duration-150 ease-linear rounded-full object-cover size-9"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

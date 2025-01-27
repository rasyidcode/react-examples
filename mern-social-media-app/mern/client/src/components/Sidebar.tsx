import CloseFriendList from "./CloseFriendList";
import MenuList from "./MenuList";

export default function Sidebar() {
  return (
    <div className="sticky overflow-y-auto h-screen hidden lg:block md:w-80">
      <div className="p-5 flex flex-col gap-6">
        <MenuList />
        <hr className="border-slate-300" />
        <CloseFriendList />
      </div>
    </div>
  );
}

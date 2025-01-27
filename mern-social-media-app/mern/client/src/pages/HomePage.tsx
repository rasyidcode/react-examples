import CloseFriendList from "../components/CloseFriendList";
import MenuList from "../components/MenuList";
import TopBar from "../components/TopBar";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <div className="flex">
        <div className="sticky overflow-y-auto h-screen w-80">
          <div className="p-5 flex flex-col gap-6">
            <MenuList />
            <hr className="border-slate-300" />
            <CloseFriendList />
          </div>
        </div>
        <div className="flex-1">feed</div>
        <div className="flex-1">friendlist</div>
      </div>
    </>
  );
}

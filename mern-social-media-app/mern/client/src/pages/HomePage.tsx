import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <div className="flex">
        <Sidebar />
        <Feed />
        <div className="hidden xl:flex md:w-96">friendlist</div>
      </div>
    </>
  );
}

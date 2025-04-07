import UserList from "./UserList";
import UserList2 from "./UserList2";

export default function Example2Page() {
  return (
    <>
      <h2>Shopping Item</h2>
      <section>
        <h3>Without useCallback</h3>
        <div className="content">
          <UserList />
        </div>
      </section>
      <section>
        <h3>With useCallback</h3>
        <div className="content">
          <UserList2 />
        </div>
      </section>
    </>
  );
}

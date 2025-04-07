import "./ExamplePage.css";
import ShoppingItem2 from "./with/ShoppingItem2";
import ShoppingItem from "./without/ShoppingItem";

export default function ExamplePage() {
  return (
    <>
      <h2>Shopping Item</h2>
      <section>
        <h3>Without useCallback</h3>
        <div className="content">
          <ShoppingItem />
        </div>
      </section>
      <section>
        <h3>With useCallback</h3>
        <div className="content">
          <ShoppingItem2 />
        </div>
      </section>
    </>
  );
}

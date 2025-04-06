import Example from "./without/Counter";
import Example2 from "./with/Example2";
import "./ExamplePage.css";

export default function ExamplePage() {
  return (
    <>
      <h2>Shopping Item</h2>
      <section>
        <h3>Without useCallback</h3>
        <div className="content">
          <Example />
        </div>
      </section>
      <section>
        <h3>With useCallback</h3>
        <div className="content">
          <Example2 />
        </div>
      </section>
    </>
  );
}

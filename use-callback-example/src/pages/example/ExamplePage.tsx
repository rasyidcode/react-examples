import Example from "./Example";
import Example2 from "./Example2";
import "./ExamplePage.css";

export default function ExamplePage() {
  return (
    <>
      <h1>Example Page</h1>
      <section>
        <h2>Without useCallback</h2>
        <div className="content">
          <Example />
        </div>
      </section>
      <section>
        <h2>With useCallback</h2>
        <div className="content">
          <Example2 />
        </div>
      </section>
    </>
  );
}

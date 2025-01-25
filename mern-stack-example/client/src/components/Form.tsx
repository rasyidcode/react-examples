export default function Form() {
  return (
    <>
      <h3>Create/Update Employee Record</h3>
      <form className="border border-slate-900/10 rounded-lg p-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12">
          <div>
            <h2>Employee Info</h2>
            <p>
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="">
              <label>Name</label>
              <input
                type="text"
                className="block border border-slate-900/10 p-2 mt-2"
              />
            </div>
            <div>
              <label>Position</label>
              <input
                type="text"
                className="block border border-slate-900/10 p-2 mt-2"
              />
            </div>
            <div>
              <label>Level</label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="font-medium border border-slate-900/10 hover:bg-slate-100
          rounded-md px-3 py-1 cursor-pointer mt-4"
        >
          Save Employee Record
        </button>
      </form>
    </>
  );
}

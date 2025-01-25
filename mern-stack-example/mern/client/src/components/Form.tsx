import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Record } from "../type";

export default function Form() {
  const [formData, setFormData] = useState<Record>({
    _id: "",
    name: "",
    position: "",
    level: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const isNew = location.pathname.indexOf("new") !== -1;

  useEffect(() => {
    if (!id) return;

    async function fetchRecord() {
      const response = await fetch("http://localhost:5050/records/" + id);
      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        console.error(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        console.warn(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      setFormData(record);
    }

    fetchRecord();

    return;
  }, [id, navigate]);

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      let response: Response | null;
      if (isNew) {
        response = await fetch("http://localhost:5050/records", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      } else {
        response = await fetch("http://localhost:5050/records/" + id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }
      if (!response?.ok) {
        throw new Error(`HTTP error! status: ${response?.status}`);
      }
    } catch (err) {
      console.error("A problem occured with your fetch operation: ", err);
    } finally {
      setFormData({ _id: "", name: "", position: "", level: "" });
      navigate("/");
    }
  }

  return (
    <>
      <h3 className="text-lg font-semibold pt-4 pb-4 pr-4">
        Create/Update Employee Record
      </h3>
      <form
        onSubmit={handleFormSubmit}
        className="border border-slate-900/10 rounded-lg p-4"
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12">
          <div>
            <h2 className="text-base font-semibold leading-7 text-slate-900">
              Employee Info
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="">
              <label className="block">Name</label>
              <input
                type="text"
                className="block border border-slate-900/10 p-2 mt-2 w-full rounded-md"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block">Position</label>
              <input
                type="text"
                className="block border border-slate-900/10 p-2 mt-2 w-full rounded-md"
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
              />
            </div>
            <div>
              <fieldset>
                <legend className="sr-only">Position Options</legend>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="positionOptions"
                    value="intern"
                    className="border-slate-300"
                    checked={formData.level === "intern"}
                    onChange={(e) =>
                      setFormData({ ...formData, level: e.target.value })
                    }
                  />
                  <label className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4">
                    Intern
                  </label>
                  <input
                    type="radio"
                    name="positionOptions"
                    value="junior"
                    className="border-slate-300"
                    checked={formData.level === "junior"}
                    onChange={(e) =>
                      setFormData({ ...formData, level: e.target.value })
                    }
                  />
                  <label className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4">
                    Junior
                  </label>
                  <input
                    type="radio"
                    name="positionOptions"
                    value="senior"
                    className="border-slate-300"
                    checked={formData.level === "senior"}
                    onChange={(e) =>
                      setFormData({ ...formData, level: e.target.value })
                    }
                  />
                  <label className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4">
                    Senior
                  </label>
                </div>
              </fieldset>
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

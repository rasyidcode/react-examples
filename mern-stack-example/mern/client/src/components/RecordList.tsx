import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Record } from "../type";

function RecordItem({
  record,
  onDeleteRecord,
}: {
  record: Record;
  onDeleteRecord: (id: string) => void;
}) {
  return (
    <tr className="border-b border-gray-300 hover:bg-slate-100 [&_td]:p-4">
      <td>{record.name}</td>
      <td>{record.position}</td>
      <td style={{ textTransform: "capitalize" }}>{record.level}</td>
      <td>
        <div className="flex gap-4">
          <Link
            to={`/edit/${record._id}`}
            className="border border-yellow-600 text-sm font-medium hover:bg-yellow-400/80 
            rounded-md py-1 tracking-wider w-16 text-center bg-yellow-400 text-slate-950"
          >
            Edit
          </Link>
          <button
            className="border border-red-600 text-sm font-medium hover:bg-red-400/80 rounded-md
            py-1 tracking-wider text-center w-16 bg-red-400 text-white cursor-pointer"
            onClick={() => onDeleteRecord(record._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function RecordList() {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/records`);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }

    getRecords();
    return;
  }, [records.length]);

  async function handleDeleteRecord(id: string) {
    if (confirm("Are you sure want to delete this record?")) {
      await fetch(`http://localhost:5050/records/${id}`, {
        method: "DELETE",
      });
      const newRecords = records.filter((record) => record._id !== id);
      setRecords(newRecords);
    }
  }

  return (
    <>
      <h3 className="text-lg font-semibold p-4 pl-0">Employee Records</h3>
      <table className="w-full border border-gray-300 rounded-lg">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="h-12 px-4 text-left font-medium">Name</th>
            <th className="h-12 px-4 text-left font-medium">Position</th>
            <th className="h-12 px-4 text-left font-medium">Level</th>
            <th className="h-12 px-4 text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {records.length > 0 &&
            records.map((record) => (
              <RecordItem
                key={record._id}
                record={record}
                onDeleteRecord={handleDeleteRecord}
              />
            ))}
          {records.length === 0 && (
            <tr>
              <td colSpan={4} className="px-4 py-2">No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

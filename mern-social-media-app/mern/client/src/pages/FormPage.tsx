import { ReactNode } from "react";

export default function FormPage({ children }: { children: ReactNode }) {
  return (
    <div className=" bg-sky-50 h-screen flex justify-center items-center">
      <div className=" max-w-6xl w-full flex items-center">
        <div className=" flex-1">
          <h3 className=" text-5xl font-extrabold text-blue-500">Mernsocial</h3>
          <p className=" mt-1 text-2xl">
            Connect with friends and the world around you on Mernsocial.
          </p>
        </div>
        <div className="flex-1">
          <div className="min-h-80 bg-white rounded-xl p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

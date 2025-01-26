import { ReactNode } from "react";

export default function IconButtonWithBadge({
  children,
  badgeCount,
}: {
  children: ReactNode;
  badgeCount: number;
}) {
  return (
    <button type="button" className="relative cursor-pointer group">
      {children}
      <span
        className="absolute -top-1.5 -right-1.5 bg-red-500 rounded-full w-4 h-4 text-xs
              text-white duration-150 ease-linear
              font-medium flex items-center justify-center"
      >
        {badgeCount}
      </span>
    </button>
  );
}

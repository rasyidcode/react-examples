import { ChangeEventHandler, KeyboardEventHandler } from "react";

export default function SearchBar({
  onInputChange,
  onInputKeyUp,
}: {
  onInputChange: ChangeEventHandler;
  onInputKeyUp: KeyboardEventHandler;
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="query"
        placeholder="Enter city name..."
        onChange={onInputChange}
        onKeyUp={onInputKeyUp}
      />
    </div>
  );
}

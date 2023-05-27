import React from "react";
import Search from "./Search";

export default function FilterBar() {
  return (
    <div className="fixed bottom-0 top-64 w-64">
      <div className="border-r border-gray-200 h-full">
        <div className="overflow-y-auto p-4">
          <Search />
        </div>
      </div>
    </div>
  );
}

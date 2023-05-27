import { DatePickerWithRange } from "./DatePickerWithRange";
import Search from "./Search";

export default function FilterBar() {
  return (
    <div className="fixed bottom-0 top-64 w-80">
      <div className="relative h-full border-r border-gray-200">
        <div className="overflow-y-auto ">
          <Search />
          <DatePickerWithRange />
        </div>
      </div>
    </div>
  );
}

import FilterBar from "@/components/FilterBar";
import Select from "@/components/Select";
import SelectProduct from "@/components/SelectProduct";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const languages = [
  { id: 1, name: "English" },
  { id: 2, name: "Japanese" },
];

const sortings = [
  { id: 1, name: "Newest first" },
  { id: 2, name: "Oldest first" },
];

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
      <div className="flex justify-between p-12 border-b border-gray-200">
        <div className="flex-grow max-w-lg">
          <SelectProduct Icon={ChevronDownIcon} />
        </div>
        <div className="flex justify-center flex-grow max-w-lg gap-5">
          <div>
            <Select data={sortings} />
          </div>
          <div>
            <Select data={languages} />
          </div>
        </div>
      </div>
      <div>
        <FilterBar />
        <div className="flex flex-1 flex-col pl-64">
          <main className="flex-1">
            <div className="py-6 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <p>content</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

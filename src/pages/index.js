import { Inter } from "next/font/google";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SelectProduct from "@/components/SelectProduct";
import Select from "@/components/Select";
import SideBar from "@/components/SideBar";

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
    <main className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
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
        <SideBar />
      </div>
    </main>
  );
}

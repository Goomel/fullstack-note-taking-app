import Image from "next/image";
import notesIcon from "@/public/icons/notes.png";
import { Home, ArchiveRestore, Tag } from "lucide-react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-screen border-r border-gray-300 bg-white px-5">
      <div className="border-b border-gray-300">
        <div className="flex items-center gap-x-2 border-b border-gray-300 lg:h-20">
          <Image
            src={notesIcon}
            alt="notes icn"
            width="32"
            height="32"
            className="hidden lg:block"
          />
          <span className="text-base font-bold text-gray-700 sm:text-lg lg:text-xl">
            Notes
          </span>
        </div>
        <div className="py-4">
          <SidebarItem name="All notes" icon={Home} />
          <SidebarItem name="Archived notes" icon={ArchiveRestore} />
        </div>
      </div>
      <div className="py-4">
        <p className="text-xs font-medium text-gray-400 sm:text-sm">Tags</p>
        <div className="mt-4">
          <SidebarItem name="Tag 1" icon={Tag} />
          <SidebarItem name="Tag 2" icon={Tag} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

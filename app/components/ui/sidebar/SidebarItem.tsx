import { ArrowRight } from "lucide-react";

type SidebarLinkProps = {
  name: string;
  icon?: React.ElementType;
};

const SidebarItem = ({ name, icon: Icon }: SidebarLinkProps) => {
  return (
    <div className="group flex cursor-pointer items-center gap-2.5 rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-black">
      {Icon && (
        <Icon className="size-[18px] transition-colors group-hover:text-blue-400" />
      )}
      <span className="text-sm transition-colors lg:text-base">{name}</span>
      <div className="ml-auto mr-0 -translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowRight className="size-4" />
      </div>
    </div>
  );
};

export default SidebarItem;

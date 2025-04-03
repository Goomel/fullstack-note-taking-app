import TopBar from "@/app/components/ui/header/TopBar";
import Sidebar from "@/app/components/ui/sidebar/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="grid grid-cols-[320px_1fr]">
        <Sidebar />
        <div>
          <TopBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

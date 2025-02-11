import Navbar from "@/app/components/ui/Navbar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;

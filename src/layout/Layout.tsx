import Bottom from "./Bottom";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-full">
      <Header />
      {children}
      <Bottom />
    </div>
  );
}
export default Layout;

import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const WithSidebar = (WrappedComponent) => {
  return (prop) => (
    <div className="flex">
      <div className="w-[30%]">
        <Sidebar />
      </div>
      <div className="w-[50%]">
        <WrappedComponent {...prop} />
      </div>
    </div>
  );
};
export default WithSidebar;

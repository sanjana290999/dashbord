import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const WithSidebar = (WrappedComponent) => {
  return (props) => (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/4 lg:w-1/5 bg-gray-100">
        <Sidebar />
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5 p-4">
        <Navbar />
        <WrappedComponent {...props} />
      </div>
    </div>
  );
};

export default WithSidebar;

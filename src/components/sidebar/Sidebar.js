import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      console.log("logout");
      const token = Cookies.get("token");
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data.data;
      Cookies.remove("token");
      window.location.reload();
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = [
    {
      to: "/dashboard",
      name: "Overview",
    },
    {
      to: "/employees",
      name: "Employee",
    },
    {
      href: "/todo-api",
      name: "Todos",
    },
  ];

  const navsFooter = [
    {
      onClick: () => {},
      name: "Help",
    },
    {
      onClick: () => {},
      name: "Settings",
    },
    {
      onClick: handleLogout,
      name: "Logout",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <button
        className="p-2 bg-gray-100 rounded-md sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {/* Sidebar */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:block top-0 left-0 w-full sm:w-80 h-full border-r bg-white space-y-8`}
      >
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center px-8">
            <a href="javascript:void(0)" className="flex-none">
              <img
                src="asset/images/images-logo.png"
                width={140}
                className="mx-auto"
              />
            </a>
          </div>
          <div className="flex-1 flex flex-col mt-4 h-full overflow-auto">
            <ul className="px-4 text-md font-bold flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-300 duration-150"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-100 duration-150"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-4 pb-4 text-md font-bold">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <span
                      onClick={item?.onClick}
                      className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-100 duration-150 cursor-pointer"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="py-4 px-4 border-t">
                <div className="flex items-center gap-x-4">
                  <img src="" className="w-12 h-12 rounded-full" />
                  <div>
                    <span className="block text-gray-700 text-sm font-semibold">
                      ADMIN
                    </span>
                    <Link
                      to={"/user-profile"}
                      className="block mt-px text-gray-600 hover:text-indigo-600 hover:bg-gray-200 text-xs"
                    >
                      View profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

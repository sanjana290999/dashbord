import React, { useState } from "react";
import uuid from "react-uuid";
import Data from "../data/Data.json";
import AddEmployeeForm from "./AddEmployeeForm";
function EmployeeList() {
  const [employeeData, setEmployeeData] = useState(Data);
  const [editData, setEditData] = useState({});

  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const handleDelete = (id) => {
    const employDataDelete = employeeData.filter((elem) => elem.id !== id);
    setEmployeeData(employDataDelete);
  };
  const handleEdit = (elem) => {
    setEditData(elem);
    setVisible(true);
  };

  return (
    <div className="flex flex-col  w-full items-center justify-center mt-10">
      {visible && (
        <AddEmployeeForm
          employeeData={employeeData}
          onClose={onClose}
          setEmployeeData={setEmployeeData}
          editData={editData}
          setEditData={setEditData}
        />
      )}
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setVisible(true)}
      >
        {" "}
        ADD EMPLOYEE
      </button>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 mt-10  shadow-xl ">
              <thead className="bg-gray-50">
                <tr className=" ">
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xl font-bold text-gray-700 uppercase tracking-wider border border-gray-300 "
                  >
                    Sr. no
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xl font-bold text-gray-700 uppercase tracking-wider border border-gray-300 "
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xl font-bold text-gray-700 uppercase tracking-wider border border-gray-300 "
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xl font-bold text-gray-700 uppercase tracking-wider border border-gray-300"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xl font-bold text-gray-700 uppercase tracking-wider border border-gray-300"
                  >
                    Job Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xl font-bold text-gray-700 uppercase tracking-wider border border-gray-300"
                  >
                    Payment
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xl font-bold text-gray-700 uppercase tracking-wider border border-gray-300"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employeeData &&
                  employeeData.map((elem) => (
                    <tr key={elem.id}>
                      <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">
                        {elem.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">
                        {elem.first_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">
                        {elem.last_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">
                        {elem.age}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">
                        {elem.job_title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-gray-300 text-center">
                        {elem.salary}
                      </td>
                      <td>
                        <button
                          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 ml-2 rounded"
                          onClick={() => handleEdit(elem)}
                        >
                          {" "}
                          Edit
                        </button>
                        <button
                          className=" bg-red-500 hover:bg-blue-700 text-white font-bold p-2 ml-2  rounded"
                          onClick={() => handleDelete(elem.id)}
                        >
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;

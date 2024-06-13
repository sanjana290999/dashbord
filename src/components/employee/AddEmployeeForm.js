import { isEmpty } from "lodash";
import { useState } from "react";
import uuid from "react-uuid";
function AddEmployeeForm({
  employeeData,
  setEmployeeData,
  onClose,
  editData,
  setEditData,
}) {
  const [formData, setFormData] = useState(
    !isEmpty(editData)
      ? editData
      : {
          first_name: "",
          last_name: "",
          age: "",
          job_title: "",
          salary: "",
        }
  );

  const handleChange = (e) => {
    const value = e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };
  const handleSubmite = (e) => {
    e.preventDefault();
    if (isEmpty(editData)) {
      if (formData) {
        const newEmployeeData = {
          id: uuid(),
          ...formData,
        };
        //   console.log({ newEmployeeData });
        setEmployeeData([...employeeData]);
        console.log({ employeeData });
      }
    } else {
      let index = employeeData.findIndex((elem) => elem.id == editData.id);
      let newArray = employeeData;
      newArray[index] = formData;
      setEmployeeData(newArray);
      setEditData({});
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add Employee</h2>
        <form onSubmit={handleSubmite}>
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="enter your first name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="enter your last name"
              required
              value={formData.last_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="enter your age"
              required
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="employ_title"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
            </label>
            <input
              type="text"
              id="job_title"
              name="job_title"
              placeholder="enter your job title"
              required
              value={formData.job_title}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700"
            >
              Salary
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              placeholder="enter your monthaly salary"
              required
              value={formData.salary}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {!isEmpty(editData) ? "update" : "save"}
            </button>
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
              
              "
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployeeForm;

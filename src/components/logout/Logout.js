import axios from "axios";

function Logout() {
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/logout`
      );
      const data = response.data.data;
      console.log({ data });
    } catch (error) {}
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Logout;

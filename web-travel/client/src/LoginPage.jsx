// import { useState, useEffect } from "react";
import Login from "./components/LoginForm";

function LoginPage() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/api/users");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setUsers(JSON.stringify(data));
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // console.log(users);
  return (
    <>
      <Login />
    </>
  );
}

export default LoginPage;

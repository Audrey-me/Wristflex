import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const id = user._id;
    console.log(id)
    // Fetch user data
    fetch(`http://localhost:5000/api/wristflex/me?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        const user = data.user;
        setFirstName(user.firstname);
        setEmail(user.email);
        setLastName(user.lastname);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user._id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const id = user._id;
    // Update user data
    fetch(`http://localhost:5000/api/wristflex/update?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email
      }),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("User information updated successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred while updating user information");
      });
  };
  return (
    <div className="mx-auto">
      <div className="px-12 flex flex-col justify-center  mt-12">
        <h1 className="font-gilmerbold md:text-[25px]">Edit Account</h1>
        <form className="font-gilmermedium  mx-auto" onSubmit={handleUpdate}>
          <div className="flex md:flex-row flex-col mt-6 gap-[36px] items-center">
            <div className="text-start  flex flex-col">
              <label>FirstName</label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="md:w-[500px] w-[320px] focus:outline-none border border-solid py-3 mt-2 px-4"
              />
            </div>
            <div className="text-start  flex flex-col">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="md:w-[500px] w-[320px] focus:outline-none border border-solid py-3 mt-2 px-4"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-[36px] md:mt-6 items-center ">
            <div className="text-start md:mt-0 mt-4 flex flex-col">
              <label>Lastname</label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="md:w-[500px] w-[320px] focus:outline-none border border-solid py-3 mt-2 px-4"
              />
            </div>
          </div>

          <button
            type="submit"
            className=" focus:outline-none border border-solid bg-[#a67a68] text-white py-3 mt-8 px-4"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

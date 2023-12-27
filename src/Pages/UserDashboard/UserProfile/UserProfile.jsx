/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch korbe user details from the backend
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `https://taskflow-server.vercel.app/users?email=${user.email}`
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (user.email) {
      fetchProfile();
    }
  }, [user]);

  // jodi profile na pay tahole load nibe
  if (!profile) {
    return <LoadingSpinner />;
  }

//   const handleProfileEdit = (id) => {
//     console.log(id);
//     // just show id using swal
//     Swal.fire({
//       title: `Profile No. ${id}`,
//       text: "Profile edit page is under construction",
//       icon: "warning",
//     });
//   };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg  ml-10 mb-5">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Profile Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and Other Settings
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <img
              src={user.photoURL}
              alt={profile.useremail}
              className="w-32 h-32 rounded-full"
            />
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user.displayName}
            </dd>
          </div>
          {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Role</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">   {profile.role ? <p className="text-sm text-gray-600">{profile.role}</p> : <p className="text-sm text-gray-600">user</p> } </dd>
      </div> */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user.email}
            </dd>
          </div>
          {/* button action */}
          {/* <button
            className="px-4 py-2 text-sm font-medium text-white bg-green-800 rounded"
          >
           
          </button> */}
        </dl>
      </div>
    </div>
  );
};

export default UserProfile;

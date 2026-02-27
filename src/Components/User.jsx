import React from 'react';
import { useEffect, useState } from "react";
import { CgProfile } from 'react-icons/cg';
import { FiPlus } from 'react-icons/fi';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://task-api-eight-flax.vercel.app/api/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error shadow-lg">
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6">
      <div className='flex items-center justify-between mb-6'>
        <h2 className="text-2xl font-semibold text-gray-800">
          All Users
        </h2>

        <button className="bg-color flex items-center gap-2 px-4 py-4 rounded-full text-white text-md font-medium shadow-md md:px-6 xl:h-12.5">
          <FiPlus size={16} /> Add User
        </button>
      </div>

      <div className="space-y-4 max-h-55 overflow-scroll">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-start rounded-xl">

            <div className='flex items-center gap-4'>
              {/* Profile Img */}
              <div>
                <CgProfile className='text-gray-800 text-5xl' />
              </div>
              {/* Info */}
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{user.name}</h3>
                <p className="text-sm font-semibold opacity-60 text-brand-primary">{user.email}</p>
                <p className="text-xs font-semibold text-gray-800">
                  Joined: {new Date(user.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div>
              <span
                className={`badge ${user.status === "active"
                  ? "bg-success/20 text-success font-semibold capitalize border-transparent rounded-full"
                  : "bg-error/20 text-error font-semibold capitalize border-transparent rounded-full"
                  }`}
              >
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
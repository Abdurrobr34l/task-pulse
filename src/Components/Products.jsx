import React from 'react';
import { useEffect, useState } from "react";
import { CgProfile } from 'react-icons/cg';
import { FiPlus } from 'react-icons/fi';

const User = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://task-api-eight-flax.vercel.app/api/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setProducts(data);
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
          All Products
        </h2>

        <button className="bg-color flex items-center gap-2 px-4 py-4 rounded-full text-white text-md font-medium shadow-md md:px-6 xl:h-12.5">
          <FiPlus size={16} /> Add Product
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-start p-4 rounded-xl hover:shadow-md transition">

            <div className='flex items-center gap-6'>
              {/* Profile Img */}
              <div>
                <CgProfile className='text-gray-800 text-5xl' />
              </div>
              {/* Info */}
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                <p className='flex items-center gap-3'>
                  <span className="text-lg font-semibold opacity-60 text-brand-primary">{product.price}</span>
                  <span className="text-md font-bold text-brand-primary capitalize">{product.category}</span>
                </p>
              </div>
            </div>

            <div>
              <span
                className={"badge bg-success/20 text-success font-bold border-transparent rounded-full"}
              >
                Sales: {product.sales}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
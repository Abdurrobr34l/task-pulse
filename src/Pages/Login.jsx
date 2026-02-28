import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const validate = () => {
    let newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      const response = await fetch(
        "https://task-api-eight-flax.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();

      // Save token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      // Redirect
      navigate("/dashboard");

    } catch (error) {
      setErrors({ api: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT SIDE (Image Section) */}
        <div className="relative lg:flex lg:w-1/2">
          {/* Background Image Placeholder */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/dNhqPP5/bg.jpg)",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-10 p-5 flex flex-col justify-between text-white w-full">
            {/* Logo */}
            <div className="flex items-center">
              <img
              src="/logo.png"
              alt="Logo"
              className="w-16 -ml-4"
            />
            <span className="text-2xl font-bold text-gray-800">
                Task Pulse
              </span>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold leading-tight mb-6">
                POWER YOUR <br />
                PRODUCTIVITY <br />
                WITH TASKPULSE
              </h2>
              <p className="text-sm text-gray-200 max-w-sm">
                Access your secure dashboard, visualize real-time data,
                and manage users, products, and analytics effortlessly.
                <br />
                Your productivity hub starts here.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Form Section) */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12">
          <div className="max-w-md mx-auto">

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome Back!
              </h1>
              <p className="text-gray-500 mt-2 text-sm">
                Please enter your details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="user1@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder:text-gray-400 ${errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:ring-[#14532d]"
                    } focus:outline-none focus:ring-2 transition`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="password123"
                  className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder:text-gray-400 ${errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:ring-[#14532d]"
                    } focus:outline-none focus:ring-2 transition`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.password}
                  </p>
                )}
              </div>

              {errors.api && (
                <p className="text-red-500 text-sm text-center">
                  {errors.api}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#14532d] hover:bg-[#0f3d22] text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md disabled:opacity-60"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
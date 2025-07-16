import React, { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roles: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const roles = checked
          ? [...prev.roles, value]
          : prev.roles.filter((role) => role !== value);
        return { ...prev, roles };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login Data:", formData);
      alert("Logged In Successfully!");
    } else {
      console.log("Signup Data:", formData);
      alert("Signed Up Successfully!");
    }
    setFormData({ name: "", email: "", password: "", roles: [] });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 transition-all">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-2 border rounded"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full p-2 border rounded"
          />

          <div className="flex space-x-4">
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                name="roles"
                value="ROLE_ADMIN"
                checked={formData.roles.includes("ROLE_ADMIN")}   // 23EC025 Dharanesh V
                onChange={handleChange}
              />
              <span>Admin</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                name="roles"
                value="ROLE_USER"
                checked={formData.roles.includes("ROLE_USER")}
                onChange={handleChange}
              />
              <span>User</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default App;
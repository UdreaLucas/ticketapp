"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/Users", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col gap-3 w-1/2"
      >
        <h1>Create New User</h1>
        <label>Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          required={true}
          placeholder="Enter your full name"
          value={formData.name}
          className="m-2 bg-slate-400 p-2 rounded-md"
        />
        <label>Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          required={true}
          placeholder="Enter your email"
          value={formData.email}
          className="m-2 bg-slate-400 p-2 rounded-md"
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          required={true}
          placeholder="Enter your password"
          value={formData.password}
          className="m-2 bg-slate-400 p-2 rounded-md"
        />
        <input
          type="submit"
          value={"Create User"}
          className="bg-purple-400 hover:bg-purple-200 text-default-text"
        />
        <p className="text-red-500">{error}</p>
      </form>
    </div>
  );
};

export default UserForm;

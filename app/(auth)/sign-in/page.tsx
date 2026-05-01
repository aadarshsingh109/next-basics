"use client";

import { useState } from "react";
import Link from "next/link";
import AuthCard from "@/components/authCard";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Sign in with:", {
        ...formData,
        rememberMe,
      });
      alert("Sign in successful!");
    } else {
      setErrors(newErrors);
    }
  };

  const fields = [
    {
      name: "email",
      type: "email" as const,
      label: "Email",
      placeholder: "john@example.com",
      value: formData.email,
      error: errors.email,
      onChange: handleChange,
    },
    {
      name: "password",
      type: "password" as const,
      label: "Password",
      placeholder: "••••••••",
      value: formData.password,
      error: errors.password,
      onChange: handleChange,
    },
  ];

  const extraContent = (
    <div className="flex items-center justify-between">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
        />
        <span className="ml-2 text-sm text-gray-700 cursor-pointer">
          Remember me
        </span>
      </label>
      <Link href="#" className="text-sm text-blue-600 hover:underline">
        Forgot password?
      </Link>
    </div>
  );

  return (
    <AuthCard
      title="Sign In"
      subtitle="Welcome back! Sign in to your account"
      fields={fields}
      buttonText="Sign In"
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Register here"
      onSubmit={handleSubmit}
      extraContent={extraContent}
    />
  );
};

export default SignIn;

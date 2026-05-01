"use client";

import { useState } from "react";
import AuthCard from "@/components/authCard";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Registration successful!");
    } else {
      setErrors(newErrors);
    }
  };

  const fields = [
    {
      name: "name",
      type: "text" as const,
      label: "Full Name",
      placeholder: "John Doe",
      value: formData.name,
      error: errors.name,
      onChange: handleChange,
    },
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
    {
      name: "confirmPassword",
      type: "password" as const,
      label: "Confirm Password",
      placeholder: "••••••••",
      value: formData.confirmPassword,
      error: errors.confirmPassword,
      onChange: handleChange,
    },
  ];

  return (
    <AuthCard
      title="Register"
      subtitle="Create an account to get started"
      fields={fields}
      buttonText="Create Account"
      footerText="Already have an account?"
      footerLink="/sign-in"
      footerLinkText="Sign in"
      onSubmit={handleSubmit}
    />
  );
};

export default Register;

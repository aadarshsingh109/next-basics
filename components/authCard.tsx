"use client";

import Link from "next/link";
import React from "react";

interface FormField {
  name: string;
  type: "text" | "email" | "password";
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface AuthCardProps {
  title: string;
  subtitle: string;
  fields: FormField[];
  buttonText: string;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  extraContent?: React.ReactNode;
}

const AuthCard = ({
  title,
  subtitle,
  fields,
  buttonText,
  footerText,
  footerLink,
  footerLinkText,
  onSubmit,
  extraContent,
}: AuthCardProps) => {
  return (
    <div className="w-full max-w-md mx-auto py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{title}</h1>
        <p className="text-gray-600 mb-8">{subtitle}</p>

        <form onSubmit={onSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  field.error
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder={field.placeholder}
              />
              {field.error && (
                <p className="text-red-500 text-sm mt-1">{field.error}</p>
              )}
            </div>
          ))}

          {extraContent && <div>{extraContent}</div>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {buttonText}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {footerText}{" "}
          <Link
            href={footerLink}
            className="text-blue-600 hover:underline font-medium"
          >
            {footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthCard;

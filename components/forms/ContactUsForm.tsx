"use client";

import React from "react";
import Form from "./Form";
import { useContact } from "@/hooks";
import { IoMdMail } from "react-icons/io";


export default function ContactUsForm() {
  const { name, email, message, onChange, onSubmit, isLoading } = useContact();
  const config = [
    {
      type: "text",
      labelText: "name",
      labelId: "name",
      value: name,
      required: true,
    },
    {
      type: "email",
      labelText: "email",
      labelId: "email",
      value: email,
      required: true,
    },
    {
      type: "text",
      labelText: "message",
      labelId: "message",
      value: message,
      required: true,
      isTextArea: true,
    },
  ];
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 max-w-xl mx-auto bg-white rounded-md mt-6 border-3">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <IoMdMail className="mx-auto h-10 w-auto text-indigo-600" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Contact Us
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
        <Form
          isLoading={isLoading}
          onChange={onChange}
          onSubmit={onSubmit}
          config={config}
          btnText="contact"
        />
      </div>
    </div>
  );
}

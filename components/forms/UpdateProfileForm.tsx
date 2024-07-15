'use client'

import { useUpdateProfile } from "@/hooks";
import { Form } from "@/components/forms";

export default function UpdateProfileForm() {
  const {
    name,
    introduction,
    avatar,
    onChange,
    onSubmit,
    isLoading,
  } = useUpdateProfile();

  const config = [
    {
      labelText: "Avatar",
      labelId: "avatar",
      type: "file",
      value: avatar,
      required: false,
    },
    {
      labelText: "Name",
      labelId: "name",
      type: "text",
      value: name,
      required: false,
    },
    {
      labelText: "BIO",
      labelId: "introduction",
      value: introduction,
      type: "text",
      required: false,
      isTextArea: true,
    },
  ];

  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="change"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
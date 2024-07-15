'use client';

import { useLogin } from "@/hooks";
import { Form } from "@/components/forms";

export default function LoginForm() {
  const { email, password,onChange, onSubmit, isLoading } = useLogin();
  const config = [
    {
      labelText: "Email",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "Password",
      labelId: "password",
      type: "password",
      value: password,
      link:{
        linkText:'Forgot password?',
        linkUrl:'/password-reset'
      },
      required: true,
    },
  ];
    return(
        <Form 
        config={config}
        isLoading={isLoading}
        btnText='Login'
        onChange={onChange}
        onSubmit= {onSubmit}
        />
    )
}
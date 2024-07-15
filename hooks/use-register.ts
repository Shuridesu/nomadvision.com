import { useState, ChangeEvent, FormEvent } from "react";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function useRegister() {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { name, email, password, re_password } = formData;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({ name, email, password, re_password })
      .unwrap()
      .then(() => {
        toast.success("Please check your email to verify your account");
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("failed to register account please try again");
      });
  };

  return {
    name,
    email,
    password,
    re_password,
    onChange,
    onSubmit,
    isLoading,
  };
}
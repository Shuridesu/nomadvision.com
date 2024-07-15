import { useState, ChangeEvent, FormEvent } from "react";
import { useContactUsMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";


export default function useContact() {
  const [sendEmail, { isLoading }] = useContactUsMutation({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name,email,message } = formData;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail({ name, email, message })
      .unwrap()
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Successfully commented");
      })
      .catch(() => {
        toast.error("Failed to contact, please try again");
      });
  };

  return {
    name,
    email,
    message,
    onChange,
    onSubmit,
    isLoading,
  };
}

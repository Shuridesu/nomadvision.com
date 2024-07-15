import { useState, ChangeEvent, FormEvent } from "react";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";

export default function useLogin() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const pathName = usePathname();

  const { email, password } = formData;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password })
      .unwrap()
      .then(() => {
        dispatch(setAuth());
        toast.success("successfully logged in");

          router.push(pathName);

      })
      .catch(() => {
        toast.error("failed to login please try again");
      })
  };

  return {
    email,
    password,
    onChange,
    onSubmit,
    isLoading,
  };
}

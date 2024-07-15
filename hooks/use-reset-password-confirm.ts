import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function useResetPasswordConfirm(uid: string, token: string) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });
  const { new_password, re_new_password } = formData;
  const [confirmResetPassword, { isLoading }] =
    useResetPasswordConfirmMutation();
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    confirmResetPassword({ new_password, re_new_password, uid, token })
      .unwrap()
      .then(() => {
        toast.success("Password reset successfully");
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Failed to reset password, please try again");
      });
  };

  return {
    new_password,
    re_new_password,
    onChange,
    onSubmit,
    isLoading,
  };
}

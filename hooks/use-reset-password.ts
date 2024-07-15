import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function useResetPassword(){
    const [email, setEmail] = useState("");
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(e.target.value);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetPassword(email)
            .unwrap()
            .then(()=>{
                toast.success('Password reset link sent to your email')
            })
            .catch(()=>{
                toast.error('Failed to reset password, please try again')
            })
    }
    return {
        email,
        onChange,
        onSubmit,
        isLoading,
    }
}
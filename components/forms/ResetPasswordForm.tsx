'use client';

import { useResetPassword } from "@/hooks";
import { Form } from "@/components/forms";

export default function ResetPasswordForm() {
    const {
        email,
        onChange,
        onSubmit,
        isLoading,
    } = useResetPassword();
    const config = [
        {
            labelText: "Email",
            labelId: "email",
            type: "email",
            value: email,
            required: true,
        },
    ];

    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText="Reset Password"
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}
import { useState, ChangeEvent, FormEvent } from "react";
import { useRetrieveUserQuery, useUpdateUserMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function useUpdateProfile() {
  const { data: user } = useRetrieveUserQuery();
  const [update, { isLoading }] = useUpdateUserMutation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    introduction: user?.introduction || "",
    avatar: null as File | null, // avatarをFile型に設定
  });

  const { name, email, introduction, avatar } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "avatar" && files) {
      setFormData({ ...formData, avatar: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    if (!user) return;

    const updateData = new FormData();
    updateData.append("id", user.id.toString());
    updateData.append("name", name);
    updateData.append("email", email);
    updateData.append("introduction", introduction);
    if (avatar) updateData.append("avatar", avatar);

    try {
      await update(updateData).unwrap();
      toast.success("Successfully updated profile");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return {
    name,
    email,
    introduction,
    avatar,
    onChange,
    onSubmit,
    isLoading,
  };
}

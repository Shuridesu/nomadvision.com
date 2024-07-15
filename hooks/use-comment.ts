import { useState, ChangeEvent, FormEvent } from "react";
import { useCreateCommentMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";

interface Props {
  post: string;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>; // setComments を Props に追加
}

export default function useComment({ post, setComments }: Props) {
  const [comment, { isLoading }] = useCreateCommentMutation();
  const [formData, setFormData] = useState({
    content: "",
  });

  const { content } = formData;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    comment({ content, post })
      .unwrap()
      .then((newComment) => {
        setFormData({ content: "" });
        toast.success("Successfully commented");
        setComments((prevComments) => [...prevComments, newComment]); 
      })
      .catch(() => {
        toast.error("Failed to comment, please try again");
      });
  };

  return {
    content,
    onChange,
    onSubmit,
    isLoading,
  };
}

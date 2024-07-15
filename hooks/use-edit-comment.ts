import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useEditCommentMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";

interface Props {
  commentId: number | null;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  initialContent: string;
}

export default function useEditComment({ commentId, setComments, initialContent }: Props) {
  const [editComment, { isLoading: isLoadingEdit }] = useEditCommentMutation();
  const [formData, setFormData] = useState({ editedContent: initialContent });

  useEffect(() => {
    if (initialContent) {
      setFormData({ editedContent: initialContent });
    }
  }, [initialContent]);

  const { editedContent } = formData;
  const onChangeEdit = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ editedContent: e.target.value });
  };

  const onSubmitEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (commentId === null) {
      toast.error("There are no comments to edit");
      return;
    }
    editComment({ commentId, content: editedContent })
      .unwrap()
      .then((updatedComment) => {
        setFormData({ editedContent: "" });
        toast.success("Successfully edited comment");
        setComments((prevComments) =>
          prevComments.map((c) => (c.id === commentId ? updatedComment : c))
        );
      })
      .catch(() => {
        toast.error("Failed to edit comment, please try again");
      });
  };

  return {
    editedContent,
    onChangeEdit,
    onSubmitEdit,
    isLoadingEdit,
  };
}

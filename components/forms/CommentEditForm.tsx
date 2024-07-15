import React from 'react'
import Form from './Form'

interface Props {
    contentEdit: string;
    onChangeEdit: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isLoadingEdit: boolean;
    onSubmitEdit: (e: React.FormEvent<HTMLFormElement>) => void;
    initialContent: string;
}

export default function CommentEditForm({contentEdit,onChangeEdit,onSubmitEdit,isLoadingEdit,initialContent}:Props) {
    const config = [
        {
          labelText: "Content",
          labelId: "content",
          type: "text",
          value: contentEdit,
          required: true,
          isTextArea: true,
        },
      ];
  return (
    <div>
        <Form
        config={config}
        isLoading={isLoadingEdit}
        btnText="Edit"
        onChange={onChangeEdit}
        onSubmit={onSubmitEdit}
        />
    </div>
  )
}

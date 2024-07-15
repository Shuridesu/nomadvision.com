import React from 'react'
import Form from './Form'

interface Props {
    postSlug: string;
    content: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isLoading: boolean;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CommentForm({ content,onChange,onSubmit,isLoading }:Props) {
    // comment create form
  const config = [
    {
      labelText: "Content",
      labelId: "content",
      type: "text",
      value: content,
      required: true,
      isTextArea: true,
    },
  ];
  return (
    <div>
        <Form
          config={config}
          isLoading={isLoading}
          btnText="Comment"
          onChange={onChange}
          onSubmit={onSubmit}
        />
    </div>
  )
}

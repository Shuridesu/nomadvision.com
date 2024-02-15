import { updateCommentApi } from '@/actions/comment';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';

interface EditCommentFormProps {
    accessToken: string;
    commentId: number;
    initialContent: string;
    }

const EditCommentForm = ({ accessToken, commentId, initialContent }:EditCommentFormProps) => {
  const [content, setContent] = useState(initialContent);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    const result = await updateCommentApi({ accessToken, commentId, content });
    setIsSubmitting(false);

    if (!result.success) {
      setError('Failed to update the comment.');
      return;
    }

    setSuccess(true);
    setContent('');
    // Optionally, add logic to close the form or inform the user of success
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Edit your comment"
        disabled={isSubmitting}
      />
      <Button type="submit" disabled={isSubmitting}>Update Comment</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Comment updated successfully!</p>}
    </form>
  );
};

export default EditCommentForm;

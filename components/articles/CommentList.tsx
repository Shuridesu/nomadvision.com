"use client";

import { useComment, useEditComment } from "@/hooks";
import {
  useDeleteCommentMutation,
  useGetCommentListQuery,
  useRetrieveUserQuery,
} from "@/redux/features/authApiSlice";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { CommentEditForm, CommentForm } from "../forms";
import { toast } from "react-toastify";
import { CgMoreR } from "react-icons/cg";
import {format} from 'date-fns';
import { formatDistanceToNow } from 'date-fns';

export default function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [editMode,setEditMode] = useState(false);
  const [commentId,setCommentId] = useState<number | null>(null);
  const [initialContent, setInitialContent] = useState("");
  const [showMenu, setShowMenu] = useState<{[key:number]:boolean}>({});
  const menuRef = useRef(null);

  const toggleMenu = (commentId: number) => {
    setShowMenu(prevState => {
      return {
        ...Object.keys(prevState).reduce((acc:any, key:any) => {
          acc[key] = false;
          return acc;
        }, {}),
        [commentId]: !prevState[commentId]
      };
    });
  };

  const slug = usePathname();
  const postSlug = slug.split("/")[1];
  const { data: comment, isLoading: isLoadingComment, isFetching } = useGetCommentListQuery(postSlug);

  useEffect(() => {
    if (comment) {
      setComments(comment);
    }
  }, [comment, isLoadingComment, isFetching, postSlug]);

  const { data: user, isLoading: isUserLoading } = useRetrieveUserQuery();

  // comment create
  const { content, onChange, onSubmit, isLoading } = useComment({
    post: postSlug,
    setComments,
  });

  //edit comment
  const editButton = (commentId:number)=>{
    setEditMode(true);
    setCommentId(commentId);
    const commentToEdit = comments.find((c) => c.id === commentId);
    setInitialContent(commentToEdit ? commentToEdit.content : "");
  }

  const { editedContent, onChangeEdit, onSubmitEdit, isLoadingEdit } = useEditComment({
    commentId,
    setComments,
    initialContent: initialContent,
  });

  // comment delete
  const [deleteComment] = useDeleteCommentMutation();

  const deleteFunction = (commentId: number) => {
    deleteComment(commentId)
      .unwrap()
      .then(() => {
        toast.success("Successfully deleted");
        setComments((prevComments) => prevComments.filter((c) => c.id !== commentId));
      })
      .catch(() => {
        toast.error("Failed to delete, please try again");
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-100 p-3 my-3">
          <div className="flex gap-3">
            <img
              src={comment.user.avatar}
              alt={comment.user.name}
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-500">
                {comment.user.name}
              </h3>
              <p className="pt-2">{comment.content}</p>
              {user.id === comment.user.id && (
                <>
                  <div className = "flex items-center gap-2">
                  <CgMoreR className={`w-5 h-5 ${showMenu[comment.id] ?"text-blue-400":"text-gray-400"}  cursor-pointer hover:text-blue-400 transition-all duration-100 ease-in-out`} onClick = {()=>{toggleMenu(comment.id)}}/>
                    <p className = "text-gray-400 text-sm">
                    {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
                    </p>
                  </div>
                  <div className = {`${showMenu[comment.id] ? "flex":"hidden"} gap-1 mt-2 text-sm`} ref={menuRef} >
                    <button
                      onClick={() => editButton(comment.id)}
                      className="text-blue-500 border-2 border-blue-300 px-1 rounded-md hover:border-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteFunction(comment.id)}
                      className="text-red-500 border-2 border-blue-300 px-1 rounded-md hover:border-blue-500"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
      {editMode ? (
        <div>
          <CommentEditForm
            contentEdit={editedContent}
            onChangeEdit={onChangeEdit}
            onSubmitEdit={onSubmitEdit}
            isLoadingEdit={isLoadingEdit}
            initialContent={initialContent}
          />
          <button
            onClick={() => {
              setEditMode(!editMode);
            }}
            className="flex w-full mt-2 justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            CANCEL
          </button>
        </div>
      ) : (
        <CommentForm
          postSlug={postSlug}
          content={content}
          onChange={onChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

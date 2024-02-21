"use client";

import React, { useEffect, useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { CommentList, CommentType, createComment, deleteCommentApi, updateCommentApi } from "@/actions/comment";
import { UserType } from "@/lib/nextauth";
import toast from "react-hot-toast";
import Image from "next/image";

import { useClickAway } from "react-use";

import CommentToggleIcon from "@/app/Icons/CommentToggleIcon";
import Loading from "@/components/Loading";


interface CommentFormProps {
  user: UserType;
  postSlug: string;
}

interface CommentDeleteProps {
  comment: CommentType;
  accessToken: string;
  user: UserType;
  commentId: number;
}

interface CommentMenus {
  [key: number]: boolean;
}


export default function CommentForm({ user, postSlug }: CommentFormProps) {
  const form = useForm({
    defaultValues: {
      comment: "",
    },
  });

  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [commentMenus, setCommentMenus] = useState<CommentMenus>({});

  const toggleCommentMenu = (commentId: number) => {
    setCommentMenus(prevState => {
      return {
        ...Object.keys(prevState).reduce((acc:any, key:any) => {
          acc[key] = false; // まず全てを閉じる
          return acc;
        }, {}),
        [commentId]: !prevState[commentId] // 指定されたコメントの状態を反転
      };
    });
  };

  const toggleOpen = () => setOpen(!open);


  const ref = useRef(null);
  
  useClickAway(ref, () => {
    setOpen(false);
  });

  const menuRef = useRef(null);

  useClickAway(menuRef, (event) => {
    const target = event.target as HTMLElement;
    const menu = target.closest(".menu");
    if(!menu){
      setCommentMenus({});
    }
  });

  const deleteComment = async ({ user, comment }: { user: UserType; comment: CommentType; }) => {
    try {
      // 修正: deleteCommentApi を呼び出すように変更
      const res = await deleteCommentApi({
        accessToken: user.accessToken,
        commentId: comment.id,
      });
  
      if (!res.success) {
        toast.error("Delete failed");
      } else {
        toast.success("Delete success");
        // コメントIDを使ってフィルタリングするための修正
        setComments((prevComments) => prevComments.filter((c) => c.id !== comment.id));
      }
    } catch (error) {
      toast.error("Delete failed");
    }
  };


  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const response = await CommentList(postSlug);
      if (response.success) {
        setComments(response.comments);
      } else {
        toast.error("Failed to load comments.");
      }
      setLoading(false);
    };
    fetchComments();
  }, [postSlug]);


  if (loading) {
    return (
      <Loading/>
    );
  }

  const toggleEditMode = (comment: CommentType) => {
    setCommentMenus({});
    setEditingCommentId(comment.id);
    form.setValue("comment", comment.content);
    setOpen(true);
  };

  

  const onSubmit = async (data: any) => {
    if (editingCommentId) {
      // 編集モードの場合
      const res = await updateCommentApi({
        accessToken: user.accessToken,
        commentId: editingCommentId,
        content: data.comment,
      });

      if (!res.success) {
        toast.error("Update failed");
      } else {
        toast.success("Update success");
        setComments(comments.map(comment => 
          comment.id === editingCommentId ? { ...comment, content: data.comment } : comment
        ));
        setEditingCommentId(null); // 編集モードを解除
      }
    } else {
      // 新規コメントの場合
      const res = await createComment({
        accessToken: user.accessToken,
        content: data.comment,
        postSlug: postSlug,
      });

      if (!res.success) {
        toast.error("Comment failed");
      } else {
        toast.success("Comment success");
        setComments([...comments, res.comment]);
      }
    }
    form.reset(); // フォームをリセット
  };

  const cancelEditMode = () => {
    setEditingCommentId(null);
    form.reset();
    setOpen(false);
  };
    
    
  
  return (
    <div className="w-full lg:w-3/5 mx-auto px-10 py-10">
      <div className="flex items-center justify-between ">
        <div className="font-bold text-2xl ms-2">MEMBER DISCUSSION</div>
        <div className="text-gray-400 me-2">comments {comments.length}</div>
      </div>
      <div>
        <div className="mt-10">
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="mb-4 relative">
                  <div className="flex items-start space-x-3">
                    <Image
                      src={comment.user.avatar || "/default.png"}
                      alt="User avatar"
                      className="w-10 h-10 rounded-full border"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="font-bold mb-1 z-0">{comment.user.name}</p>
                      <div className="flex-col items-end gap-4">
                        <p>{comment.content}</p>
                        <p className="text-sm text-gray-400">
                          {comment.created_at}
                        </p>
                      </div>
                      {user.uid === comment.user.uid && (
                        <>
                          <div
                            onClick={() => toggleCommentMenu(comment.id)}
                            className="menu w-max cursor-pointer"
                          >
                            <CommentToggleIcon />
                          </div>
                          <div
                            className={`w-max z-50 bg-white h-10 shadow-md px-2 absolute items-center justify-center gap-1 ${
                              commentMenus[comment.id] ? "flex" : "hidden"
                            }`}
                            ref={menuRef}
                          >
                            <Button
                              className="menu bg-gray-200 hover:bg-gray-400 h-5 w-14"
                              onClick={() => {
                                toggleEditMode(comment);
                              }}
                            >
                              edit
                            </Button>
                            <Button
                              className="menu bg-red-500 hover:bg-red-400 h-5 w-14"
                              onClick={() => {
                                deleteComment({ user, comment });
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {editingCommentId === comment.id && (
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex items-center mt-6"
                        ref={ref}
                      >
                        <FormField
                          name="comment"
                          control={form.control}
                          render={({ field }) => (
                            <div className="relative w-[600px]">
                              <Textarea
                                {...field}
                                placeholder="comment.."
                                className="item focus-visible:ring-3 text-lg drop-shadow-md min-h-[10px] duration-300 transition-all transform h-44"
                              />
                              {editingCommentId ? (
                                <>
                                  <Button
                                    className="item absolute bottom-2 right-36 bg-transparent text-gray-400"
                                    onClick={cancelEditMode}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    type="submit"
                                    className="item absolute bottom-2 right-2 ms-2 text-bold text-white bg-sky-900 text-md hover:bg-sky-900 px-3 duration-300"
                                  >
                                    Edit Comment
                                  </Button>
                                </>
                              ) : (
                                <Button
                                  type="submit"
                                  className="item absolute bottom-2 right-2 ms-2 text-bold text-white bg-sky-900 text-md hover:bg-sky-900 px-3 duration-300"
                                >
                                  Add comment
                                </Button>
                              )}
                            </div>
                          )}
                        />
                      </form>
                    </Form>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex justify-center items-center mt-20">
              <div className="font-semibold text-gray-400 text-lg underline">
                No comments yet.
              </div>
            </div>
          )}
        </div>
        {!editingCommentId && (
          <div className="flex justify-center space-x-4 mt-20 w-full">
            <Image
              src={user.avatar || "/default.png"}
              alt="User avatar"
              className="rounded-full border w-10 h-10 sm:w-16 sm:h-16"
              width={64}
              height={64}
            />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex items-center"
                ref={ref}
              >
                <FormField
                  name="comment"
                  control={form.control}
                  render={({ field }) => (
                    <div className="relative">
                      <Textarea
                        {...field}
                        placeholder="comment.."
                        className={`item w-60 sm:w-[400px] md:w-[550px] focus-visible:ring-3 text-lg drop-shadow-md min-h-[10px] duration-300 transition-all ${
                          open ? " h-44" : "h-14"
                        }`}
                        onClick={(e) => {
                          if (!open) {
                            toggleOpen();
                          }
                        }}
                      />
                      {editingCommentId ? (
                        <>
                          <Button
                            className="item absolute bottom-2 right-36 bg-transparent text-gray-400"
                            onClick={cancelEditMode}
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            className="item absolute bottom-2 right-2 ms-2 text-bold text-white bg-sky-900 text-xs hover:bg-sky-900 px-2 duration-300"
                          >
                            Edit Comment
                          </Button>
                        </>
                      ) : (
                        <Button
                          type="submit"
                          className="item absolute bottom-2 right-2 ms-2 text-bold text-white bg-sky-900 text-xs hover:bg-sky-900 px-2 duration-300 h-9 lg:text-lg lg:h-10 lg:px-3"
                        >
                          Add comment
                        </Button>
                      )}
                    </div>
                  )}
                />
              </form>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}





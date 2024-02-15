"use server"

import { UserType } from "@/lib/nextauth"

const fetchAPI = async (url: string, options: RequestInit) => {
    const apiUrl = process.env.API_URL
  
    if (!apiUrl) {
      return { success: false, error: "No API" }
    }
  
    try {
      const response = await fetch(`${apiUrl}${url}`, options)
  
      if (!response.ok) {
        return { success: false, error: "failed to fetch" }
      }
  
      // if response is json, return json data
      const contentType = response.headers.get("Content-Type")
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json()
        return { success: true, data }
      }
  
      // if response is not json, return response
      return { success: true }
    } catch (error) {
      console.error(error)
      return { success: false, error: "network error" }
    }
  }

  interface CommentProps {
    content: string
    postSlug: string
    accessToken: string
    }

    // create comment
    export const createComment = async ({
        accessToken,
        content,
        postSlug,
      }: CommentProps) => {
        const body = JSON.stringify({
          content: content,
          post: postSlug,
        })
      
        const options = {
          method: "POST",
          headers: {
            Authorization: `JWT ${accessToken}`,
            "Content-Type": "application/json",
          },
          body,
        }
      
        
        const result = await fetchAPI("/comments/", options)
      
        if (!result.success) {
          console.error(result.error)
          return { success: false, comment: null }
        }
      
        const comment = await result.data
      
        return { success: true, comment }
      }



      export interface CommentType {
        uid: string
        user: UserType
        content: string
        created_at: string
        id: number
      }

      export const CommentList = async (postSlug: string) => {
        const options: RequestInit = {
          method: "GET",
          cache: "no-store",
        }
      
        const result = await fetchAPI(`/comments/article-comments/${postSlug}`, options)
      
        if (!result.success) {
          console.error(result.error)
          return { success: false, comments: [] }
        }
      
        const comments: CommentType[] = result.data
      
        return { success: true, comments }
      }

      //delete comment
      interface DeleteCommentProps {
        accessToken: string
        commentId: number
      }

      export const deleteCommentApi = async ({ accessToken, commentId }: DeleteCommentProps) => {
        const options = {
          method: "DELETE",
          headers: {
            Authorization: `JWT ${accessToken}`,
          },
        }

        const result = await fetchAPI(`/comments/${commentId}/`, options)

        if (!result.success) {
          console.error(result.error)
          return { success: false }
        }

        return { success: true }

      }

      //update comment
      interface UpdateCommentProps {
        accessToken: string
        commentId: number
        content: string
      }

      export const updateCommentApi = async ({ accessToken, commentId, content }: UpdateCommentProps) => {
        const body = JSON.stringify({
          content: content,
        })

        const options = {
          method: "PATCH",
          headers: {
            Authorization: `JWT ${accessToken}`,
            "Content-Type": "application/json",
          },
          body,
        }

        const result = await fetchAPI(`/comments/${commentId}/`, options)

        if (!result.success) {
          console.error(result.error)
          return { success: false }
        }

        return { success: true }
      }



    
      
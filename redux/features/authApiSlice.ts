import { apiSlice } from '../services/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // user authentication endpoints
    retrieveUser: builder.query<User, void>({
      query: () => "/users/me/",
    }),
    updateUser: builder.mutation<User, FormData>({
      query: (formData) => ({
        url: `/users/${formData.get("id")}/`,
        method: "PATCH",
        body: formData,
      }),
    }),

    socialAuthenticate: builder.mutation<CreateUserResponse, SocialAuthArgs>({
      query: ({ provider, state, code }) => ({
        url: `/o/${provider}/?state=${encodeURIComponent(
          state
        )}&code=${encodeURIComponent(code)}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/jwt/create/",
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: ({ name, email, password, re_password }) => ({
        url: "/users/",
        method: "POST",
        body: { name, email, password, re_password },
      }),
    }),
    verify: builder.mutation({
      query: () => ({
        url: "/jwt/verify/",
        method: "POST",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout/",
        method: "POST",
      }),
    }),
    activation: builder.mutation({
      query: ({ uid, token }) => ({
        url: "/users/activation/",
        method: "POST",
        body: { uid, token },
      }),
    }),
    resetPassword: builder.mutation({
      query: (email) => ({
        url: "/users/reset_password/",
        method: "POST",
        body: { email },
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: ({ uid, token, new_password, re_new_password }) => ({
        url: "/users/reset_password_confirm/",
        method: "POST",
        body: { uid, token, new_password, re_new_password },
      }),
    }),
    // get posts endpoints
    getPosts: builder.query<Post[], void>({
      query: () => "/posts/latest/",
    }),
    getPostsRecommended: builder.query<Post[], void>({
      query: () => "/posts/recommended/",
    }),
    getPrimaryCategoryPosts: builder.query<Post[], string>({
      query: (primaryCategory) => `/posts/${primaryCategory}/`,
    }),
    getCategoryPosts: builder.query<Post[], string>({
      query: (category) => `/tag/${category}/`,
    }),
    getPostsBySearch: builder.query<PostList, string>({
      query: (search) => `/search/?q=${search}`,
    }),
    getPostDetail: builder.query<PostDetail, string>({
      query: (slug) => `/posts/${slug}/`,
    }),
    getCommentList: builder.query<Comment[], string>({
      query: (slug) => `/comments/article-comments/${slug}/`,
    }),
    createComment: builder.mutation({
      query: ({ content, post }) => ({
        url: "/comments/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          content,
          post,
        },
      }),
    }),
    deleteComment: builder.mutation<void, number>({
      query: (commentId) => ({
        url: `/comments/${commentId}/`,
        method: "DELETE",
      }),
    }),
    editComment: builder.mutation({
      query: ({ content, commentId }) => ({
        url: `/comments/${commentId}/`,
        method: "PATCH",
        body: { content },
      }),
    }),
    contactUs: builder.mutation({
      query: ({ name, email, message }) => ({
        url: "/send-email/",
        method: "POST",
        body: { name, email, message },
      }),
    }),
  }),
});

export const {
	useRetrieveUserQuery,
	useUpdateUserMutation,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useLogoutMutation,
	useActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
	useGetPostsQuery,
	useGetPrimaryCategoryPostsQuery,
  useGetCategoryPostsQuery,
  useGetPostsBySearchQuery,
  useGetPostDetailQuery,
  useGetPostsRecommendedQuery,
  useGetCommentListQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
  useContactUsMutation,
} = authApiSlice;


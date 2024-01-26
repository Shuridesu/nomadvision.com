"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { resetPassword } from "@/actions/user"
import toast from "react-hot-toast"
import Link from "next/link"

// 入力データの検証ルールを定義
const schema = z
  .object({
    password: z.string().min(8, { message: "Input must be at least 8 characters long." }),
    repeatedPassword: z
      .string()
      .min(8, { message: "Input must be at least 8 characters long." }),
  })
  .refine((data) => data.password === data.repeatedPassword, {
    message: "The new password and the confirmation password do not match",
    path: ["repeatedPassword"], // set the path of the error
  })

// define input type
type InputType = z.infer<typeof schema>

interface ResetPasswordProps {
  uid: string
  token: string
}

// password reset
const ResetPassword = ({ uid, token }: ResetPasswordProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isResetPassword, setIsResetPassword] = useState(false)

  // form state
  const form = useForm<InputType>({
    // verify input
    resolver: zodResolver(schema),
    // default value
    defaultValues: {
      password: "",
      repeatedPassword: "",
    },
  })

  // submit
  const onSubmit: SubmitHandler<InputType> = async (data) => {
    setIsLoading(true)

    try {
      // password reset
      const res = await resetPassword({
        uid,
        token,
        newPassword: data.password,
        reNewPassword: data.repeatedPassword,
      })

      if (!res.success) {
        toast.error("failed to reset password")
        return
      }

      setIsResetPassword(true)
    } catch (error) {
      toast.error("failed to reset password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-[400px] m-auto">
      {isResetPassword ? (
        <div className="text-center">
          <div className="text-2xl font-bold mb-10 mt-10">COMPLETE PASSWORD RESET</div>

          <div>Password reset is complete</div>
          <div className="mb-5">Please Login</div>
          <Button asChild className="font-bold bg-sky-900 hover:bg-sky-700">
            <Link href="/login">LOGIN</Link>
          </Button>
        </div>
      ) : (
        <>
          <div className="text-2xl font-bold text-center mb-10 mt-10">
            PASSWORD RESET
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mx-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NEW PASSWORD</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="repeatedPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NEW PASSWORD(confirmation)</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isLoading} type="submit" className="w-full bg-sky-900 hover:bg-sky-700">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                SUBMIT
              </Button>
            </form>
          </Form>
        </>
      )}
    </div>
  )
}

export default ResetPassword
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
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
import { updatePassword } from "@/actions/user"
import { UserType } from "@/lib/nextauth"
import toast from "react-hot-toast"

// define input validation rules
const schema = z
  .object({
    currentPassword: z
      .string()
      .min(3, { message: "Input must be at least 3 characters long." }),
    password: z.string().min(3, { message: "Input must be at least 3 characters long." }),
    repeatedPassword: z
      .string()
      .min(3, { message: "Input must be at least 3 characters long." }),
  })
  .refine((data) => data.password === data.repeatedPassword, {
    message: "The new password and the confirmation password do not match",
    path: ["repeatedPassword"],
  })

// define input type
type InputType = z.infer<typeof schema>

interface PasswordProps {
  user: UserType
}

// update password
const Password = ({ user }: PasswordProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // form state
  const form = useForm<InputType>({
    // verify input
    resolver: zodResolver(schema),
    // default value
    defaultValues: {
      currentPassword: "",
      password: "",
      repeatedPassword: "",
    },
  })

  // submit
  const onSubmit: SubmitHandler<InputType> = async (data) => {
    setIsLoading(true)

    try {
      // update password
      const res = await updatePassword({
        accessToken: user.accessToken,
        currentPassword: data.currentPassword,
        newPassword: data.password,
        reNewPassword: data.repeatedPassword,
      })

      if (!res.success) {
        toast.error("failed to update password")
        return
      }

      toast.success("successfully updated password")
      form.reset()
      router.refresh()
    } catch (error) {
      toast.error("failed to update password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="text-xl font-bold text-center mb-5 mt-10">CHANGE PASSWORD</div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mx-3">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CURRENT PASSWORD</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                <FormLabel>NEW PASSWORD(CONFIRMATION)</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} type="submit" className="w-full bg-sky-900 hover:bg-sky-700">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            CHANGE
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Password
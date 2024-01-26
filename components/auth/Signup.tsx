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
import toast from "react-hot-toast"
import Link from "next/link"
import { temporarySignup } from "@/actions/user"

// rules for input validation
const schema = z.object({
  name: z.string().min(2, { message: "Input must be at least 2 characters long." }),
  email: z.string().email({ message: "The input is not in a valid email format." }),
  password: z.string().min(8, { message: "Input must be at least 8 characters long." }),
})

// input type
type InputType = z.infer<typeof schema>

// provisional registration
const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  // form state
  const form = useForm<InputType>({
    // verify input
    resolver: zodResolver(schema),
    // default value
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // submit
  const onSubmit: SubmitHandler<InputType> = async (data) => {
    setIsLoading(true)

    try {
      //temporary registration
      const res = await temporarySignup({
        name: data.name,
        email: data.email,
        password: data.password,
        rePassword: data.password,
      })

      if (!res.success) {
        toast.error("failed to sign up")
        return
      }

      setIsSignUp(true)
    } catch (error) {
      toast.error("failed to sign up")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-[400px] m-auto">
      {isSignUp ? (
        <>
          <div className="text-2xl font-bold text-center mb-10 mt-10">
            Provisional Registration Complete
          </div>
          <div>
            An email necessary for finalizing your account registration has been
            sent.
            <br />
            Please proceed to the final registration page through the URL
            provided in the email, and complete your registration.
            <br />
            ※If you do not receive the email, there is a possibility that the
            email address entered was incorrect.
            <br />
            Please re-register from the beginning if necessary.
          </div>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold text-center mb-10 mt-10">SIGN UP</div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mx-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NAME</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>MAIL ADDRESS</FormLabel>
                    <FormControl>
                      <Input placeholder="xxxx@gmail.com" {...field} />
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
                    <FormLabel>PASSWORD</FormLabel>
                    <FormControl>
                      <Input type="password" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-sm text-gray-500">
              By signing up, you agree to the Terms of Service and Privacy Policy.
              </div>

              <Button disabled={isLoading} type="submit" className="w-full bg-sky-900 hover:bg-sky-700">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                CREATE ACCOUNT
              </Button>
            </form>
          </Form>

          <div className="text-center mt-5">
            <Link href="/login" className="text-sm text-blue-500">
            Already have an account?
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Signup
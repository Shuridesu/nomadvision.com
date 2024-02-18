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
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import path from "path"


//define input validation rules
const schema = z.object({
  email: z.string().email({ message: "The input is not in a valid email format." }),
  password: z.string().min(8, { message: "Input must be at least 8 characters long." }),
})

//define input type
type InputType = z.infer<typeof schema>

//login
const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const pathName = usePathname()
  // form state
  const form = useForm<InputType>({
    // verify input
    resolver: zodResolver(schema),
    // default value
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // submit
  const onSubmit: SubmitHandler<InputType> = (data) => {
    setIsLoading(true)

    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false, // turn off redirect
    })
      .then((result) => {
        if (result?.error) {
          // login failed
          toast.error("failed to login")
        } else {
          // login success
          if(pathName === "/login"){
            window.location.href = "/"
          }else{
            window.location.href = `${pathName}/`
          }
          
        }
      })
      .catch((error) => {
        toast.error("failed to login")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="max-w-[400px] m-auto">
      <div className="text-2xl font-bold text-center mb-10 mt-10">LOGIN</div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mx-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>MAIL ADDRESS</FormLabel>
                <FormControl>
                  <Input placeholder="xxxx@gmail.com" {...field} className="text-[16px]"/>
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
                  <Input type="password" {...field} className="text-[16px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} type="submit" className="w-full bg-sky-900 hover:bg-sky-700">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            LOGIN
          </Button>
        </form>
      </Form>

      <div className="text-center mt-5">
        <Link href="/reset-password" className="text-sm text-blue-500">
          forgot password?
        </Link>
      </div>

      <div className="text-center mt-2">
        <Link href="/signup" className="text-sm text-blue-500">
            create account
        </Link>
      </div>
    </div>
  )
}

export default Login
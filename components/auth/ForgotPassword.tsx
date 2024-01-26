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
import { forgotPassword } from "@/actions/user"
import toast from "react-hot-toast"

//define input validation rules
const schema = z.object({
  email: z.string().email({ message: "The input is not in a valid email format." }),
})

// define input type
type InputType = z.infer<typeof schema>

// password reset
const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)

  // form state
  const form = useForm<InputType>({
    // verify input
    resolver: zodResolver(schema),
    // default value
    defaultValues: {
      email: "",
    },
  })

  //  submit
  const onSubmit: SubmitHandler<InputType> = async (data) => {
    setIsLoading(true)

    try {
      // password reset
      const res = await forgotPassword(data)

      if (!res.success) {
        toast.error("failed to reset password")
        return
      }

      setIsForgotPassword(true)
    } catch (error) {
      toast.error("failed to reset password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-[400px] m-auto">
      {isForgotPassword ? (
        <>
          <div className="text-2xl font-bold text-center mb-10 mt-10">
          PASSWORD RESET EMAIL SENT
          </div>
          <div className="">
          We have sent you an email containing the necessary instructions for resetting your password. 
            <br />
            Please follow the link provided in the email to access the password reset page and proceed with resetting your password. 
            <br />
            *If you do not receive the email, it is possible that the email address you entered is incorrect.
            <br />
            In such case, kindly go through the password reset process again.Thank you for your attention.
          </div>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold text-center mb-10 mt-10">
            PASSWORD RESET
          </div>

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

export default ForgotPassword
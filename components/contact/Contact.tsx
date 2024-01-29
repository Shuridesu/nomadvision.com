"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { contactUs } from "@/actions/user";
import { UserType } from "@/lib/nextauth";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

interface UserNavigationProps {
  user: UserType;
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await contactUs(values);
      if (response.success) {
        toast.success("Email sent successfully");
      } else {
        toast.error("Error sending email");
      }
      setIsSend(true);
    } catch (error) {
      toast.error("Error sending email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[400px] m-auto">
      {isSend ? (
        <div>
          <h1 className="text-3xl font-bold text-center mt-10">
            Thank you for your message!
          </h1>
          <p className="text-center mt-5">
            We will get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <>
        <div>
          <h1 className="text-3xl font-bold text-center mt-10 mb-10">
            CONTACT US
          </h1>
        </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mx-3"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>YOUR NAME</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} className="text-[16px]"/>
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
                    <FormLabel>EMAIL</FormLabel>
                    <FormControl>
                      <Input placeholder="****@****.com" {...field} className="text-[16px]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CONTENT</FormLabel>
                    <FormControl>
                      <Textarea placeholder="message" {...field}  className="h-32 text-[16px]"/>
                    </FormControl>
                    <FormDescription>This is your message.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-sky-900 hover:bg-sky-700">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit
              </Button>
            </form>
          </Form>
        </>
      )}
    </div>
  );
}

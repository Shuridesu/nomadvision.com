"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Search from "@/app/Icons/Search";
import toast from "react-hot-toast";
import { useClickAway } from "react-use";

export default function SearchForm() {
  const [show, setShow] = useState(false);
  const form = useForm(
    {
        defaultValues: {
          query: ""
        }
      }
  );
  const { reset } = form;
  const router = useRouter();

  const toggleShow = () => {
    if(show){
        reset({query: ""});
    }
    setShow(!show);
  };
  const onSubmit = (data: any) => {
    if(data.query === "") {
      toast.error("Please enter a search term");
      return;
    }
    router.push(`/search?q=${encodeURIComponent(data.query)}`);
    toggleShow();
  };
  
  const ref = React.useRef(null);

  useClickAway(ref, (event) => {
    const target = event.target as HTMLElement;
    if(!target.closest(".menu") && show) {
    toggleShow();
  }})

  

  return (
    <div>
      <div
        onClick={toggleShow}
        className="fixed xl:absolute right-20 sm:right-32 top-8 xl:right-48 cursor-pointer hover:scale-110 duration-300 ease-in-out bg-white px-2 py-2 rounded-lg bg-opacity-40"
      >
        <Search />
      </div>
      <div
        className={`fixed top-0 left-0 z-50 w-full h-full  backdrop-blur-sm bg-black bg-opacity-10 ${
          show ? "block" : "hidden"
        }`}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-3/4 sm:w-1/2 md:w-1/3 mx-auto translate-y-32"
          >
            <FormField
              name="query"
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Search.."
                  className="menu py-8 text-[20px] shadow-md focus-visible:ring-3"
                  ref={ref}
                />
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}

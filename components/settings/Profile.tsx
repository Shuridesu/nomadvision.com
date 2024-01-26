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
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { UserType } from "@/lib/nextauth"
import { updateUser } from "@/actions/user"
import ImageUploading, { ImageListType } from "react-images-uploading"
import Image from "next/image"
import toast from "react-hot-toast"

// define input validation rules
const schema = z.object({
  name: z.string().min(3, { message: "Input must be at least 3 characters long." }),
  introduction: z.string().optional(),
})

// define input type
type InputType = z.infer<typeof schema>

interface ProfileProps {
  user: UserType
}

// profile
const Profile = ({ user }: ProfileProps) => {
  const router = useRouter()
  const [avatarUpload, setAvatarUpload] = useState<ImageListType>([
    {
      dataURL: user.avatar || "/default.png",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  // form state
  const form = useForm<InputType>({
    // verify input
    resolver: zodResolver(schema),
    // default value
    defaultValues: {
      name: user.name || "",
      introduction: user.introduction || "",
    },
  })

  // submit
  const onSubmit: SubmitHandler<InputType> = async (data) => {
    setIsLoading(true)
    let base64Image

    if (
      avatarUpload[0].dataURL &&
      avatarUpload[0].dataURL.startsWith("data:image")
    ) {
      base64Image = avatarUpload[0].dataURL
    }

    try {
      // update profile
      const res = await updateUser({
        accessToken: user.accessToken,
        name: data.name,
        introduction: data.introduction,
        avatar: base64Image,
      })

      if (!res.success) {
        toast.error("failed to update profile")
        return
      }

      toast.success("successfully updated profile")
      router.refresh()
    } catch (error) {
      toast.error("failed to update profile")
    } finally {
      setIsLoading(false)
    }
  }

  // avatar upload
  const onChangeImage = (imageList: ImageListType) => {
    const file = imageList[0]?.file
    const maxFileSize = 2 * 1024 * 1024

    // check file size
    if (file && file.size > maxFileSize) {
      toast.error("file size must be less than 2MB")
      return
    }

    setAvatarUpload(imageList)
  }

  return (
    <div>
      <div className="text-xl font-bold text-center mb-5 mt-10">PROFILE</div>

      <Form {...form}>
        <div className="mb-5">
          <ImageUploading
            value={avatarUpload}
            onChange={onChangeImage}
            maxNumber={1}
            acceptType={["jpg", "png", "jpeg"]}
          >
            {({ imageList, onImageUpdate }) => (
              <div className="w-full flex flex-col items-center justify-center">
                {imageList.map((image, index) => (
                  <div key={index}>
                    {image.dataURL && (
                      <div className="w-24 h-24 relative">
                        <Image
                          fill
                          src={image.dataURL}
                          alt={user.name || "avatar"}
                          className="rounded-full object-cover border-3"
                        />
                      </div>
                    )}
                  </div>
                ))}

                {imageList.length > 0 && (
                  <div className="text-center mt-3">
                    <Button variant="outline" onClick={() => onImageUpdate(0)}>
                      change avatar
                    </Button>
                  </div>
                )}
              </div>
            )}
          </ImageUploading>
        </div>

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

          <FormItem>
            <FormLabel>MAIL ADDRESS</FormLabel>
            <Input value={user.email!} disabled />
          </FormItem>

          <FormField
            control={form.control}
            name="introduction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>INTRODUCTION</FormLabel>
                <FormControl>
                  <Textarea placeholder="introduction" {...field} rows={10} />
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

export default Profile
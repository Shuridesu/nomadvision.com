import CopyIcon from "@/app/Icons/CopyIcon";
import LinkedIcon from "@/app/Icons/LinkedIn";
import TelegramIcon from "@/app/Icons/telegramIcon";
import TwitterIcon from "@/app/Icons/twitterIcon";
import img from "next/image";
import Link from "next/link";
import React from "react";

type Props = {

  promise: Promise<PostDetail>;
  
};

export default async function PostDetail({ promise }: Props) {
  const post = await promise;
  return (
    <>
      <article className="container p-4 mt-14">
        {/* article title */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <figure className="flex items-center justify-center ms-10 me-10 xl:me-0 max-w-[500px]">
            <img
              src={post.post.title_image}
              className="max-w-1/2 rounded-2xl"
              alt={post.post.title_image_description}
            />
          </figure>
          <div className="text-black lg:max-w-[500px]">
            <h2 className="font-bold text-4xl mt-12 lg:mt-4 translate-y-2 mb-4">
              {post.post.title}
            </h2>
            {post.post.category.map((category) => (
                  <Link href={`/tag/${category.slug}`} key={category.id}>
                    <button
                      key={category.id}
                      className=" bg-gray-200 px-2 text-sm rounded-xl font-normal border-blue-500 mt-2 hover:bg-gray-300 transition-all duration-200 me-2"
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
            <h3 className="font-medium text-2xl mt-4 translate-y-2">
              {post.post.subtitle}
            </h3>
            <div className="flex text-gray-400 mt-6">
              <img src="/a.png" alt="avtandil" width={50} height={50} className="rounded-full border"/>
              <ul className="ms-6">
                <li className="text-black text-xl">Avtadil Abdyrakhmanov</li>
                <li className="">Founder&Author | {post.post.pub_date}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* article content */}
        <div className="container mt-24 w-4/5 xl:w-2/3">
          {/* article content */}
          <div>
            <h1 className="font-semibold mt-8 text-3xl text-center">
              {post.post.heading1}
            </h1>
            
            <div className="relative mx-auto max-w-sm mt-8">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image1 && (
                <img
                  src={post.post.image1}
                  alt={post.post.image1_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content1}</p>

            <h1 className="font-semibold mt-8 text-3xl text-center">
              {post.post.heading2}
            </h1>
            
            <div className="relative mx-auto max-w-sm my-14">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image2 && (
                <img
                  src={post.post.image2}
                  alt={post.post.image2_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content2}</p>

            <h1 className="font-semibold mt-8 text-3xl text-center">
              {post.post.heading3}
            </h1>
            
            <div className="relative mx-auto max-w-sm mt-8">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image3 && (
                <img
                  src={post.post.image3}
                  alt={post.post.image3_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content3}</p>

            <h1 className="font-semibold mt-8 text-3xl text-center">
              {post.post.heading4}
            </h1>
            
            <div className="relative mx-auto max-w-sm mt-8">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image4 && (
                <img
                  src={post.post.image4}
                  alt={post.post.image4_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content4}</p>

            <h1 className="font-semibold mt-8 text-3xl">
              {post.post.heading5}
            </h1>
            
            <div className="relative mx-auto max-w-sm mt-8">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image5 && (
                <img
                  src={post.post.image5}
                  alt={post.post.image5_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content5}</p>

            <h1 className="font-semibold mt-8 text-3xl">
              {post.post.heading6}
            </h1>
            
            <div className="relative mx-auto max-w-sm mt-8">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image6 && (
                <img
                  src={post.post.image6}
                  alt={post.post.image6_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content6}</p>

            <h1 className="font-semibold mt-8 text-3xl">
              {post.post.heading7}
            </h1>
            
            <div className="relative mx-auto max-w-sm mt-8">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image7 && (
                <img
                  src={post.post.image7}
                  alt={post.post.image7_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content7}</p>

            <h1 className="font-semibold mt-8 text-3xl">
              {post.post.heading8}
            </h1>
            
            <div className="relative mx-auto max-w-sm mt-8">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image8 && (
                <img
                  src={post.post.image8}
                  alt={post.post.image8_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content8}</p>

            <h1 className="font-semibold mt-8 text-3xl">
              {post.post.heading9}
            </h1>
            
            <div className="relative mx-auto max-w-sm mt-8">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image9 && (
                <img
                  src={post.post.image9}
                  alt={post.post.image9_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content9}</p>

            <h1 className="font-semibold mt-8 text-3xl">
              {post.post.heading10}
            </h1>
            
            <div className="relative mx-auto max-w-sm mt-8">
              <div className="border-part absolute -left-20 rounded-md" />
              {post.post.image10 && (
                <img
                  src={post.post.image10}
                  alt={post.post.image10_description}
                  className="rounded-xl my-10"
                  width={500}
                  height={300}
                />
              )}
            </div>
            <p className="text-xl mt-3">{post.post.content10}</p>
          </div>

          {/* article share */}
          <div className="mt-20 mb-72">
            <h1 className="ms-4 sm:ms-8 mb-2 font-semibold">SHARE THE POST</h1>
            <div className="flex ms-2 sm:ms-4">
              <Link
                href={`https://twitter.com/intent/tweet?url=http://localhost:3000/${post.post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <TwitterIcon />
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/${post.post.slug}`}
                className="hover:scale-110 transition-transform duration-200"
              >
                <LinkedIcon />
              </Link>
              <Link
                href={`https://t.me/share/url?url=http://localhost:3000/${post.post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <TelegramIcon />
              </Link>
              <span className="hover:scale-110 transition-transform duration-200">
                <CopyIcon />
              </span>
            </div>
          </div>

        </div>

        {/* next and previous articles */}
        <div className="grid grid-cols-1 max-w-[800px] mx-auto lg:grid-cols-2 gap-32 mt-24">
          {post.previous ? (
            <Link
              href={post.previous.slug}
              className="group hover:-translate-x-2 transition-all duration-300"
            >
              <div className="text-start">
                <h1 className="text-xl font-bold ps-14 -pe-10 mb-3 bg-gray-300 group-hover:bg-gradient-to-l group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300 clip-diagonal-l rounded-e-lg">
                  PREVIOUS
                </h1>
                <img
                  src={post.previous.title_image}
                  alt={post.previous.title_image_description}
                  className="rounded-3xl mb-2 mt-6"
                  width={500}
                  height={300}
                />
                {post.previous.category.map((category) => (
                  <Link href={`/tag/${category.slug}`} key={category.id}>
                    <button
                      key={category.id}
                      className=" bg-gray-200 px-2 text-sm rounded-xl font-normal border-blue-500 ms-2 mt-2 hover:bg-gray-300 transition-all duration-200"
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
                <h3 className="text-2xl text-start font-semibold ms-4 mt-2 group-hover:text-blue-600 group-hover:underline">
                  {post.previous.title}
                </h3>
              </div>
            </Link>
          ) : (
            <Link
              href="/"
              className="group hover:-translate-x-2 transition-all duration-300"
            >
              <div className="">
                <h1 className="text-xl text-start font-bold ps-14  mb-3 bg-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300 clip-diagonal-l rounded-e-lg">
                  BACK TO HOME
                </h1>

                <h3 className="text-2xl text-start font-semibold ms-3 mt-2 group-hover:text-blue-600 group-hover:underline">
                  This is Our Most Oldest Post. Thanks For Coming Here.
                </h3>
              </div>
            </Link>
          )}
          {post.next ? (
            <Link
              href={post.next.slug}
              className="group hover:translate-x-2 transition-all duration-300"
            >
              <div className="">
                <h1 className="text-xl text-end font-bold pe-14  mb-3 bg-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300 clip-diagonal-r rounded-e-lg">
                  NEXT
                </h1>
                <img
                  src={post.next.title_image}
                  alt={post.next.title_image_description}
                  className="rounded-3xl mb-3 mt-6"
                  width={500}
                  height={300}
                />
                {post.next.category.map((category) => (
                  <Link href={`/tag/${category.slug}`} key={category.id}>
                    <button
                      key={category.id}
                      className=" bg-gray-200 px-2 text-sm rounded-xl font-normal border-blue-500 ms-2 mt-2 hover:bg-gray-300 transition-all duration-200"
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
                <h3 className="text-2xl text-start font-semibold ms-3 mt-2 group-hover:text-blue-600 group-hover:underline">
                  {post.next.title}
                </h3>
              </div>
            </Link>
          ) : (
            <Link
              href="/"
              className="group hover:translate-x-2 transition-all duration-300"
            >
              <div className="">
                <h1 className="text-xl text-end font-bold pe-14  mb-3 bg-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300 clip-diagonal-r rounded-e-lg">
                  BACK TO HOME
                </h1>

                <h3 className="text-2xl text-start font-semibold ms-3 mt-2 group-hover:text-blue-600 group-hover:underline">
                  This is Our Most Latest Post. Next Is Coming Soon.
                </h3>
              </div>
            </Link>
          )}
        </div>
        
      </article>
    </>
  );
}


'use client'

import Link from 'next/link';
import React from 'react';
import { TryIcon,TwitterIcon,LinkedInIcon,TelegramIcon,CopyIcon } from '@/icons';
import { useGetPostDetailQuery } from '@/redux/features/authApiSlice';
import { useAppSelector } from '@/redux/hooks';
import CommentJoin from './CommentJoin';
import CommentList from './CommentList';

interface Props {
    postSlug: string;
}

const ArticleDetail = ({postSlug}:Props) => {
  const { data:post, isLoading, isFetching } = useGetPostDetailQuery(postSlug);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <div>
      {post && (
        <article className="container p-4 mt-4 mx-auto bg-white bg-opacity-90 shadow-md pb-10">
          {/* article title */}
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
            <figure className="flex items-center justify-center mx-auto">
              <img
                src={post.post.title_image}
                className="max-w-xs sm:max-w-sm rounded-2xl"
                alt={post.post.title}
                width={500}
                height={300}
              />
            </figure>
            <div className="text-black lg:max-w-[500px] px-6 xl:px-0">
              <h2 className="font-bold text-4xl mt-12 lg:mt-4 translate-y-2 mb-4">
                {post.post.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 pt-2 text-gray-400 text-sm font-semibold whitespace-normal break-words">
                {post.post.category.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/tag/${category.slug}`}
                    className="rounded-lg px-2 py-1 hover:scale-105 border-2 border-gray-300 hover:border-indigo-400 hover:text-indigo-600 bg-white transition-all duration-100"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <h3 className="font-medium text-2xl mt-2 translate-y-2">
                {post.post.subtitle}
              </h3>
              <div className="mt-8">
                {post.post.sponsor_link && (
                  <Link
                    href={post.post.sponsor_link}
                    className=""
                    target="_blank"
                  >
                    <button className="flex items-center justify-center p-4 rounded-md font-bold text-base bg-slate-50 hover:bg-slate-950 hover:text-white text-gray-400 group h-8 shadow-md border">
                      <h1>TRY THIS</h1>
                      <span className="ms-3 group-hover:translate-x-2 transition-all duration-300">
                        <TryIcon />
                      </span>
                    </button>
                  </Link>
                )}
              </div>

              <div className="flex text-gray-400 mt-6 items-center">
                <img
                  src="/af.png"
                  alt="avtandil"
                  width={55}
                  height={50}
                  className="rounded-full h-full"
                />
                <ul className="mt-2 ms-6">
                  <li className="text-black text-xl">Avtandil Abdyrakhmanov</li>
                  <li className="">Founder&Author | {post.post.pub_date}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* article content */}
          <div className="container mt-24 w-full sm:w-4/5 xl:w-2/3 mx-auto">
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
                    alt={post.post.heading1}
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
                    alt={post.post.heading2}
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
                    alt={post.post.heading3}
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
                    alt={post.post.heading4}
                    className="rounded-xl my-10"
                    width={500}
                    height={300}
                  />
                )}
              </div>
              <p className="text-xl mt-3">{post.post.content4}</p>

              <h1 className="font-semibold mt-8 text-3xl text-center">
                {post.post.heading5}
              </h1>

              <div className="relative mx-auto max-w-sm mt-8">
                <div className="border-part absolute -left-20 rounded-md" />
                {post.post.image5 && (
                  <img
                    src={post.post.image5}
                    alt={post.post.heading5}
                    className="rounded-xl my-10"
                    width={500}
                    height={300}
                  />
                )}
              </div>
              <p className="text-xl mt-3">{post.post.content5}</p>

              <h1 className="font-semibold mt-8 text-3xl text-center">
                {post.post.heading6}
              </h1>

              <div className="relative mx-auto max-w-sm mt-8">
                <div className="border-part absolute -left-20 rounded-md" />
                {post.post.image6 && (
                  <img
                    src={post.post.image6}
                    alt={post.post.heading6}
                    className="rounded-xl my-10"
                    width={500}
                    height={300}
                  />
                )}
              </div>
              <p className="text-xl mt-3">{post.post.content6}</p>

              <h1 className="font-semibold mt-8 text-3xl text-center">
                {post.post.heading7}
              </h1>

              <div className="relative mx-auto max-w-sm mt-8">
                <div className="border-part absolute -left-20 rounded-md" />
                {post.post.image7 && (
                  <img
                    src={post.post.image7}
                    alt={post.post.heading7}
                    className="rounded-xl my-10"
                    width={500}
                    height={300}
                  />
                )}
              </div>
              <p className="text-xl mt-3">{post.post.content7}</p>

              <h1 className="font-semibold mt-8 text-3xl text-center">
                {post.post.heading8}
              </h1>

              <div className="relative mx-auto max-w-sm mt-8">
                <div className="border-part absolute -left-20 rounded-md" />
                {post.post.image8 && (
                  <img
                    src={post.post.image8}
                    alt={post.post.heading8}
                    className="rounded-xl my-10"
                    width={500}
                    height={300}
                  />
                )}
              </div>
              <p className="text-xl mt-3">{post.post.content8}</p>

              <h1 className="font-semibold mt-8 text-3xl text-center">
                {post.post.heading9}
              </h1>

              <div className="relative mx-auto max-w-sm mt-8">
                <div className="border-part absolute -left-20 rounded-md" />
                {post.post.image9 && (
                  <img
                    src={post.post.image9}
                    alt={post.post.heading9}
                    className="rounded-xl my-10"
                    width={500}
                    height={300}
                  />
                )}
              </div>
              <p className="text-xl mt-3">{post.post.content9}</p>

              <h1 className="font-semibold mt-8 text-3xl text-center">
                {post.post.heading10}
              </h1>

              <div className="relative mx-auto max-w-sm mt-8">
                <div className="border-part absolute -left-20 rounded-md" />
                {post.post.image10 && (
                  <img
                    src={post.post.image10}
                    alt={post.post.heading10}
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
              <h1 className="ms-4 sm:ms-8 mb-2 font-semibold">
                SHARE THE POST
              </h1>
              <div className="flex ms-2 sm:ms-4">
                <Link
                  href={`https://twitter.com/intent/tweet?url=https://nomadvision.org/${post.post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <TwitterIcon />
                </Link>
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://nomadvision.org/${post.post.slug}`}
                  className="hover:scale-110 transition-transform duration-200"
                  target="_blank"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  href={`https://t.me/share/url?url=https://nomadvision.org/${post.post.slug}`}
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

          <hr className="w-4/5 mx-auto" />

          <>
            <div className="w-11/12 max-w-[700px] mx-auto shadow-md px-10 py-10 mt-24 border bg-white">
              <div className="">
                <div className="font-bold text-2xl text-center">
                  MEMBER DISCUSSION
                </div>
                {isAuthenticated ? (
                  <div className="">
                    <div>
                      <CommentList />
                    </div>
                  </div>
                ) : (
                  <CommentJoin />
                )}
              </div>
            </div>
          </>

          {/* next and previous articles */}
          <div className="grid grid-cols-1 max-w-[800px] mx-auto sm:grid-cols-2 gap-32 mt-40">
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
                    alt={post.previous.title}
                    className="rounded-3xl mb-2 mt-6"
                    width={500}
                    height={300}
                  />
                  <div className="flex flex-wrap items-center gap-2 pb-4 text-gray-400 text-sm font-semibold">
                    {post.previous.category.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/tag/${category.slug}`}
                        className="rounded-lg px-2 py-1 hover:scale-105 border-2 border-gray-300 hover:border-indigo-400 hover:text-indigo-600 bg-white transition-all duration-100"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                  <h3 className="text-2xl text-start font-semibold ms-4 group-hover:text-blue-600 group-hover:underline">
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
                    alt={post.next.title}
                    className="rounded-3xl mb-3 mt-6"
                    width={500}
                    height={300}
                  />
                  <div className="flex flex-wrap items-center gap-2 pb-4 text-gray-400 text-sm font-semibold whitespace-normal break-words">
                    {post.next.category.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/tag/${category.slug}`}
                        className="max-w-full rounded-lg px-2 py-1 hover:scale-105 border-2 border-gray-300 hover:border-indigo-400 hover:text-indigo-600 bg-white transition-all duration-100"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
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
      )}
    </div>
  );
};

export default ArticleDetail;

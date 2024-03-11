import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Us | Nomad Vision',
}

export default function page() {
  return (
    <div className='mx-3 text-center'>
      
        <h1 className='font-bold text-4xl mt-32 text-center'>
          ABOUT US
        </h1>
        <p className='mt-16 text-sm sm:text-xl lg:text-2xl'>
          <Link href = "/" className='text-blue-400 hover:underline'>nomadvision.net</Link> - Where AI, Data, and Networking Community Converge
        </p>
        <p className='mt-16 text-sm sm:text-xl lg:text-2xl'>
        The epicenter of AI and Data Intelligence for forward-thinking businesses. We&apos;re more than a platform; we&apos;re the vanguard of data-driven insights and unfiltered, bold perspectives in the tech world.
        </p>
        <h1 className='font-semibold text-3xl text-center mt-16'>
        Team
        </h1>
        <p className='mt-16 text-sm sm:text-xl lg:text-2xl'>
        Spearheaded by Avtandil Abdyrakhmanov, our founder, nomadvision.net is crafted for those who don&apos;t just adapt to change but drive it. Alongside Avtandil are Shuri Kikuchi and Muslim Baatyrbekov, our dynamic duo, ensuring every insight is as sharp as the technology we discuss.
        </p>
        <h1 className='font-semibold text-3xl text-center mt-16'>
        Uniquely Unapologetic
        </h1>
        <p className='mt-16 text-sm sm:text-xl lg:text-2xl'>
        What sets us apart? Our uncompromising independence and fearless embrace of freedom of speech. We deliver raw, undiluted insights and analyses. We&apos;re not here to coddle; we&apos;re here to enlighten and challenge.
        </p>
        <h1 className='font-semibold text-3xl text-center mt-16'>
        Beyond Information: Building Connections
        </h1>
        <p className='mt-16 text-sm sm:text-xl lg:text-2xl'>
        nomadvision.net isn&apos;t just about delivering cutting-edge AI and data insights; it&apos;s about connecting like-minded professionals. Our platform extends into an active networking community, featuring messenger and group chats with personalized profiles. Here, you can engage, debate, and collaborate with peers, creating opportunities that transcend traditional boundaries.
        </p>
        <h1 className='font-semibold text-3xl text-center mt-16'>
        Join Our Movement
        </h1>
        <p className='mt-16 text-sm sm:text-xl lg:text-2xl'>
        Ready to be part of a community where data meets daring, and AI transcends algorithms? nomadvision.net is not just a website; it&apos;s a revolution in the making. Join us, and be part of a movement where only the visionary thrive.
        </p>
      
    </div>
  )
}

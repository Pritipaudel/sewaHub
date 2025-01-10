import React from 'react'

const Info= () => {
  return (
    <section className="bg-white ">
     
    <div className="gap-16 items-center py-8  px-7 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className=" mb-2  text-4xl tracking-tight font-extrabold text-blue-800 dark:text-white">
        Connecting You to Reliable Services – Anytime, Anywhere.
        </h2>
        <p className="mb-4 mt-9">
        Sajha Sewa is a community-driven platform that connects customers with reliable service providers for everyday needs, such as household chores, tutoring, and consultations. We aim to bridge the gap between consumers and professionals, fostering trust and accessibility. With easy communication, transparent bookings, and feedback features, we empower individuals to find the right help efficiently. Our mission is to build a seamless,
         inclusive network where services are just a few clicks away, making life easier for everyone.
        </p>
        
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <img
          className="w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
          alt="office content 1"
        />
        <img
          className="mt-4 w-full lg:mt-10 rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
          alt="office content 2"
        />
      </div>
    </div>
  </section>
  
  )
}

export default Info

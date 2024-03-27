import React from 'react'

const Hero = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">DeCarbonn your business by investing in carbon offset projects.</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We search in India for climate projects with the highest impact</p>
    </div>
    <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#133009] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Connect</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg border-[#133009] outline-[#133009]">Get In Touch</button>
      </div>
   <div className="my-8 font-bold text-lg">
   Our goal is to simplify & enhance climate action.
   </div>
  </div>
</section>
  )
}

export default Hero



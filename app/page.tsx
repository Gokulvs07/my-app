import Image from 'next/image'

export default function Home() {
  return (    
    <main className='bg-white'>
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <nav className="sticky top-0 z-50 ">
        <div className="w-10/12 mx-auto py-5 flex justify-between items-center min-w-full bg-white font-roboto">
            <div>
            <Image src = "/ahead.png" width={100} height={100} alt = "ahead"/>
            </div>
            <div>
                <button className="py-2 px-5 text-black">
                    Emotions
                </button>
                <button className="py-2 px-5 text-black">
                    Manifesto
                </button>
                <button className="py-2 px-5 text-black">
                    Self-awareness test
                </button>
                <button className="py-2 px-5 text-black">
                    Work with us
                </button>
            </div>
            <div className="space-x-0.5">
                <button className="py-2 px-5 rounded-full border border-black bg-transparent text-black hover:bg-black hover:text-white transition-all">Download app</button>
                </div>
            
            </div>
   </nav>
        <section className="min-h-96 relative flex flex-1 shrink-0 items-center space-x-20 overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48"> 
    
        <div className="absolute inset-0 bg-violet-100 mix-blend-multiply"></div>

        <div className="relative flex flex-col  p-4 sm:max-w-xl">
            <p className="space-y-6 mb-4 text-left text-lg text-black sm:text-xl md:mb-8">Ahead app</p>
            <h1 className="mb-8 max-w-2xl text-left text-4xl font-bold text-black  sm:text-5xl md:mb-12 md:text-6xl">Master your Life by Mastering emotions</h1>
            
            <div className='flex space-x-10'>
            <button type="button" className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl">
        <div className="mr-3">
            <svg viewBox="0 0 384 512" width="30">
                <path fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                </path>
            </svg>
        </div>
        <div>
            <div className="text-xs">
                Download on the
            </div>
            <div className="-mt-1 font-sans text-xl font-semibold">
                App Store
            </div>
        </div>
    </button>

        
    <span className="space-y-3">
    <div className="flex items-center">
        <svg className="w-4 h-4 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    </div>
    <div className=" text-gray-500">100+ AppStore reviews</div>
    </span>
    </div>
   
      </div>
      <div className='relative flex h-[600px] w-screen items-center justify-center before:absolute before:h-[640px] before:w-[640px] before:rounded-full before:bg-violet-200'>
    <div className='z-10 h-[480px]'>
    <div className="relative mx-10 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
    <Image width={100} height={100} src="/mockup-2-light.png" className="dark:hidden w-[272px] h-[572px]" alt=""/>
    </div>
    </div>
    </div>
</div>
<div></div>
    </section>


    <ul className="m-10 py-20 space-x-20 grid grid-cols-3 gap-5 items-left  text-gray-900 dark:text-white">
    <li>
        <span className='text-4xl  font-bold'>EQ beats IQ</span>
    </li>
    <li>
    <span className='text-md font-medium max-w-50'>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships</span>
    </li>
    <li>
    <span className='text-md font-medium max-w-50'>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year</span>
    </li>
    <li></li>
    </ul>
    
    <div className='m-2 py-10 text-5xl font-bold text-black'>Does this sound familiar...</div>
    <span className='grid grid-cols-4 space-x-6'>
    <div className="block space-y-6 max-w-sm p-6 bg-sky-200 border border-gray-200 rounded-lg shadow ">
    <Image src = "/Angry Emoji.png" width={50} height={50} alt = "ahead"/>
<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Squabble with your partner</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</div>

<div className="block space-y-6 max-w-sm p-6 bg-violet-100 border border-gray-200 rounded-lg shadow ">
    <Image src = "/Angry Emoji.png" width={50} height={50} alt = "ahead"/>
<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">You argue with a colleague</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</div>


<div className="mx-10 -rotate-[10deg] block space-y-6 max-w-sm p-6 bg-violet-500 border border-gray-200 rounded-lg shadow ">
    <Image src = "/Flushed Face Emoji.png" width={50} height={50} alt = "ahead"/>
<h5 className="mb-2 text-xl font-bold tracking-tight text-white">You get a promotion at work</h5>
<p className="font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</div>

<div className="block space-y-6 max-w-sm p-6 bg-orange-200 border border-gray-200 rounded-lg shadow ">
    <Image src = "/Thinking Emoji.png" width={50} height={50} alt = "ahead"/>
<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">You attend a class reunion</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</div>
</span>
<p></p>
<section className="mt-[300px] min-h-96 relative flex flex-1 shrink-0 space-x-20 overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-10 xl:py-32"> 
    
        <div className="absolute inset-0 bg-orange-50 mix-blend-multiply"></div>

        <div className="relative flex flex-col  p-4 sm:max-w-xl">
            <p className="space-y-6 mb-4 text-left text-lg text-black sm:text-medium md:mb-8">Built out of frustration</p>
            <h1 className="mb-8 max-w-2xl text-left text-4xl font-bold text-black  sm:text-3xl md:mb-12 md:text-5xl">Meet the ahead app</h1>
            <div className="relative flex h-[600px] w-screen before:absolute before:h-[350px] before:w-[350px] before:rounded-full before:bg-orange-100">
            <div className=' ml-[500px] z-10 max-w-xl text-lg items-center top-0  text-black'>
                <p>A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional intelligence.
</p>
<p></p>
           <p >Think of it as a pocket cheerleader towards a better, more fulfilling</p>
                </div>
                </div>
            </div>
   
    </section>



    

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src = "/ahead.png" width={100} height={100} alt = "ahead"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-violet-500">ahead</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <p className="me-4 md:me-6 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5 ">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          Auguststrabe 26,10117 Berlin
        </p>
        </li>
        <li>
        <p className="me-4 md:me-6 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5 ">
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          hi@ahead-app.com
        </p>
        </li>
                <li>
                <button type="button" className="flex items-center justify-center me-4 md:me-6 w-48 text-white bg-black h-14 rounded-xl">
        <div className="mr-3">
            <svg viewBox="0 0 384 512" width="30">
                <path fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                </path>
            </svg>
        </div>
        <div>
            <div className="text-xs">
                Download on the
            </div>
            <div className="-mt-1 font-sans text-xl font-semibold">
                App Store
            </div>
        </div>
    </button>
                </li>
                
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Ahead app™</a>. All Rights Reserved.</span>
    </div>
</footer>









    </div>
    </div>

   
    </main>
  )
}

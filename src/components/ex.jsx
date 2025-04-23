import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#141624] dark:bg-gray-900 p-[6%] text-white dark:text-gray-300'>
     <div className=" justify-between grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div className="one ">
       
       <h3 className='text-xl mb-2 font-bold'>About</h3>
       <p className='mb-4 text-[15px] opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero impedit quis neque architecto, voluptatum voluptate itaque amet deserunt culpa exercitationem!</p>

       <p className=''>Email: <a href="mailto:mdalarafatabir@gmail.com"className='opacity-60 text-[15px]' >mdalarafatabir@gmail.com</a></p>
       <p className=''>Phone: <a href="tel:+8801303180712"className='opacity-60 text-[15px]' >+8801303180712</a></p>


      </div>



      <div className="one flex justify-around">
        <div className="quick">
        <h3 className='text-xl mb-2 font-bold'>Quick Link</h3>
        <ul className='opacity-60'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        </div>

        <div className="catagory">
        <h3 className='text-xl mb-2 font-bold'>Catagory</h3>
        <ul className='opacity-60'>
        <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </div>
      </div>

      <div className="one bg-[#242535] p-4 rounded flex flex-col items-center">
      <h3 className='text-xl mb-2 font-bold'>Weekly Newsletter</h3>
      <p className='opacity-60 text-[15px] mb-5'>Get blog articles and offers via email</p>
      <form action="">
       <label>Enter Email:</label><br />
       <input type="email" placeholder='enter email ' className='pl-2 pb-2 pt-1 border border-white-50 rounded w-full' /> <br />

       <button className='btn w-full mt-2 rounded bg-[#4b6bfb] hover:bg-white hover:text-black'>Subscribe</button>

      </form>
      
      </div>

     </div>
     <hr className='opacity-60 my-10'/>

     <div className="footer grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      <div className="icon">
        <img src="/src/assets/img/logodark.png" alt="" />
      </div>


      <div className="policy flex gap-5">
      <a href="">Terms of use</a>
      <a href="">Privacy Policy</a>
      <a href="">Cookie Policy</a>
      </div>
     </div>
    </div>
  );
};

export default Footer;



<div className="p-[6%] bg-base-200 text-base-content  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
     
<nav>
<h3 className='text-xl mb-2 font-bold'>About</h3>
    <p className='mb-4 text-[15px] opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero impedit quis neque architecto, voluptatum voluptate itaque amet deserunt culpa exercitationem!</p>

    <p className=''>Email: <a href="mailto:mdalarafatabir@gmail.com"className='opacity-60 text-[15px]' >mdalarafatabir@gmail.com</a></p>
    <p className=''>Phone: <a href="tel:+8801303180712"className='opacity-60 text-[15px]' >+8801303180712</a></p>
    
</nav>
<nav>
<div className="one flex justify-around">
     <div className="quick">
     <h3 className='text-xl mb-2 font-bold'>Quick Link</h3>
     <ul className='opacity-60'>
       <li><a href="/">Home</a></li>
       <li><a href="/about">About</a></li>
       <li><a href="/blogs">Blogs</a></li>
       <li><a href="/contact">Contact</a></li>
     </ul>

     </div>

    <div className="one flex justify-around" >
    <div className="catagory">
     <h3 className='text-xl mb-2 font-bold'>Catagory</h3>
     <ul className='opacity-60'>
     <li><a href="/">Home</a></li>
       <li><a href="/about">About</a></li>
       <li><a href="/blogs">Blogs</a></li>
       <li><a href="/contact">Contact</a></li>
     </ul>
     </div>
    </div>
   </div>
</nav>

<form className='flex flex-col items-center border border-sky-500 p-3 rounded'>
 <h6 className='text-xl font-bold'>Weekly Newsletter</h6>
 <p className='opacity-60 text-[15px] mb-5'>Get blog articles and offers via email</p>
 <fieldset className="w-80">
   <label>Your email:</label> <br />
   <div className="">
     <input
       type="email"
       placeholder="enter email"
       className="input input-bordered join-item" /> 
      <br />
      <button className="btn btn-primary w-full mt-2">Subscribe</button>
      <input type="text" />
    
   </div>
 </fieldset>
</form> 


 </div>

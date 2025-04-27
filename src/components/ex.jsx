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

// export default Footer;



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





// about 


// import React from "react";
import user from "../assets/img/user.png"
import about1 from "../assets/img/about1.jpg"
import about2 from "../assets/img/about2.jpg"

const About = () => {
  return (
    <div>
       <div className="about px-[18%] py-[2%]">
        <div className="one">
          <a href="">
            {" "}
            <span class="inline-flex items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white hover:bg-white hover:text-blue-500 transition duration-450">
              Technology
            </span>
          </a>

          <h3 className="text-2xl font-bold my-2">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h3>

          <div className="flex items-center ">
            <img
              className="h-7 mr-2"
              src={user}
              alt=""
            />
            <h2 className="text-sm font-bold mr-3">Tracey Wilson</h2>
            <p className="text-sm text-gray-500">2025-04-21</p>
          </div>

          <img
            src={about1}
            alt=""
            className=" rounded-xl my-5"
          />

          <p className="opacity-85">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
            <br />
            <br />
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect
          </p>
          <br />
          <br />

          <h3 className="text-xl font-bold mb-2">Recharge Your Destination</h3>
          <p className="opacity-85">
            
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Viverra
            adipiscing at in tellus.
          </p>
          <br />
          <br />

          <h3 className="text-xl font-bold mb-2">Plan Your Etineary</h3>

          <p className="opacity-85">
            While it's essential to leave room for spontaneity and unexpected
            adventures, having a rough itinerary can help you make the most of
            your time and budget. Identify the must-see sights and experiences
            and prioritize them according to your interests and preferences.
            This will help you avoid overscheduling and ensure that you have
            time to relax and enjoy your journey.
            <br />
            <br />
            Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
            lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
            felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
          </p>

          <div className=" blockquate p-5 rounded-xl my-5   font-serif  text-blue-500 hover:scale-102 transition-all duration-350 ease-in-out ">
                    <q className='text-[20px] italic'> Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.</q>
                </div>

{/* <div className="bg-[#f6f6f7] dark:bg-gray-800 p-5 rounded-xl my-5 shadow-xl transition-colors duration-300">
  <q className="text-[18px] italic text-gray-900 dark:text-gray-100">
    Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.
  </q>
</div> */}

        </div>

        <div className="one">
          <img
            src={about2}
            className=" rounded-xl my-6"
            alt=""
          />

          <h3 className="text-xl font-bold mb-2">Pack lightly and smartly</h3>
          <p className="opacity-85">
            Packing can be a daunting task, but with some careful planning and
            smart choices, you can pack light and efficiently. Start by making a
            packing list and sticking to it, focusing on versatile and
            comfortable clothing that can be mixed and matched. Invest in
            quality luggage and packing organizers to maximize space and
            minimize wrinkles.
          </p>

          <br />
          <br />

          <h3 className="text-xl font-bold mb-2">Stay safe and healthy</h3>
          <p className="opacity-85">
            Traveling can expose you to new environments and potential health
            risks, so it's crucial to take precautions to stay safe and healthy.
            This includes researching any required vaccinations or medications,
            staying hydrated, washing your hands frequently, and using sunscreen
            and insect repellent. It's also essential to keep your valuables
            safe and secure and to be aware of your surroundings at all times..
          </p>

          <br />
          <br />

          <h3 className="text-xl font-bold mb-2">
            Immerse Yourself in the Local Culture
          </h3>
          <p className="opacity-85">
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>

          <br />
          <br />

          <h3 className="text-xl font-bold mb-2">Capture Memories</h3>
          <p className="opacity-85">
            Finally, don't forget to capture memories of your journey. Whether
            it's through photographs, journaling, or souvenirs, preserving the
            moments and experiences of your travels can bring joy and nostalgia
            for years to come. However, it's also essential to be present in the
            moment and not let technology distract you from the beauty of your
            surroundings
          </p>
          <br />
          <br />
          <h3 className="text-xl font-bold mb-2">Conclusion:</h3>
          <p className="opacity-85">
            Traveling is an art form that requires a blend of planning,
            preparation, and spontaneity. By following these tips and tricks,
            you can make the most of your journey and create memories that last
            a lifetime. So pack your bags, embrace the adventure, and enjoy the
            ride
          </p>

          <br />
          <br />
          <br />
        </div>
      </div> 
    </div>
  );
};

// export default About;



// contact

// import React from 'react';
import Allposts from '../components/Allposts';
import facebook from "../assets/img/facebook.png"
import insta from "../assets/img/insta.png"
import youtube from "../assets/img/youtube.png"
// import user from "../assets/img/user.png"

const Contact = () => {
    return (
            
         <div>

<div className=' contact flex flex-col items-center px-[15%] py-[3%] mx-[6%] my-[2%]  '>

<div className='flex  items-center gap-2'>
     <img className='h-[64px] w-[64px]' src={user} alt="" />
     <div>
         <h3 className='text-[20px] font-bold'>Jonathon doe</h3>
         <p className='text-[14px] opacity-50'>Web Developer</p>
     </div>
</div>
<div className='opacity-80 text-[18px] mt-5 mb-4 text-center'>
Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives
</div>

<div className="flex gap-2">
<a href="https://www.facebook.com/">  <img className='hover:scale-115 transition-all duration-350 ease-in-out'  src={facebook} alt="" /></a>

<a href="https://www.instagram.com/"><img className='hover:scale-115 transition-all duration-350 ease-in-out' src={insta} alt="" /></a>

<a className='hover:scale-115 transition-all duration-350 ease-in-out ' href="https://www.youtube.com/"> <img  src={youtube} alt="" /></a>

</div>

</div>

      
<Allposts></Allposts>

         </div>
    );
};

export default Contact;
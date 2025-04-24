import React from "react";

const About = () => {
  return (
    <div>
      <div className="about p-[6%]">
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
              src="/public/img/author/erics.png"
              alt=""
            />
            <h2 className="text-sm font-bold mr-3">Tracey Wilson</h2>
            <p className="text-sm text-gray-500">2025-04-21</p>
          </div>

          <img
            src="/src/assets/img/about1.jpg"
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
            {" "}
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

          {/* <div className="bg-[#f6f6f7] p-5 rounded-xl my-5  shadow-xl  ">
                    <q className='text-[18px] italic'> Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.</q>
                </div> */}

<div className="bg-[#f6f6f7] dark:bg-gray-800 p-5 rounded-xl my-5 shadow-xl transition-colors duration-300">
  <q className="text-[18px] italic text-gray-900 dark:text-gray-100">
    Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.
  </q>
</div>

        </div>

        <div className="one">
          <img
            src="/src/assets/img/about2.jpg"
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

export default About;

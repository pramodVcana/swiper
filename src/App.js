// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "./App.css"

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper";

const App= () => {


  const boostYourBrandData = [
{
"id": 24,
"position": 1,
"name": "Antony Rajkumar",
"designation": "Founder & CEO",
"experience": "25 years",
"industry": "FMCG, Retail, Aviation, Auto, Tech, Telecom",
"linkedinProfile": "https://www.linkedin.com/in/theantonystory/",
"description": "An IIMC and ISB alumnus, Antony has led brand stories across domains like aviation to auto, tech \nto telecom, for 25 years. Having headed agency operations, he’s played the lead strategist for Ford, Coca Cola and Nissan. His urge to try out the new saw him co-found StoryWalker, a content brand for kids, before setting up StoryBoats. Dreamer, darer and doer, our Captain keeps us on our toes!",
"profileIcon": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Antony_pp.png",
"profileBanner": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Antony_hero_compressed.gif",
"createdDate": "2022-11-02T10:45:45.000+00:00"
},
{
"id": 22,
"position": 2,
"name": "Sandeep Varma ",
"designation": "VP – Business Operations",
"experience": "20 years",
"industry": "Media, Film, Retail, Airlines, Real Estate",
"linkedinProfile": "https://www.linkedin.com/in/sandeepnvarma/",
"description": "Sandeep has worked in more industries than most. Holding two PGDs – Business Administration and Advertising Management – it’s clear that his quest for knowledge is a lifelong one. He loves a good marathon and a good book, though not necessarily at the same time. Tired of waiting for his big break as an actor in Malayalam films, he now plays our Hush Man for HushHush Hounds!",
"profileIcon": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Sandeep.jpeg",
"profileBanner": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/sandeep.gif",
"createdDate": "2022-11-02T10:42:51.000+00:00"
},
{
"id": 21,
"position": 4,
"name": "Astha Sirpaul ",
"designation": "VP – Strategy",
"experience": "14 years",
"industry": "FMCG, Tech, Automobile, Non-profit/government, F&B, Pharmaceutical, Insurance",
"linkedinProfile": "https://www.linkedin.com/in/astha-sirpaul-69983911/",
"description": "A trained Psychologist with 14 years under her belt of guiding clients from multiple backgrounds, Astha is our Knowledge Bee in all esoteric brand-related subjects – from Social Research & Cultural Landscaping to Brand Strategy & Positioning. (She maintains that it’s all’s just common sense.) \nHer innate curiosity and clarity of thinking, make hers a mind to be mined.",
"profileIcon": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Astha.jpeg",
"profileBanner": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Astha.gif",
"createdDate": "2022-11-02T10:41:05.000+00:00"
},
{
"id": 20,
"position": 5,
"name": "Supriya Berry ",
"designation": "Head of Design ",
"experience": "20 years",
"industry": "Auto, FMCG, Tech Products, Healthcare",
"linkedinProfile": "https://www.linkedin.com/in/supriya-berry-9073861a/",
"description": "Supriya believes, creativity is nothing if it doesn’t talk culture and induce drama – inspired preferably by Bollywood. For 20 years now, she has told visual stories for clients like Ford, Maruti, Sony, Nissin, HP and Nissan, among others. A foodie at heart, she loves to bake for friends and family (try out her spongy Chiffon Cake). She plans to be an entrepreneur who’ll open a cosy garden café someday. ",
"profileIcon": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Supriya.jpeg",
"profileBanner": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/supriya.gif",
"createdDate": "2022-11-02T10:40:11.000+00:00"
},
{
"id": 19,
"position": 6,
"name": "Jeevan George",
"designation": "Creative Director (Digital)",
"experience": "13+ years",
"industry": "Aviation, F&B, Insurance, Beauty, Automobile, Fashion ",
"linkedinProfile": "https://www.linkedin.com/in/jeevan-george",
"description": "With a curious mind and an eye for efficiency and detail, Jeevan has gathered rich design experience in print and digital platforms for clients across Europe, SE Asia and the Middle East. He’s also worked closely with clients from varied sectors, ranging from aviation to fashion. Perhaps that’s why, his team management skills have made him a pro in explaining any topic in TED talk-sized detail!",
"profileIcon": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Jeevan.jpeg",
"profileBanner": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/jeevan.gif",
"createdDate": "2022-11-02T10:39:17.000+00:00"
},
{
"id": 18,
"position": 7,
"name": "Mitali Yadav",
"designation": "Sr Manager – Business Development",
"experience": "7 years",
"industry": "Tech, AI, Pharmaceuticals, F&B",
"linkedinProfile": "https://www.linkedin.com/in/mitali-yadav-4467b3137/",
"description": "Mitali’s change of course from studying Microbiology in college to business expansion at work, has been an exciting journey. A pass-out of Garhwal University, she’s quite a standout in her choices. Giving her clients the ammo to position themselves as leaders, the saying ‘Life is short, don’t be lazy’ is her way to stay pumped up. She’s always up for a new business pitch – and a celebratory drink.",
"profileIcon": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Mitali.jpeg",
"profileBanner": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/mitali.gif",
"createdDate": "2022-11-02T10:33:15.000+00:00"
},
{
"id": 17,
"position": 8,
"name": "Aradhna Kohli",
"designation": "Executive Sales Partner",
"experience": "24+ years",
"industry": "FMCG, Retail",
"linkedinProfile": "https://www.linkedin.com/in/aradhna-kohli-475a4722/",
"description": "A resilient Sales & Marketing leader with over 24 years of experience in India and Dubai, Aradhna Kohli specializes in integrated marketing solutions and strategic planning. With her splendid client servicing and corporate communication skills, she’s always ready to set the stage for a striking business pitch.",
"profileIcon": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Aradhna_pp.jpg",
"profileBanner": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Aradhana 1.gif",
"createdDate": "2022-11-02T10:31:27.000+00:00"
},
{
"id": 16,
"position": 9,
"name": "Say hello to The Crew.",
"designation": "Multi-talented sailors who like to wear different hats.",
"experience": "From passionate rookies to experienced masters.",
"industry": "Hailing from the colourful lands of non-profit, retail, media, education, event management, and fintech.",
"linkedinProfile": "https://www.linkedin.com/company/storyboats/",
"description": "Our boat is brimming with youthful energy. That’s what keeps our passions up. We like rowing hard – for our clients and our ideas – with an ‘all-hands-on-deck’ mindset. Be it at work or in play.",
"profileIcon": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/crew pp.jpg",
"profileBanner": "https://storyboat-resources.s3.ap-south-1.amazonaws.com/Crew_hero.gif",
"createdDate": "2022-11-02T10:29:57.000+00:00"
}
]
  return (
    <>
    <div className="h-[230px]  " style={{ background: 'rgba(45,163,219,.6)' }}>
        <div className="my-auto mx-[100px]  ">
          {" "}
          <Swiper
            modules={[Navigation, Autoplay , Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={2}
           
            autoplay={{
              delay: 3000,
            }}
            loop
            navigation
            style={{
              padding: "10px",
              width: "100%",
              marginRight: "0px!important",
              marginTop: "20%",
            
            }}
            breakpoints={{
              700: {
                width: 700,
                spaceBetween: 6,
                slidesPerView: 2,
              },
            }}
          >
            {boostYourBrandData.map((data) => (
              <SwiperSlide>
                <div
                  transition={{ type: "tween", ease: "easeOut" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  className="my-auto "
                >
                  <div className="rounded-full ml-[100px] mt-[50px]">
                    <img className="rounded-full" src={data.profileIcon} />
                    <p className="text-[white]">{data?.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> 
    </>
  );
};

export default App

/** @format */
'use client';
import Image from 'next/image';
import React, {  useState, RefObject } from 'react';
import Profile from './../../../public/assets/laptop.png';
import Ai from './../../../public/assets/boy.png';
import Boy from './../../../public/assets/boys.png';
import Todo from './../../../public/assets/todo.png';
import Git from './../../../public/assets/svg/git.svg';
import Linkedin from './../../../public/assets/linkedin.png';
import Relevel from './../../../public/assets/relevel.png';
import Scaler from './../../../public/assets/scaler.png';
import Carousel from './../../../components/Carousel/page';
import Vue from './../../../public/assets/vue.png';
import Next from './../../../public/assets/next.png';
import ReactJs from './../../../public/assets/react.png';
import Node from './../../../public/assets/node.png';
import Tailwind from './../../../public/assets/tailwind.png';
import Css from './../../../public/assets/css.png';
import Html from './../../../public/assets/html.png';
import Javascript from './../../../public/assets/js.png';
import Logo from './../../../public/assets/logo.png';
import Languages from './../../../components/Languages/page';
import { poppins } from './../../../app/constant';
import Link from 'next/link';

// Define the interface for the props
interface PageProps {
  handleScroll: (ref: RefObject<HTMLElement>) => void;
  section1Ref: RefObject<HTMLElement>;
  section2Ref: RefObject<HTMLElement>;
  section3Ref: RefObject<HTMLElement>;
  section4Ref: RefObject<HTMLElement>;
  section5Ref: RefObject<HTMLElement>;
}
const Page = ({
  handleScroll,
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
}: PageProps) => {
  const images = [Linkedin, Relevel, Scaler];
  const languages = [Next, ReactJs, Vue, Node, Tailwind, Css, Html, Javascript];
  const [formate, setFormate] = useState<boolean>(false);
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-24 pb-[40px] overflow-auto">
        <div className="profile-shadow">
          <Image
            className="rounded-full w-fit"
            src={Profile.src}
            alt="Profile"
            width={Profile.width}
            height={Profile.height}
          />
        </div>
        <span
          className={`${poppins.className} text-white leading-12 tracking-wide text-[30px] pt-[20px]`}
        >
          Hey
        </span>
        <span
          className={`${poppins.className} text-center text-white font-bold leading-12 tracking-wide text-[50px] pt-[20px]`}
        >
          I’m Vaibhav Shukla
        </span>
        <span
          className={`${poppins.className} text-center text-white leading-8 tracking-wide text-[30px] pt-[20px]`}
        >
          Full Stack <span className="text-[#D32D20]">Developer |</span>
        </span>
        <p
          className={`${poppins.className} text-white leading-6 tracking-wide text-[20px] pt-[20px] text-center px-[40px] w-[80vw]`}
        >
          Hello there! 👋 I&apos;m Vaibhav Shukla, a dedicated Full Stack Web
          Developer with over 2 year of experience in the dynamic world of
          Information Technology. My passion for technology drives me to create
          innovative web solutions and push the boundaries of what&apos;s
          possible.
        </p>
        <div className="flex justify-center pt-8">
          <div className="flex gap-x-[40px] gap-y-[40px]">
            <button className="shadow-btn ">
              <span>Learn More</span>
            </button>
            <Link
              href="#section1"
              passHref
              scroll={false}
              className="shadow-btn "
            >
              <span onClick={() => handleScroll(section1Ref)}>Contact me</span>
            </Link>
          </div>
        </div>
        <div
          className="flex max-[1024px]:w-full justify-center items-center px-[40px] py-[40px] min-h-[750px]"
          ref={section5Ref}
          id="#section5"
        >
          <div className="flex max-[1024px]:w-full max-[1024px]:flex-col justify-center gap-y-[5vw] gap-x-[5vw] items-center">
            <div className="image-shadow">
              <Image
                className="max-[1024px]:w-[50vw] max-[767px]:w-[80vw] rounded-2xl"
                src={Ai.src}
                alt="Ai"
                width={Ai.width}
                height={Ai.height}
              />
            </div>
            <div className="w-[474px] max-[1024px]:w-[50vw] max-[767px]:w-[80vw]">
              <span className={`text-white ${poppins.className} text-[24px]`}>
                About me
              </span>
              <p className={`text-white ${poppins.className} `}>
                Currently, I work as a Full Stack Web Developer at Nrich
                Learning Pvt. Ltd. in Chandigarh. Here, I collaborate with a
                talented team on exciting projects, tackling complex challenges
                and continuously growing my skill set. One notable project I led
                improved application performance by 30%, significantly enhancing
                user satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center" ref={section3Ref} id="#section3">
          <div className="w-[70vw] max-[767px]:w-[90vw]">
            <span className={`text-white ${poppins.className} text-[24px]`}>
              Projects
            </span>
            <div className="w-full flex py-[20px] rounded-lg">
              <div className="bg-[#7733FF] w-[70%] h-2"></div>
              <div className="bg-[#F7A21E] w-[30%] h-2"></div>
            </div>
            <div className="flex flex-wrap justify-between items-center  max-[767px]:justify-center gap-x-6 gap-y-6 w-full py-8">
              <button className="project-btn">React</button>
              <button className="project-btn">Next</button>
              <button className="project-btn">Vue</button>
            </div>
            <div className="flex max-[991px]:flex-col-reverse gap-y-8 gap-x-8 justify-evenly items-center">
              <div className="flex flex-col max-[991px]:flex-row justify-between gap-y-8 gap-x-8 max-[425px]:gap-x-4">
                <div className="logo-shadow w-[190px] max-[991px]:max-w-[135px] max-[991px]:w-full">
                  <Image
                    className="rounded-full "
                    src={Todo.src}
                    alt="todo"
                    width={Todo.width}
                    height={Todo.height}
                  />
                </div>
                <div className="logo-shadow w-[190px] max-[991px]:max-w-[135px] max-[991px]:w-full">
                  <Image
                    className="rounded-full"
                    src={Todo.src}
                    alt="todo"
                    width={Todo.width}
                    height={Todo.height}
                  />
                </div>
                <div className="logo-shadow w-[190px] max-[991px]:max-w-[135px] max-[991px]:w-full">
                  <Image
                    className="rounded-full"
                    src={Todo.src}
                    alt="todo"
                    width={Todo.width}
                    height={Todo.height}
                  />
                </div>
              </div>
              <div className="content-details p-8 gap-y-6 max-[525px]:p-6 max-[425px]:p-4 max-[525px]:gap-y-4 max-[425px]:gap-y-2">
                <div className="h-[340px] max-[525px]:h-[250px] max-[425px]:h-[200px]">
                  <Image
                    className="rounded-lg h-full"
                    src={Todo.src}
                    alt="todo"
                    width={Todo.width}
                    height={Todo.height}
                  />
                </div>
                <span
                  className={`text-white text-center ${poppins.className} font-medium text-3xl max-[525px]:text-2xl max-[425px]:text-lg`}
                >
                  Content Analyzer
                </span>
                <p className="text-center text-white font-light text-xl max-[525px]:text-[17px] max-[425px]:text-[12px]">
                  A robust tool designed for content creators, bloggers, and
                  writers
                </p>
                <Image
                  className="w-14 max-[525px]:w-10 max-[425px]:w-6"
                  src={Git.src}
                  alt="Git"
                  width={Git.width}
                  height={Git.height}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <div className="w-[70vw]">
            <span
              className={`text-white ${poppins.className} text-[24px] text-end`}
            >
              Skills
            </span>
            <div className="w-full flex py-[20px] rounded-lg">
              <div className="bg-[#7733FF] w-[70%] h-2"></div>
              <div className="bg-[#F7A21E] w-[30%] h-2"></div>
            </div>
            <div className="flex flex-wrap justify-center items-center  max-[767px]:justify-center gap-x-6 gap-y-6 w-full py-8">
              <button className="project-btn">Languages</button>
            </div>
            <div className="flex flex-wrap justify-center items-center  max-[767px]:justify-center gap-x-6 gap-y-6 w-full py-8">
              <Languages images={languages} />
            </div>
          </div>
        </div>
        <div
          className="flex justify-center pt-8"
          ref={section4Ref}
          id="#section4"
        >
          <div className="w-[70vw]">
            <span className={`text-white poppins text-[24px] `}>
              Certifications
            </span>
            <div className="w-full flex py-[20px] rounded-lg">
              <div className="bg-[#7733FF] w-[70%] h-2"></div>
              <div className="bg-[#F7A21E] w-[30%] h-2"></div>
            </div>
            <div className="flex flex-wrap justify-center items-center  max-[767px]:justify-center gap-x-6 gap-y-6 w-full py-8">
              <Carousel images={images} />
            </div>
          </div>
        </div>
        <div className="w-[70vw]" ref={section2Ref} id="section2">
          <span className={`text-white poppins text-[24px] text-end`}>
            Experience
          </span>
          <div className="w-full flex py-[20px] rounded-lg">
            <div className="bg-[#7733FF] w-[70%] h-2"></div>
            <div className="bg-[#F7A21E] w-[30%] h-2"></div>
          </div>
          <div className="flex flex-wrap justify-evenly items-center  max-[767px]:justify-center gap-x-6 gap-y-6 w-full py-8">
            <button className="project-btn" onClick={() => setFormate(true)}>
              Experience
            </button>
            <button className="project-btn" onClick={() => setFormate(false)}>
              Education
            </button>
          </div>
          {formate ? (
            <div className="flex justify-center relative max-[1380px]:flex-col">
              <div className="absolute top-[168px] z-[1] max-[1380px]:left-[-42px]">
                <Image
                  className="w-[90px] rounded-full bg-[#2C2F38] p-3"
                  src={Logo.src}
                  alt="Logo"
                  width={Logo.width}
                  height={Logo.height}
                />
              </div>
              <div className="h-[900px] border-3 border-opacity-custom border-gray-700 absolute "></div>
              <div className="flex flex-col gap-x-8 gap-12 w-[90%] max-[1380px]:w-full">
                <div className="flex  justify-start w-full max-[1380px]:justify-end">
                  <div className="experiance-shadow w-[380px] rounded-2xl p-5 opacity-50">
                    <span className="text-white font-semibold text-[20px] ">
                      Full Stack Developer
                    </span>
                    <span className="text-white font-semibold pt-2">
                      Nrich Learning Pvt. Ltd | 07/2023 - Present
                    </span>
                    <p className="text-white  pt-2">
                      •Developed and maintained web applications using
                      JavaScript, React.js, Next.js, and Node.js, resulting in a
                      30 reduction in page load times. •Implemented RESTful APIs
                      with Express.js and managed database operations with
                      MongoDB, increasing data retrieval speed by 25%.
                      •Collaborated with cross-functional teams to design and
                      optimize user interfaces, leading to a 20% increase in
                      user satisfaction scores•Achieved a 20% increase in user
                      engagement by improving application performance and UX.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end w-full ">
                  <div className="experiance-shadow w-[380px] rounded-2xl p-5 opacity-50">
                    <span className="text-white font-semibold text-[20px] ">
                      Frontend Developer (ReactJs)
                    </span>
                    <span className="text-white font-semibold pt-2">
                      App Knit Pvt. Ltd | 08/2022 - 12/2022
                    </span>
                    <p className="text-white  pt-2">
                      •Started my tech career here and, in my role as a React.js
                      Frontend Developer, dedicated to crafting intuitive,
                      pixel-perfect interfaces that captivated users and
                      enhanced overall usability, leading to a 30% increase in
                      user retention. •Collaborated with designers to ensure a
                      seamless user experience and consistent visual design,
                      which resulted in a 25% decrease in bounce rates.
                      •Optimized web applications for maximum speed and
                      scalability, achieving a 35% improvement in load times.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[168px] z-[1] max-[1380px]:left-[-42px]">
                <Image
                  className="w-[90px] rounded-full bg-[#2C2F38] p-3"
                  src={Logo.src}
                  alt="Logo"
                  width={Logo.width}
                  height={Logo.height}
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-center relative max-[1380px]:flex-col">
              <div className="absolute top-[168px] z-[1] max-[1380px]:left-[-42px]">
                <Image
                  className="w-[90px] rounded-full bg-[#2C2F38] p-3"
                  src={Logo.src}
                  alt="Logo"
                  width={Logo.width}
                  height={Logo.height}
                />
              </div>
              <div className="h-[900px] border-3 border-opacity-custom border-gray-700 absolute "></div>
              <div className="flex flex-col gap-x-8 gap-12 w-[90%] max-[1380px]:w-full">
                <div className="flex  justify-start w-full max-[1380px]:justify-end">
                  <div className="experiance-shadow w-[380px] rounded-2xl p-5 opacity-50">
                    <span className="text-white font-semibold text-[20px] ">
                      Frontend Developement (Career Training)
                    </span>
                    <span className="text-white font-semibold pt-2">
                      Relevel | 01/2022 - 12/2022
                    </span>
                    <p className="text-white  pt-2">
                      •Learned Frontend Development including JavaScript, HTML,
                      CSS, and React.js, completing over 200 hours of hands-on
                      training. •Completed multiple projects and assignments to
                      build practical skills, resulting in a portfolio of 10+
                      projects•Gained a strong understanding of responsive web
                      design and accessibility best practices, improving project
                      accessibility scores by 30%.•Participated in coding
                      challenges and hackathons to enhance problem-solving
                      skills, achieving top 10 rankings in several events
                    </p>
                  </div>
                </div>
                <div className="flex justify-end w-full ">
                  <div className="experiance-shadow w-[380px] rounded-2xl p-5 opacity-50">
                    <span className="text-white font-semibold text-[20px] ">
                      Bachelor of Engineer (Mining)
                    </span>
                    <span className="text-white font-semibold pt-2">
                      Jawahar Lal Nehru College of Technology | 09/2012 -
                      06/2016
                    </span>
                    <p className="text-white  pt-2">
                      Mine Design and Planning: Develop detailed plans for the
                      layout and operation of mines, including the location of
                      tunnels, shafts, and processing facilities. Resource
                      Estimation: Assess the quantity and quality of the mineral
                      resources available at a site and determine the most
                      efficient and cost-effective methods for extraction.
                      Safety Management: Ensure that mining operations adhere to
                      strict safety standards to protect workers and surrounding
                      communities from hazards such as cave-ins, explosions, and
                      toxic exposures.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[168px] z-[1] max-[1380px]:left-[-42px]">
                <Image
                  className="w-[90px] rounded-full bg-[#2C2F38] p-3"
                  src={Logo.src}
                  alt="Logo"
                  width={Logo.width}
                  height={Logo.height}
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-[70vw]" ref={section1Ref} id="section1">
          <span className={`text-white poppins text-[24px] text-start`}>
            Contact Me
          </span>
          <div className="w-full flex py-[20px] rounded-lg">
            <div className="bg-[#7733FF] w-[70%] h-2"></div>
            <div className="bg-[#F7A21E] w-[30%] h-2"></div>
          </div>
          <div className="flex justify-center items-center py-[100px]">
            <div className="flex justify-center flex-wrap gap-x-[90px] gap-y-8 w-full">
              <div className="flex justify-center max-w-[380px] w-full boy-shadow my-4">
                <Image
                  className="max-w-[250px]"
                  src={Boy.src}
                  alt="Boy"
                  width={Boy.width}
                  height={Boy.height}
                />
              </div>
              <div className="flex justify-center flex-col gap-y-6">
                <input
                  className="input-shadow h-[60px] w-[400px] rounded-lg text-white px-6"
                  placeholder="Name*"
                />
                <input
                  className="input-shadow h-[60px] w-[400px] rounded-lg text-white px-6"
                  placeholder="Email ID*"
                />
                <textarea
                  className="input-shadow h-[200px] w-[400px] rounded-lg text-white px-6 pt-6"
                  placeholder="Message*"
                />
                <button className="project-btn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

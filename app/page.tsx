import React from "react";
import Image from "next/image";
import gdg from "./gdg.jpg";

const page = () => {
  return (
    <div className=" h-full justify-center  relative -z-20 motion-preset-slide-up-sm ">
      <section
        id="home"
        className="h-full flex flex-col gap-8 md:px-[15em] sm:px-2 px-4 py-32"
      >
        <div className="flex flex-col gap-2">
          <h3 className="scroll-m-20 text-3xl  font-semibold tracking-tight">
            Nguyen Binh
          </h3>
          <h3 className="scroll-m-20 text-2xl  italic tracking-tight">
            Student - Developer
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg">
            Hi there! I'm Binh, a sophomore student passionate about learning
            and building software to help everyone!
          </p>
          <p className="text-lg">
            {" "}
            I dedicate myself daily to building projects that enhance my skills
            and solve real-world problems. My goal is to make a positive impact
            through software while growing continuously. Learning and
            improvement drive me every step of the way.
          </p>
        </div>
        <div>
          <div className="mt-6">
            <h3 className="scroll-m-20 text-3xl  font-semibold tracking-tight">
              Work
            </h3>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src={gdg}
                  width={40}
                  height={40}
                  alt="gdg-logo"
                />
                <h2 className="text-xl font-semibold">
                  Google Developer Group on Campus - HCMIU
                </h2>
              </div>
              <h1 className="text-lg italic">Software Engineer</h1>
              <h1 className="text-lg italic">2023 - Now</h1>
              <ul className="list-disc px-5">
                <li>Helping building project</li>
                <li>Compete in Hackathon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="project"
        className="h-full flex flex-col gap-8 md:px-[15em] sm:px-2 px-4 py-32"
      >
        <center>
          {" "}
          <h1 className="font-bold text-2xl">My Project</h1>
        </center>
      </section>
    </div>
  );
};

export default page;

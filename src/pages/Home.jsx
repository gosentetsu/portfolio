import React from "react";
import favicon from "../assets/favicon.png";
import { Icon } from "@iconify/react";
function Home() {
  return (
    <div>
      <div class="max-w-3xl px-8 py-4 mx-auto mt-16 bg-white sm:rounded-lg sm:shadow-xl dark:bg-gray-800">
        <div class="flex justify-center -mt-16 md:justify-end">
          <img
            class="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
            alt="Testimonial avatar"
            src={favicon}
          />
        </div>

        <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
          Hello, this is gosentetsu.
        </h2>

        <section class="mt-8 text-gray-600 dark:text-gray-200 space-y-2">
          <p>
            Python is tasty. JavaScript is juicy. TypeScript is toothsome.
            PyTorch is creamy. Vue is yummy. Happen to know some React now. Java
            / C++ / Go, Express / SQL ... maybe? Still a long way to study
            computer science.
          </p>
          <p>
            Projects, a few. Publications, let's hope there will be one on its
            way. Work experience, none. Open source? Yup, yup! (Paimon noises)
          </p>
          <p>
            Postgrad at{" "}
            <a
              href="https://en.ustc.edu.cn/"
              className="text-blue-600 hover:underline"
            >
              USTC(University of Science and Technology of China)
            </a>
            , major in Software Engineer. Dream to be a full-stack.
          </p>
          <p>Decent sense of aesthetic. Hope that won't disappoint you.</p>
        </section>

        <div class="flex  justify-end space-x-2 mt-4">
          <a
            href="#"
            class="text-xl font-medium text-indigo-500 dark:text-indigo-300"
          >
            <Icon icon="akar-icons:github-fill" inline={true} />
          </a>
          <a
            href="#"
            class="text-xl font-medium text-indigo-500 dark:text-indigo-300"
          >
            <Icon icon="akar-icons:telegram-fill" inline={true} />
          </a>
          <a
            href="#"
            class="text-xl font-medium text-indigo-500 dark:text-indigo-300"
          >
            <Icon
              icon="ant-design:twitter-circle-filled"
              inline={true}
              className="scale-110"
            />
          </a>
          <a
            href="#"
            class="text-xl font-medium text-indigo-500 dark:text-indigo-300"
          >
            <Icon
              icon="ant-design:zhihu-circle-filled"
              inline={true}
              className="scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
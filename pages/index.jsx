import Head from "next/head";
import Layout from "../components/Layout";
import { Github, Telegram, Twitter } from "@icons-pack/react-simple-icons";
export default function Home() {
  return (
    <Layout>
      <div className="sm:m-8">
        <div className=" font-['Inter'] max-w-3xl px-8 py-4 mx-auto mt-16 md:rounded-lg md:shadow-xl md:bg-gray-50 md:dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
              alt=" avatar"
              src="/favicon.png"
            />
          </div>
          {/* in */}
          <h2 className="mt-2 text-2xl font-semibold `text-gray-800 dark:text-white md:mt-0 md:text-3xl">
            Hello, this is gosentetsu.
          </h2>

          <section className="mt-8 space-y-2 text-gray-600 dark:text-gray-200">
            <p>
              Python is tasty. JavaScript is juicy. TypeScript is toothsome.
              PyTorch is creamy. Vue is yummy. Happen to know some React now.
              Java / C++ / Go, Express / SQL ... maybe? Still a long way to
              study computer science.
            </p>
            <p>
              Projects, a few. Publications, let&#39;s hope there will be one on
              its way. Work experience, none. Open source? Yup, yup! (Paimon
              noises)
            </p>
            <p>
              Postgrad at{" "}
              <a
                href="https://en.ustc.edu.cn/"
                className="text-blue-600 hover:underline "
              >
                USTC(University of Science and Technology of China)
              </a>
              , major in Software Engineering. Dream to be a full-stack.
            </p>
            <p>
              Decent sense of aesthetic. Hope that won&#39;t disappoint you.
            </p>
          </section>
          {/*social link icons below */}
          <div className="flex justify-end mt-4 space-x-3 ">
            <a
              href="https://github.com/gosentetsu"
              className="text-xl font-medium text-indigo-500 hover:opacity-80 dark:text-indigo-300"
            >
              <Github />
            </a>
            <a
              href="https://t.me/gosentetsu"
              className="text-xl font-medium text-indigo-500 hover:opacity-80 dark:text-indigo-300"
            >
              <Telegram />
            </a>
            <a
              href="https://twitter.com/gosentetsu"
              className="text-xl font-medium text-indigo-500 hover:opacity-80 dark:text-indigo-300"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

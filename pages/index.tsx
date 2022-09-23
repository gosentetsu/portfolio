import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { TbBrandGithub, TbBrandTwitter, TbBrandTelegram } from "react-icons/tb";
const Home: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-4 m-12 rounded-2xl p-8 text-slate-400 shadow-2xl shadow-slate-900 backdrop-blur-3xl">
        <h2 className="mt-2 text-2xl font-semibold">
          Hello, this is gosentetsu.
        </h2>
        <section className="mt-8 space-y-2">
          <p>
            Python is tasty. JavaScript is juicy. TypeScript is toothsome.
            PyTorch is creamy. Vue is yummy. Happen to know some React now. Java
            / C++ / Go, Express / SQL ... maybe? Still a long way to study
            computer science.
          </p>
          <p>
            Projects, a few. Publications, let&#39;s hope there will be one on
            its way. Work experience, none. Open source? Yup, yup! (Paimon
            noises)
          </p>
          <p>
            Postgrad at
            <a
              href="https://en.ustc.edu.cn/"
              className="duration-500 ease-in-out hover:text-slate-300"
            >
              {" "}
              USTC(University of Science and Technology of China){" "}
            </a>
            , major in Software Engineering. Dream to be a full-stack.
          </p>
          <p>Decent sense of aesthetic. Hope that won&#39;t disappoint you.</p>
        </section>
        <div className="mt-4 flex justify-end space-x-3 ">
          <a
            href="https://github.com/gosentetsu"
            className="text-slate-300 hover:text-slate-400 text-xl font-medium "
          >
            <TbBrandGithub></TbBrandGithub>
          </a>
          <a
            href="https://t.me/gosentetsu"
            className="text-slate-300 hover:text-slate-400 text-xl font-medium "
          >
            <TbBrandTelegram />
          </a>
          <a
            href="https://twitter.com/gosentetsu"
            className="text-slate-300 hover:text-slate-400 text-xl font-medium "
          >
            <TbBrandTwitter />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

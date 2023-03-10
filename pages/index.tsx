import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { TbBrandGithub, TbBrandTwitter, TbBrandTelegram } from "react-icons/tb";
import useLoaded from "@/hooks/useLoaded";
import clsx from "clsx";
const contactLinks = [
  {
    name: "github",
    icon: TbBrandGithub,
    href: "https://github.com/gosentetsu",
  },
  {
    name: "telegram",
    icon: TbBrandTelegram,
    href: "https://t.me/gosentetsu",
  },
  {
    name: "twitter",
    icon: TbBrandTwitter,
    href: "https://twitter.com/gosentetsu",
  },
];

const Home: NextPage = () => {
  const loaded = useLoaded();
  return (
    <Layout>
      <div
        className={clsx(
          loaded && "fade-in-start",
          "m-2 max-w-2xl rounded-2xl p-8 text-slate-400 shadow-2xl shadow-slate-900 backdrop-blur-3xl sm:mx-auto"
        )}
      >
        <h2 data-fade="1" className="mt-2 text-2xl font-semibold">
          Hello, this is gosentetsu.
        </h2>
        <section data-fade="2" className="mt-8 space-y-2">
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
            , major in Software Engineering.
          </p>
          <p>Decent sense of aesthetic. Hope that won&#39;t disappoint you.</p>
        </section>
        <div data-fade="3" className="mt-4 flex justify-end space-x-3 ">
          {contactLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-medium text-slate-300 hover:text-slate-400 "
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

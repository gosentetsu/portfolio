import type { Metadata, NextPage } from "next";
import { TbBrandGithub, TbBrandTwitter, TbBrandTelegram } from "react-icons/tb";
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

export const metadata: Metadata = {
  title: "Gosentetsu's website",
};

const Home: NextPage = (props) => {
  return (
    <div
      className={clsx(
        "fade-in-start",
        "m-2 max-w-2xl rounded-2xl p-8 text-slate-400 shadow-2xl shadow-slate-900 backdrop-blur-3xl sm:mx-auto"
      )}
    >
      <h1 className="font-mono font-bold">
        This website is under construction...
      </h1>
    </div>
  );
};

export default Home;

import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from "components/icons";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { name, about, bio, avatar } from "lib/info";
const inter = Inter({ subsets: ["latin"] });
export const revalidate = 60;

export const metadata = {
  description: "Developer, write, and creator.",
  openGraph: {
    title: "Adam Gonzalez",
    description: "Developer, writer, and creator",
    url: "https://adamgonz.io",
    siteName: "Adam Gonzalez",
    images: [
      {
        url: "https://adamgonz.io/orig.jpeg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-Us",
    type: "website",
  },
};

export default async function HomePage() {
  return (
    <section className="">
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        {/* <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <p className="flex items-center gap-2">
            <TwitterIcon />
            {`${tweetCount.toLocaleString()} tweets all time`}
          </p>
          <p className="flex items-center gap-2">
            <GitHubIcon />
            {`${starCount.toLocaleString()} stars on this repo`}
          </p>
          <p className="flex items-center">
            <ViewsIcon />
            {`${views.toLocaleString()} blog views all time`}
          </p>
        </div> */}
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li key="mainPage">
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adamgonzo"
          >
            <ArrowIcon />
            <p className="h-7">follow me on Github</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

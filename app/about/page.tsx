import { ArrowIcon, LinkIcon } from "components/icons";
import Link from "next/link";

export const metadata = {
  title: "About ",
  description: "Freelance Web Developer.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I&apos;m Adam Gonzalez.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I&apos;m currently a Freelance Developer! As a Freelance Web
          Developer, my goal is to create visually stunning and vibrant
          websites. I place a strong emphasis on ensuring the websites{" "}
          <b>I design are both high-quality and user-friendly.</b> My aim is to
          always meet my clients needs and exceed their expectations in the
          final product.
        </p>
        <hr />
        <p>
          My passion for creative pursuits, such as music, sports, movies, and
          coding, ultimately led me to my role as a Freelance Web Developer.
        </p>
        <p>
          I have a <b>deep love</b> for building for the web. My expertise
          ranges from simple HTML files to complex React or Next.js
          applications. The web is an amazing platform, as it allows anyone to
          become a developer, writer, or creator without the need for
          permission. The freedom to just build and create is what makes the web
          so incredible.
        </p>
        <p className="mb-8">
          In my free time, I love to engage in activities such as{" "}
          <b>
            playing softball, watching movies, and continuously expanding my
            knowledge as a developer
          </b>
          . As a full-stack engineer, I am actively seeking a full-time role and
          am dedicated to enhancing my development skills during my job search.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <Link
            href="/contact"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkIcon />
              <div className="ml-3">Links</div>
            </div>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

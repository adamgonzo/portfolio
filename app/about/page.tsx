import { ArrowIcon, LinkIcon } from "components/icons"
import Link from "next/link"

export const metadata = {
  title: "About ",
  description: "Freelance Web Developer.",
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">
        Hey, I&apos;m Adam Gonzalez
      </h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <br></br>
        <p>
          I&apos;m currently a freelance web developer with a passion for
          creating websites that are not only functional, but also visually
          captivating and easy to use. My ultimate goal is to push the
          boundaries of web design and create websites that truly stand out. To
          me, web design is all about balance. I strive to find the perfect
          balance between aesthetics and usability in all of my projects. Every
          detail, from the color scheme to the typography, is carefully
          considered to ensure that the final product meets my own high
          standards of excellence.
        </p>
        <hr />
        <p>
          I have <b>discovered</b> that my passion for creativity extends beyond
          coding. I find joy in exploring a range of hobbies, including playing
          music, practicing sports, watching movies, and, of course, coding.
        </p>
        <p>
          Building for the web is my <b>passion</b>. From creating simple HTML
          pages to developing complex React or Next.js applications, I find{" "}
          <b>joy</b> in every step of the process. What I love most about the
          web is its accessibility. It&apos;s a platform that allows anyone,
          regardless of background or experience, to become a developer, writer,
          or creator. The ability to freely build and create without any
          barriers is what makes the web so amazing to me.
        </p>
        <p className="mb-8">
          In my free time, I love to engage in activities such as{" "}
          <b>
            playing softball, watching movies, and continuously expanding my
            knowledge as a developer
          </b>
          . As a full-stack engineer, I am actively seeking a full-time position
          and am dedicated to enhancing my development skills during my career
          search.
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
  )
}

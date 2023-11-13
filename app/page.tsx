import { ArrowIcon } from '@/app/components/icons'
import Image from 'next/image'
import { name, about, bio, dark_contact } from 'lib/info'
import Link from 'next/link'
import skillsPhoto from '@/public/images/homeImages/skills.png'
import toolsPhoto from '@/public/images/homeImages/tools.png'

export const metadata = {
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Adam Gonzalez',
    description: 'Developer, writer, and creator',
    url: 'https://adamgonzo.com',
    siteName: 'Adam Gonzalez',
    images: [
      {
        url: 'https://adamgonzo.com/og-bg.png',
        width: 1920,
        height: 1080
      }
    ],
    locale: 'en-Us',
    type: 'website'
  }
}

export default async function HomePage() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="flex flex-col ">
        <h1 className="font-serif text-3xl font-bold">{name}</h1>
        <span className="font-light">Full Stack Engineer</span>
        <span className="font-extralight">San Francisco, California</span>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className=" grayscale rounded-full"
          src={dark_contact}
          width={110}
          placeholder="blur"
          priority
        />
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200 font-shantel">
        {bio()}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="dark:bg-[#667d9b] rounded-2xl flex flex-col dark:shadow-white border-8 shadow-black shadow-lg  border-double border-black p-2">
          <span className="text-xl flex justify-center mb-2 mt-2 text-yellow-600 font-extrabold">
            Programming Skills
          </span>
          <p className="text-center text-md dark:text-white text-black font-light mb-2">
            I excel in TypeScript, JavaScript, and Python, seamlessly
            integrating frontend and backend technologies. My expertise in
            React.js ensures dynamic user interfaces, while Tailwind CSS adds
            visual finesse. I specialize in creating immersive user experiences,
            crafting polished applications with a seamless blend of design and
            functionality.
          </p>
          <Image
            src={skillsPhoto}
            alt="Skill"
            className="self-center mt-2 md:w-[40%] md:h-[60%] w-[auto] h-[auto]"
          />
        </div>
        <div className="dark:bg-[#667d9b] rounded-2xl flex flex-col dark:shadow-white border-8 shadow-black shadow-lg border-double border-black p-2 ">
          <span className="text-xl flex justify-center mb-2 mt-2 text-yellow-600 font-extrabold">
            Programming Tools
          </span>

          <p className="text-center text-md dark:text-white text-black font-light mb-2">
            As a developer, I rely daily on Vim, VSCode, Git, Postman,
            Bootstrap, and PostgreSQL. These tools enable me to efficiently
            write code, collaborate with others, test APIs, build responsive
            UIs, and persist data. I also use other tools as well to help me be
            productive. Together, my core set of developer tools and others help
            me be productive.
          </p>
          <div className="flex justify-center mt-auto">
            <Image
              src={toolsPhoto}
              alt="temp"
              className="self-center mt-2 md:w-[40%] md:h-[100%] w-[auto] h-[auto]"
            />
          </div>
        </div>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400 justify-between">
        <li key="mainPage">
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adamgonzo"
          >
            <ArrowIcon />
            <p className="h-7">Follow Me On Github</p>
          </a>
        </li>
        <li className="mainPage">
          <Link
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/adam-gonzalez-jr/"
          >
            <ArrowIcon />
            <p className="h-7">Follow Me On Linkedin</p>
          </Link>
        </li>
      </ul>
    </section>
  )
}

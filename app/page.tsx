import { ArrowIcon } from 'components/icons'
import Image from 'next/image'
import { name, about, bio, avatar } from 'lib/info'

export const metadata = {
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Adam Gonzalez',
    description: 'Developer, writer, and creator',
    url: 'https://adamgonz.io',
    siteName: 'Adam Gonzalez',
    images: [
      {
        url: 'https://adamgonz.io/orig.jpeg',
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
      <h1 className="font-serif text-3xl font-bold">{name}</h1>
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
          height={100}
          priority
        />
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200 font-shantel">
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
  )
}

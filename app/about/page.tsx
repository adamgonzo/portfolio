export const metadata = {
  title: 'About',
  description: 'Freelance Web Developer info for about me section'
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">
        Hey, I&apos;m Adam Gonzalez
      </h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <br />
        <p>
          As an aspiring web developer, I&apos;m eager to apply my passion for
          creating functional yet visually appealing websites. While I&apos;m
          still working to master the complexities of web development, I aim to
          eventually push boundaries and make sites that are truly exceptional.
          For now, I&apos;m focused on honing my skills in order to build
          websites that balance usability and aesthetics.
        </p>
        <hr />
        <p>
          I have <b>discovered</b> that my passion for creativity extends beyond
          coding. I find joy in exploring a range of hobbies, including playing
          music, practicing sports, watching movies, and, of course, coding.
        </p>
        <p>
          As a new web developer, I&apos;m extremely <strong>passionate</strong>{' '}
          about building for the web. I find <strong>joy</strong> in each step
          of the development process, from writing HTML to coding complex
          frameworks like React. What excites me most is the web&apos;s
          accessibility - it allows anyone to become a creator, regardless of
          their background.
        </p>
        <p className="mb-8">
          In my free time, I love to engage in activities such as{' '}
          <b>
            playing softball, watching movies, and continuously expanding my
            knowledge as a developer
          </b>
          . As a full-stack engineer, I am actively seeking a full-time position
          and am dedicated to enhancing my development skills during my career
          search.
        </p>
      </div>
    </section>
  )
}

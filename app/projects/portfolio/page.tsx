'use client'

export default function Page() {
  return (
    <section>
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <span className="text-2xl font-bold">Adam Gonzalez</span>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Portfolio Website 💻</h1>

        <p className="mb-8">
          Welcome to my portfolio website repository! In this space, I&apos;ve
          crafted a digital representation of my journey as a software engineer,
          showcasing my skills, projects, and a glimpse into who I am.
        </p>

        <h2 className="text-2xl font-bold mb-2">Pages 📄</h2>
        <ul className="list-disc pl-6 mb-8">
          <li>
            <strong>Home Page:</strong> The starting point that highlights my
            skills and the programming tools I&apos;m proficient with.
          </li>
          <li>
            <strong>About Me Page:</strong> A little insight into who I am, my
            passions, and what drives me as a software enthusiast.
          </li>
          <li>
            <strong>Projects Page:</strong> A collection of some of my best
            projects, each accompanied by detailed markdowns providing an
            in-depth look into their functionality and purpose.
          </li>
          <li>
            <strong>Blog Page:</strong> A platform where I share my thoughts,
            experiences, and insights related to the world of programming and
            technology.
          </li>
          <li>
            <strong>Contact Page:</strong> Similar to a Linktree, this page acts
            as a central hub for connecting with me across various platforms.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">How to View the Website 👀</h2>
        <p className="mb-8">
          To explore my portfolio, click on the link to the deployed website in
          the repository description or open it using your preferred browser.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          How to Use the Repository 🍴
        </h2>
        <p className="mb-8">
          If you find inspiration in my portfolio and wish to build your own,
          feel free to fork this repository. Modify it to suit your style and
          preferences, creating a unique digital space that represents you.
        </p>

        <h2 className="text-2xl font-bold mb-2">Technologies Used 🛠️</h2>
        <ul className="list-disc pl-6 mb-8">
          <li>HTML</li>
          <li>Tailwindcss</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Next.Js</li>
          <li>React</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">
          Installation Instructions ⬇️
        </h2>
        <ol className="list-decimal pl-6 mb-8">
          <li>Clone the repository to your local machine using Git.</li>
          <li>
            Install the necessary dependencies:{' '}
            <code className="bg-gray-200 p-1 rounded">npm install</code>.
          </li>
          <li>Open the repository in your preferred code editor.</li>
          <li>
            Customize the code to reflect your skills, projects, and personal
            style.
          </li>
          <li>
            Run the app locally:{' '}
            <code className="bg-gray-200 p-1 rounded">npm run dev</code>.
          </li>
          <li>Save your changes and push them to your forked repository.</li>
        </ol>

        <p className="text-gray-600">
          This project is bootstrapped with{' '}
          <a href="https://nextjs.org/" className="text-blue-500">
            Next.js
          </a>{' '}
          using{' '}
          <a
            href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app"
            className="text-blue-500"
          >
            create-next-app
          </a>
          . Feel free to explore, learn, and make it your own!
        </p>
      </div>
    </section>
  )
}

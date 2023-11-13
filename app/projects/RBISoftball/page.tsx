'use client'

export default function Page() {
  return (
    <section>
      <article className="prose lg:prose-xl max-w-full mx-auto">
        <header>
          <h1 className="text-4xl font-bold mb-4">RBI Softball Project</h1>
          <p className="text-gray-600">Published on February 24, 2023</p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">
            Softball League Stats Tracker
          </h2>
          <p>
            This is a web-based application designed to track the stats of a
            current softball league. The application is built using Plantscale
            database for efficient data management.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-2">Features</h3>
          <ul className="list-disc pl-6">
            <li>
              Keep track of team and player stats, such as batting average, home
              runs, RBIs, and more.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-2">Getting Started</h3>
          <p>
            To use the Softball League Stats Tracker, you will need to have a
            Plantscale database account. You can sign up for a free account at{' '}
            <a href="https://plantscale.com" className="text-blue-500">
              plantscale.com
            </a>
            .
          </p>
          <p>
            Once you have a Plantscale account, you can clone this repository
            and run the application on your local machine. To do this, you will
            need to have Node.js and npm installed.
          </p>
          <code className="bg-gray-200 p-1 rounded">npm install</code>
          <p>
            Next, you will need to create a{' '}
            <code className="bg-gray-200 p-1 rounded">.env</code> file and set
            the following environment variables:
          </p>
          <pre className="bg-gray-200 p-2 rounded">
            DATABASE_URL = your_plantscale_database_url SESSION_SECRET =
            your_session_secret_key
          </pre>
          <p>Finally, run the following command to start the application:</p>
          <code className="bg-gray-200 p-1 rounded">npm start</code>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-2">Contributing</h3>
          <p>
            Contributions are welcome! If you would like to contribute to this
            project, please open a pull request or submit an issue.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-2">License</h3>
          <p>
            This project is licensed under the{' '}
            <a href="#" className="text-blue-500">
              MIT License
            </a>
            .
          </p>
        </section>
      </article>
    </section>
  )
}

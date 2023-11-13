'use client'
export default function Page() {
  return (
    <section>
      <article className="prose lg:prose-xl max-w-full mx-auto">
        <header>
          <h1 className="text-4xl font-bold mb-4">
            Bay City General Glass Project
          </h1>
          <p className="text-gray-600">Published on October 24, 2023</p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">
            Bay-City-New-Site Repository
          </h2>
          <p>
            Welcome to the Bay City Glass New Site repository! This website is
            built using Next.js and features a variety of functionalities to
            showcase our services and projects.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Features</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Contact Form with SendGrid API:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Easily get in touch with us through our contact form. Leave
                  your name, email, and a message. Prefer a call? There&apos;s
                  also a &quot;Call Me&quot; button for your convenience.
                </li>
              </ul>
            </li>
            <li>
              <strong>Gallery Page:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Explore our work through our gallery page. View stunning
                  showers, store fronts, and glass railings. More categories
                  coming soon!
                </li>
              </ul>
            </li>
            <li>
              <strong>Home Page:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Residential and Commercial Sections:</strong>
                  <ul className="list-disc pl-6">
                    <li>
                      Choose between residential and commercial services right
                      from the home page.
                    </li>
                    <li>
                      Click &quot;More Information&quot; to navigate to detailed
                      pages for each category.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Information and Services:</strong>
                  <ul className="list-disc pl-6">
                    <li>
                      Find information about our services directly on the home
                      page.
                    </li>
                    <li>
                      Quick access to our contact form for further inquiries.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Technologies Used</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Framework:</strong> Next.js
            </li>
            <li>
              <strong>Styling:</strong> react, react-bootstrap, tailwindcss, and
              CSS
            </li>
            <li>
              <strong>API Integration:</strong> SendGrid for contact form
              submissions
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <p className="mb-4">
            Feel free to explore our codebase and contribute to making our
            website even better!
          </p>
          <p className="mb-4">
            For any questions or collaborations, please don&apos;t hesitate to{' '}
            <a
              href="https://www.baycitygeneralglass.net/contact"
              className="text-blue-500"
            >
              contact us
            </a>
            . Thank you.
          </p>
        </section>
      </article>
    </section>
  )
}

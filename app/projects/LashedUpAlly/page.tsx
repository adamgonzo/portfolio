'use client'

export default function Page() {
  return (
    <section>
      <article className="prose lg:prose-xl max-w-full mx-auto">
        <header>
          <h1 className="text-4xl font-bold mb-4">Lashes By Ally</h1>
          <p className="text-gray-600">Published on March 24, 2022</p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">
            Exploring LashedUpAlly: A Stylish Eyelash Studio Website
          </h2>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-2">Introduction</h3>
          <p>
            In the vibrant world of beauty and self-expression,{' '}
            <strong>LashedUpAlly</strong> stands out as a unique and stylish
            eyelash studio. The website, elegantly designed and developed using
            React, showcases the artistry of Allycia, a professional eyelash
            stylist. In this blog post, we&apos;ll take a closer look at the key
            features of the website and what makes it a go-to destination for
            eyelash enthusiasts.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-2">
            Unveiling the Website Structure
          </h3>

          <h4 className="text-lg font-bold mb-2">
            App.js - The Heart of the React App
          </h4>
          <p>
            The entry point of the React application,{' '}
            <code className="bg-gray-200 p-1 rounded">App.js</code>,
            orchestrates the main structure of the website. It incorporates
            components such as{' '}
            <code className="bg-gray-200 p-1 rounded">Header</code>,{' '}
            <code className="bg-gray-200 p-1 rounded">About</code>,{' '}
            <code className="bg-gray-200 p-1 rounded">SwiperImage</code>,{' '}
            <code className="bg-gray-200 p-1 rounded">Contact</code>, and{' '}
            <code className="bg-gray-200 p-1 rounded">Footer</code> to create a
            seamless user experience. The website&apos;s content is powered by a
            dedicated <code className="bg-gray-200 p-1 rounded">Data</code>{' '}
            file, making it easy to update information dynamically.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-2">Conclusion</h3>
          <p>
            LashedUpAlly&apos;s website, built with React, not only reflects the
            professionalism of Allycia but also offers a delightful journey for
            visitors exploring the world of eyelash styling. The thoughtful
            design, informative content, and easy navigation make it a standout
            destination for those seeking expert eyelash services. Whether
            you&apos;re a beauty enthusiast or someone looking to enhance your
            natural allure, LashedUpAlly welcomes you to a world of beauty and
            style. Visit the website today to discover the artistry behind the
            lashes:{' '}
            <a href="https://www.lashedupally.com" className="text-blue-500">
              LashedUpAlly
            </a>
            .
          </p>
        </section>
      </article>
    </section>
  )
}

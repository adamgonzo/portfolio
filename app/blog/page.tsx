import Blogs from "@/components/blogs"

export const metadata = {
  title: "About ",
  description: "Freelance Web Developer.",
}

export default function BlogsPage() {
  return (
    <section>
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        <Blogs />
      </main>
    </section>
  )
}

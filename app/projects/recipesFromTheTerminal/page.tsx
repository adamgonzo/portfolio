'use client'

export default function Page() {
  return (
    <main>
      <article className="prose lg:prose-xl max-w-full mx-auto">
        <header>
          <h1 className="text-4xl font-bold mb-4">
            Recipes From The Terminal Project
          </h1>
          <p className="text-gray-600">Published on May 24, 2023</p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Recipe App</h2>
          <p>
            This is a simple recipe app that allows a user to search for recipes
            by ingredient. It uses the{' '}
            <a
              href="https://spoonacular.com/food-api"
              className="text-blue-500"
            >
              Spoonacular API
            </a>{' '}
            to get recipe data.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Example</h2>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="p-4 border rounded bg-white">
              <h3 className="text-xl font-semibold mb-2">food.py</h3>
              <p>
                Contains the Food class that handles interacting with the
                Spoonacular API to get recipe data.
              </p>
            </div>
            <div className="p-4 border rounded bg-white">
              <h3 className="text-sm font-semibold mb-2">home_cook.py</h3>
              <p>Contains HomeCook class to manage recipe data and printing.</p>
            </div>
            <div className="p-4 border rounded bg-white">
              <h3 className="text-xl font-semibold mb-2">main.py</h3>
              <p>Main app code and user interaction loop.</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Setup</h2>
          <p>
            The Spoonacular API key is hardcoded - this should be set as an
            environment variable or config for security.
          </p>
          <p>Install dependencies:</p>
          <code className="bg-gray-200 p-1 rounded">
            pip install -r requirements.txt
          </code>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Usage</h2>
          <p>
            Run <code className="bg-gray-200 p-1 rounded">python main.py</code>
          </p>
          <p>
            Enter an ingredient name like &quot;chicken&quot; to search for
            chicken recipes. Select a recipe to view the ingredients and
            instructions.
          </p>
          <p>
            Enter &quot;n&quot; to exit or any key to search for another recipe.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Next Steps</h2>
          <ul className="list-disc pl-6">
            <li>Add user accounts to save favorite recipes</li>
            <li>
              <s>Improve recipe formatting for printing</s>
            </li>
            <li>
              <s>Add option to print/export recipe to PDF</s>
            </li>
            <li>Expand search options beyond single ingredient</li>
          </ul>
        </section>
      </article>
    </main>
  )
}

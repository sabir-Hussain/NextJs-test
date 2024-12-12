import PostCard from '@/components/PostCard'

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto p-8">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                From the blog
              </h2>
              <p className="mt-2 text-lg/8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
              <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                <PostCard />
                <PostCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

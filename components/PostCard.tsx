const PostCard = () => {
  return (
    <article
      key=""
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <div className="group relative">
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
          <a href="/">
            <span className="absolute inset-0" />
            Boost your conversion rate
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
          ullam et saepe reiciendis voluptatem adipisci\nsit amet autem
          assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur
          doloremque ipsam iure\nquis sunt voluptatem rerum illo velit
        </p>
      </div>
    </article>
  )
}

export default PostCard

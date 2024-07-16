const form = () => {
  return (
    <>
      <div class="main w-full min-h-screen bg-zinc-900">
        <div class="form p-10 text-white">
          <form action="">
            <input
              type="text"
              class="block w-full rounded-md outline-none px-5 py-2 bg-zinc-800"
              placeholder="Title here"
              name="title"
              id=""
            />
            <textarea
              type="text"
              class="block w-full rounded-md outline-none text-white px-5 py-2 bg-zinc-800 resize-none mt-2"
              placeholder="Desc here"
              name=""
              id=""
            ></textarea>
            <input
              type="submit"
              class="mt-2 bg-blue-600 px-5 py-2 rounded-md"
              value="Create Task"
            />
          </form>
        </div>
        <div class="tasks p-10 flex flex-wrap p-10 gap-3">
          <div class="task hidden w-72 px-3 py-4 rounded-md bg-zinc-800">
            <h1 class="text-white text-3xl tracking-tighter">
              Some task is here manlo
            </h1>

            <a href="" class="text-blue-500 inline-block mt-3">
              Read more
            </a>
          </div>
          <div class="task hidden w-72 px-3 py-4 rounded-md bg-zinc-800">
            <h1 class="text-white text-3xl tracking-tighter">
              Some task is here manlo
            </h1>

            <a href="" class="text-blue-500 inline-block mt-3">
              Read more
            </a>
          </div>
          <div class="task hidden w-72 px-3 py-4 rounded-md bg-zinc-800">
            <h1 class="text-white text-3xl tracking-tighter">
              Some task is here manlo
            </h1>

            <a href="" class="text-blue-500 inline-block mt-3">
              Read more
            </a>
          </div>
          <h3 class="text-zinc-400">No task yet</h3>
        </div>
      </div>
    </>
  );
};

export default form;

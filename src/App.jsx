import "./App.css";

function App() {
  return (
    <div >
      <h1 className="text-3xl font-medium underline">Hello world!</h1>
     <div className="justify-center flex space-x-4">
      <a
        class="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
        href="/download"
      >
        <span class="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

        <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          Download
        </span>
      </a>

      <a
        class="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
        href="/download"
      >
        <span class="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

        <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          Download
        </span>
      </a>

      <a
        class="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
        href="/download"
      >
        <span class="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

        <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          Download
        </span>
      </a>

      <a
        class="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
        href="/download"
      >
        <span class="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

        <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          Download
        </span>
      </a>


     </div>
      <div className="flex justify-center space-x-4">
        

<a
  class="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
  href="/download"
>
  <span
    class="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
  >
    Find out more
  </span>

  <span
    class="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
  >
    <svg
      class="h-5 w-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>


<a
  class="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
  href="/download"
>
  <span class="font-medium transition-colors group-hover:text-white"> Find out more </span>

  <span
    class="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
  >
    <svg
      class="h-5 w-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>
</div>
    </div>
  );
}

export default App;

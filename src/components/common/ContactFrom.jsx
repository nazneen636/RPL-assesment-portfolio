import { useForm } from "react-hook-form";

export default function ContactForm() {
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="container">
      <div className="grid grid-cols-3 gap-5 my-10">
        <div class="col-span-2 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 ">
          <h1 className="text-3xl font-bold text-center opacity-90">
            Send Me a Message
          </h1>
          <form class="space-y-6" action="#">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-center opacity-90 mb-10">
            Contact Address
          </h1>
          <div className="text-xl font-medium">
            Email: <span className="text-lg opacity-80">rimann@gmail.com</span>
          </div>
          <div className="text-xl font-medium">
            phone: <span className="text-lg opacity-80">rimann@gmail.com</span>
          </div>
          <div className="text-xl font-medium">
            Address:{" "}
            <span className="text-lg opacity-80">rimann@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

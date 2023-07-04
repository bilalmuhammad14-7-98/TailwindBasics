import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-green-600">Hello world!</h1>

      <h1 className="text-yellow-400">Hello world!</h1>

      <h1 className="bg-green-500 text-white">Hello world!</h1>

      <h1 className="border-2 border-green-700">Hello world!</h1>

      <h1 className="text-vuejs">Hello world!</h1>

      <p className="text-xs sm:text-base md:text-lg lg:text-3xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        corporis!
      </p>

      <p className="">Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}

import Imagecard from "@/components/Imagecard";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <main className="max-w-[80%] mx-auto ">
      <div className="w-full flex">
        <div className="w-[60%]"></div>
        <div className="flex-1">
          <Input placeholder="search..." />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
      </div>
      <div className=""></div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4">
        <Imagecard />
        <Imagecard />
      </div>

      <div className="flex ">
        <div className="w-full grid grid-cols-1  lg:grid-cols-2">
          <Imagecard />
          <Imagecard />
          <Imagecard />
          <Imagecard />
        </div>
        <div className="w-full grid-cols-1">
          <Imagecard />
        </div>
      </div>
    </main>
  );
}

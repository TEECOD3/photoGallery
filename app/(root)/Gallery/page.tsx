import Imagecard from "@/components/Imagecard";
import { Input } from "@/components/ui/input";
import getimages from "@/lib/get-images";
export default async function Home() {
  const imagesdata = await getimages();

  return (
    <main className="max-w-[80%] mx-auto ">
      <div className="w-full flex">
        <div className="lg:w-[60%]"></div>
        <div className="flex-1">
          <Input placeholder="search..." />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
        {imagesdata.slice(0, 4).map((image: imageprops) => (
          <Imagecard key={image.id} imagedat={image} />
        ))}
      </div>
      <div className=""></div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4">
        {imagesdata.slice(4, 6).map((image: imageprops) => (
          <Imagecard key={image.id} imagedat={image} />
        ))}
      </div>

      <div className="flex mt-4 ">
        <div className="w-full grid grid-cols-1  lg:grid-cols-3 gap-x-4 gap-y-4">
          {imagesdata.slice(6, 9).map((image: imageprops) => (
            <Imagecard key={image.id} imagedat={image} />
          ))}
        </div>
      </div>
      <div className="flex mt-4 ">
        <div className="w-full grid grid-cols-1 ">
          {imagesdata.slice(-1).map((image: imageprops) => (
            <Imagecard key={image.id} imagedat={image} />
          ))}
        </div>
      </div>
    </main>
  );
}

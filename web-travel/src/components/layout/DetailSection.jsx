import spanLabel from "./TripLabel";
import { Link } from "react-router-dom";


const DetailSection = ({label, name, location, benefits, price, gallery, setIsModal, setGallery, isModal}) => {
  return (
    <div className="lg:py-5 detail flex flex-col w-full flex-1 self-center overflow-hidden	">
            {spanLabel(label)}
            <h2 className="text-4xl font-semibold">{name}</h2>
            <p className="text-lg">{location}</p>
            <h3 className="mt-4">Benefits:</h3>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <span className="mt-4 flex items-center justify-between">
              <p className="text-2xl font-bold">IDR {price}K</p>
              <Link
                to="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg bg-slate-50 border-2 border-neutral-800 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full max-w-40 text-nowrap"
              >
                {/* <i className="mr-3 fa-solid fa-arrow-left"></i> */}
                Order Now
              </Link>
            </span>
            <div className="my-5 w-full border border-gray-300 h-0"></div>
            <h3 className="mb-2 text-xl font-semibold">Gallery</h3>
            <span className="overflow-auto flex items-center gap-5">
              {gallery.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  className="min-w-52 h-32 rounded-xl object-cover object-center hover:opacity-65 duration-300 cursor-pointer"
                  onClick={() => {
                    setIsModal(!isModal);
                    setGallery(image);
                  }}
                ></img>
              ))}
            </span>
          </div>
  )
}

export default DetailSection;
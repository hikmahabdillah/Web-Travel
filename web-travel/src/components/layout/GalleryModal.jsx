const GalleryModal = ({ image, Click }) => {
  return (
    <>
      <div
        className="z-10 fixed bg-black/60 min-h-screen w-full flex justify-center items-center p-5"
        onClick={Click}
      >
        <div className="bg-slate-50 modal rounded-lg p-5">
          <img
            src={image}
            alt=""
            className="max-w-[450px] rounded-lg w-full object-cover h-auto max-h-[32rem]"
          />
        </div>
      </div>
    </>
  );
};

export default GalleryModal;

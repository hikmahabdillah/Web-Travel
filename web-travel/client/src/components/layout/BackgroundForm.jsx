const BackgroundForm = (props) => {
  const { src, alt } = props;
  return (
    <div className="bg-login flex-1">
      <img
        className="object-cover object-center w-full h-full max-h-[550px]"
        src={src}
        alt={alt}
      />
    </div>
  );
};
export default BackgroundForm;

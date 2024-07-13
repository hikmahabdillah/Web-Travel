const NotFoundPage = () => {
  return (
    <div className="not-found min-h-screen bg-neutral-800 grid place-items-center place-content-center">
      <img
        className="absolute top-14 z-10 mix-blend-soft-light"
        src="https://ouch-cdn2.icons8.com/-gutrudpqC5bA7CEoVKzdHiEjKqYHxp7ioRaX1URQvc/rs:fit:368:502/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzI1/LzMzMTA5M2NmLWVj/Y2YtNDM4ZC04NmRh/LWVkZTFhM2VkZTU1/My5zdmc.png"
        alt=""
        width={"300px"}
      />
      <h1 className="text-9xl font-bold text-slate-100 ">404</h1>
      <h2 className="text-center text-2xl text-yellow-400 font-semibold">
        Page Not Found!
      </h2>
    </div>
  );
};

export default NotFoundPage;

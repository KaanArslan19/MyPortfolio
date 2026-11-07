const ErrorPage = () => {
  return (
    <div className="h-screen">
      <div className="app__wrapper app__container app__flex">
        <h1 className="text-center">Something went wrong!</h1>
        <a
          href="/"
          className="mt-4 rounded-full bg-secondary-color px-6 py-3 text-white-color no-underline hover:opacity-90"
        >
          Return to the home page
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;

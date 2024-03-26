import { Button } from "@material-tailwind/react";

const ErrorPage = () => {
  return (
    <div className="h-screen">
      <div className="app__wrapper app__container app__flex">
        <h1 className="text-center">Something went wrong!</h1>
        <a href="/" className="mt-2">
          <Button>Return to the home page</Button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;

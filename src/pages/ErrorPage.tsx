import { useRouteError } from "react-router-dom";
import PageContent from "../PageContent";
import MainHeader from "../components/Layout/MainHeader";

type RouteError = {
    status: number;
    data?: {
      message: string;
    };
  };
  
  const isRouteError = (error: any): error is RouteError => {
    return typeof error === 'object' && error !== null && 'status' in error;
  };


const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (isRouteError(error)) {
  if (error.status === 500) {
    message = error.data!.message;
  }

  if (error.status === 404) {
    title = '404 - Not found!';
    message = 'Could not find resource or page.';
  }
}

  return (
    <>
      <MainHeader />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;

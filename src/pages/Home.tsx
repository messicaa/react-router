import { useRouteLoaderData } from "react-router";

function Home() {
  const weather = useRouteLoaderData("app") as string;

  return (
    <>
      <h1 className ="font-mono text-2xl text-center text-fuchsia-400 my-16">Hello from Home</h1>
      <p className ="font-mono text-2xl text-center text-yellow-500">Today is a {weather} day</p>
    </>
  );
}

export default Home;
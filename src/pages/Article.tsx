import { useLoaderData } from "react-router";

type Data = {
    title: string;
    content: string;
}

function Article() {
  const data = useLoaderData() as Data;

  return (
    <article className ="font-mono text-2xl text-center text-fuchsia-400 my-16">
      <h1 className ="my-8">{data.title}</h1>
      <p>{data.content}</p>
    </article>
  );
}

export default Article;
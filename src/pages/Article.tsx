import { useLoaderData } from "react-router";

type Data = {
    title: string;
    content: string;
}

function Article() {
  const data = useLoaderData() as Data;

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </article>
  );
}

export default Article;
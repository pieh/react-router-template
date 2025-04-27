import type { Route } from "./+types/home";
import { useLoaderData, type HeadersArgs } from "react-router";
import { data } from "react-router";

export async function loader() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const loaderData = {
    testData: "aaa",
  };

  return data(loaderData, {
    headers: {
      "x-test": "foo",
    },
  });
}

export function headers({ loaderHeaders }: HeadersArgs) {
  const headers = new Headers(loaderHeaders);
  headers.set("Cdn-Cache-Control", "max-age=300, durable");
  return headers;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const data = useLoaderData<typeof loader>();

  return <pre>{JSON.stringify(data.testData, null, 2)}</pre>;
}

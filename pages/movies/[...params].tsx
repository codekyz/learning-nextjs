import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

type MovieDetailParams = [string, string] | [];

export default function Detail({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const [title, id] = (params || []) as MovieDetailParams;
  return (
    <>
      <h4>{title || "Loading..."}</h4>
    </>
  );
}

export function getServerSideProps(params: GetServerSideProps) {
  return {
    props: {
      ...params,
    },
  };
}

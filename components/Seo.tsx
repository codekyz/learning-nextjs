import Head from "next/head";

type seoProps = {
  title: string;
};

export default function Seo({ title }: seoProps) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

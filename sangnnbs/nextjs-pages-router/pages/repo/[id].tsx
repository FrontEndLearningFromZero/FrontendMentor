import { useRouter } from "next/router";

export default function Page({ cat }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{cat.name}</h1>
      <img src={cat.image} alt={cat.name} />
      <p>{cat.description}</p>
    </div>
  );
}
const LIMIT = 5;

export async function fetchCats() {
  const res = await fetch(`https://freetestapi.com/api/v1/cats?limit=${LIMIT}`);
  const cats = await res.json();

  return { cats };
}

export async function getStaticPaths() {
  const { cats } = await fetchCats();

  const paths = cats.map((cat) => ({
    params: { id: cat.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  if (params.id > LIMIT) {
    console.log("meet LIMIT");
    return {
      notFound: true,
    };
  }
  const { cats } = await fetchCats();
  console.log("========================s", cats);
  const cat = cats[params.id];
  if (!cat) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cat,
    },
  };
}

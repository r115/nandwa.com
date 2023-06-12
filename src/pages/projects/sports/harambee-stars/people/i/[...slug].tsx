import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

type Personell = {
    name: string;
}

function Personell({
    person,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    <Head>
        <title>Harambee Stars Databox | {person.name}</title>
    </Head>

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
              className={`border-2 border-purple-500 rounded-full h-40 w-40 flex items-center justify-center`}
            >
                {person.name}
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = [
        {
            params: {
                slug: ['motieno'],
            }
        }
    ];

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<{
    person: Personell;
}> = async ({params}) => {
    let slug;

    if (params) {
        slug = params.slug;
    }

    const res = await fetch(`${process.env.BASE_URL}/api/graph?slug=${slug ?? ""}`)
    const person = await res.json()

    return { props: { person } }
}

export default Personell;
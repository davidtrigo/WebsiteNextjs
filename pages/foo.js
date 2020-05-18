import Head from 'next/head'
export default function FooPage({ foo }) {
    return (
        <>
            <Head>
                <title>Foo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Foo-getStaticProps()</h1>
            <div>{foo.id}</div>
            <div>{foo.name}</div>

        </>
    )
}
    export function getStaticProps() {
        return {
            props: {
                foo: {
                    id: 1,
                    name: 'David'
                }
            },
        }
    }




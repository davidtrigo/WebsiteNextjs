import Head from 'next/head'
import Link from 'next/link'
export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>About</h1>

            <Link href="/">
          <a className="card">Back to home</a>
        </Link>
        </>
    )
}
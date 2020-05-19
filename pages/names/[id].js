import { useRouter } from 'next/router'

const names = [
    { id: 1, name: 'Raul' },
    { id: 2, name: 'Oscar' },
]

function Post({ name }) {
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            
            <div>Nombre: {name}</div>
        </>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    const paths = names.map(entry => ({
        params: { id: entry.id.toString() },
      }))
    
      // We'll pre-render only these paths at build time.
      // { fallback: false } means other routes should 404.
      return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    let name = names.find(entry => entry.id.toString() === params.id).name
    
    // Pass post data to the page via props
    return { props: { name } }
}

export default Post
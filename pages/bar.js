function BarPage({ bar }) {
    return (
        <>

            <h1>Bar-getServerSideProps()</h1>
            <div>{bar.id}</div>
            <div>{bar.name}</div>
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            bar: {
                id: 1,
                name: 'David'
            }
        },
    }
}
export default BarPage




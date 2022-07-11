import Page from "./components/Page"
import Header from "./containers/Header"
import Activities from "./containers/Activities"
import Spinner from "./components/Spinner"
import usePosts from "./hooks/usePosts"

const App = () => {
    const { data, isLoading } = usePosts()
    return (
        <>
            <Header />
            <Page>
                {
                    isLoading
                        ?
                        <Spinner />
                        :
                        <>
                        <Activities type={1} data={data[0]} />
                        <Activities type={2} data={data[1]} />
                        <Activities type={3} data={data[2]} />
                        </>
                }
            </Page>
        </>
    )
}

export default App
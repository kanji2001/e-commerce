import Navbar from "../features/navbar/Navbar"
import ProductList from "../features/ProductList/ProductList"


const Home = () => {
    return (
        <>
            <Navbar>
                <ProductList/>
            </Navbar>
        </>
    )
}

export default Home;
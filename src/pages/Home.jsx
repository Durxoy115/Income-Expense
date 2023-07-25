import { Link } from "react-router-dom";
import Menu from "../components/Menu";

// eslint-disable-next-line react/prop-types
const Home = ({ totalBalance }) => {
    return (
        <div>
            <Menu />
            <div className="hero h-[590px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Your Total Balance</h1>
                        <h1 className="mb-5 text-green-500 text-3xl font-bold">{totalBalance} tk</h1>
                        <Link to='/income'><button className="btn btn-warning mr-3">Add Income</button></Link>
                        <Link to='/expense'><button className="btn btn-warning">Add Expences</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
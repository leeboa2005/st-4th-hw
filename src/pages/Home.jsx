import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to={`/detail/1`}>디테일 페이지로 고고</Link>
        </div>
    );
};

export default Home;

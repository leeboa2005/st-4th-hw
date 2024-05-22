import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();

    console.log(`현재 파라미터는 ${id}입니다`);

    return (
        <div>
            <h1>Detail</h1>
        </div>
    );
};

export default Detail;

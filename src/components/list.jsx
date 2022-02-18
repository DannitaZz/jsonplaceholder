
import { FixedSizeList } from 'react-window';


const MakeRow = (data) => ({ index, style }) => (
    <Row
        index={index}
        style={style}
        data={data}
    />
)
const Row = ({ index, style, data }) => (
    <li className="list-group-item listItem" style={style}>
        <h4>ID: {data[index].id}</h4>
        <h5>user Id: {data[index].userId}</h5>
        <p>{data[index].title}</p>
        <div>Completed: {data[index].completed ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}</div>
    </li>
);

const List = (data) => ({ height, width }) => {
    return (
            <FixedSizeList
                height={height}
                width={width}
                itemSize={150}
                itemCount={data.length}
            >
                {MakeRow(data)}
            </FixedSizeList>
    )

}

export default List
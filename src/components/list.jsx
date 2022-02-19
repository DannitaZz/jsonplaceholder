
import { FixedSizeList } from 'react-window';


const MakeRow = (data) => ({ index, style }) => (
    <Row
        index={index}
        style={style}
        data={data}
    />
)
const Row = ({ index, style, data }) => (
    <li className={`list-group-item listItem mx-1 mt-1`} style={style}>
        <div className="d-flex w-100 justify-content-between">
            <h3 className="mb-1"> Id: {data[index].id}</h3>
            <small><i className="bi bi-person-fill"></i> User id: {data[index].userId} </small>
        </div>
        <div className='d-flex justify-content-center'>
            <div className="mb-1 ms-5 d-flex fs-6 fw-bold"> Title:  <h5 className='fst-italic'>  "{data[index].title}"</h5></div>
        </div>
        <small className='fs-5'>Completed: {data[index].completed ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}</small>
    </li>
);

const List = (data) => ({ height, width }) => {
    return (
        <FixedSizeList
            height={height}
            width={width}
            itemSize={160}
            itemCount={data.length}
        >
            {MakeRow(data)}
        </FixedSizeList>
    )

}

export default List
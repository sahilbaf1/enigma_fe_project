import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../redux/slices/todoSlice";
import { Link } from "react-router-dom";

export function Products() {

    const dispatch = useDispatch();
    const {items, loading, error} = useSelector((state) => state.products);
    
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch])

    return(
        <>
        <div className="table-container">
            <table className="custome-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stok</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((row) => {
                        {row.id}
                        <tr key={row.id}>
                        <td>{row.title}</td>
                        <td>{row.user}</td>
                        <td>{row.body}</td>
                        <td>{row.body}</td>
                        <td>
                            <Link to={`/products/${row.id}`}>
                            <button className="view-button">DETAIL</button>
                            </Link>
                        </td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}
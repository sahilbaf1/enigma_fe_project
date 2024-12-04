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
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stok</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.data?.map((row) => {
                        return (
                        <tr key={row.ID}>
                        <td>{row.Name}</td>
                        <td>{row.Price}</td>
                        <td>{row.Qty}</td>
                        <td>{row.Description}</td>
                        <td>
                            <img src={row.Image} alt={row.Name} className="table-image" />
                        </td>
                        <td>
                            <Link to={`/products/${row.ID}`}>
                            <button className="view-button">DETAIL</button>
                            </Link>
                        </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}
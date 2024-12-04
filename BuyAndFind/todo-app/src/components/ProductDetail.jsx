import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../redux/slices/todoSlice";
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";

export function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { selectedProduct, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(productDetail(id));
    }, [dispatch, id])

    return (
        <div class="product-detail-container">
            {selectedProduct?.data ? (
                <>
            <img src={selectedProduct?.data?.Image} alt="Product Image" class="product-image" />
            <div class="product-info">
                <h2>{selectedProduct?.data?.Name}</h2>
                    <p>Descripsi: {selectedProduct?.data?.Description}</p>
                    <p>Stok: {selectedProduct?.data?.Qty}</p>
                    <p class="price">Rp {selectedProduct?.data?.Price}</p>
            </div>
            <div class="action-buttons">
                <button class="action-button buy-button">Buy Now</button>
                <button class="action-button back-button" onClick={() => window.history.back()}>Back</button>
            </div>
            </>
            ) : (
                <NotFound/>
            )}
            </div>
    )

}
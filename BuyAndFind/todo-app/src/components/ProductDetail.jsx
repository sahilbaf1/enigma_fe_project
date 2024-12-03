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
    }, [dispatch])

    return (
        <div class="product-detail-container">
            {selectedProduct ? (
                <>
            <img src={`https://via.placeholder.com/600x400`} alt="Product Image" class="product-image" />
            <div class="product-info">
                <h2>Product</h2>
                    <p>Descripsi: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                    <p>Stok: 1000</p>
                    <p class="price">Rp 1000000000</p>
            </div>
            <div class="action-buttons">
                <button class="action-button buy-button">Buy Now</button>
                <button class="action-button back-button" onclick="window.history.back()">Back</button>
            </div>
            </>
            ) : (
                <NotFound/>
            )}
            </div>
    )

}
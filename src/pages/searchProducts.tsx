import { FC, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, selectSearchedProduts, filterProductsByLetter } from '../store/productsSlice';
import { Product } from '../types';

const SearchProducts: FC = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectSearchedProduts);
  const { productQuery } = useParams<{ productQuery: string }>();
  
  useEffect(() => {
    dispatch(filterProductsByLetter(productQuery as string));
  },[dispatch, productQuery]);

  
  return (
    <>
      <div className="py-10" style={{backgroundColor: "rgb(242, 242, 242)"}}>
        <div className="container">
          <div className="productList-container">
            {products && (
              products.map((product: Product) => (
                <div className="card" key={product.id}>
                  <Link to={`/products/detail/${product.id}`} key={product.id}  style={{display: "block", }}>
                    <div className="d-flex fd-column jc-center ai-center">
                      <div style={{width: "100%"}}>
                        <img src={product.src} alt="product" style={{display: "block"}}/>
                      </div>
                      <div className="card-body">
                        <h3 style={{fontSize: "16px"}}>{product.name}</h3>
                        <h3 style={{fontSize: "16px"}}>{product.price}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchProducts
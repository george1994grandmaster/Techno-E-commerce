import { FC, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterProductsByCategories, selectProducts } from '../store/productsSlice';
import { StyledTypography } from '../components/material_Ui';
import { Product } from '../types';

const Categories: FC = () => {

  const { productCategory } = useParams<{ productCategory: string }>();
  console.log(productCategory)
  const dispatch = useDispatch();
  const categoryProducts = useSelector(selectProducts);

  useEffect(() => {
    dispatch(filterProductsByCategories(productCategory as string));
  }, [dispatch, productCategory]);

  /*const filteredProducts = allProducts.filter(
    (product) => product.category === productCategory
  );*/

  return (
    <>
      <div className="py-10" style={{backgroundColor: "rgb(242, 242, 242)"}}>
        <div className="container">
          <div className="productList-container">
            {categoryProducts && 
              categoryProducts.map((product: Product) => (
              <div className="card" key={product.id}>
                <Link to={`/products/detail/${product.id}`} key={product.id}>
                  <div style={{ width: '100%'}}>
                    <img src={product.src} alt="product" style={{ display: 'block' }} />
                  </div>
                  <div className="card-body">
                    <StyledTypography  variant="body1" color="#000" fontSize="16px"  fontWeight="600" className="mb-2">
                      {product.name}
                    </StyledTypography>
                    <StyledTypography variant="body1" color="rgba(0, 0, 0, 0.88)" fontSize="16px" fontWeight="600">
                      <span className="mr-2">PRICE:</span>
                      <span style={{marginRight: "2px"}}>$</span>
                      {product.price}
                    </StyledTypography>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories;
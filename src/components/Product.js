import React from 'react'
const Product = ({ product,onAdd,onRemove }) => {
  return <>


   <div style={{display:'grid',justifyContent:'space-around',
  backgroundColor:'lightgray',flexDirection:'column',flexWrap:'wrap'
  }}>
   <img src={product.image} alt="" width='70%'/>
  {product.name} <br/>{product.price}
 
  <div>
  <button onClick={()=>onAdd(product)}>Add to Cart</button>
 
  </div>

  </div>
  </>;
};
export default Product;

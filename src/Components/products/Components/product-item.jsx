import styles from './product-item.module.css'


function ButtonComponent(){
    return(
        <div>
            <button className={styles.buttonStyle}>Click</button>
        </div>
    )
}

function ProductItem({singleProductItem,key}){
    return(
        <div style={{border:'2px solid green',padding:'10px',marginBottom:'12px',width:'400px'}} key={key}>
            {/* <h2>Product 1</h2> */}
            <h2>{singleProductItem}</h2>
            <ButtonComponent/>
        </div>
    )
}

export default ProductItem;
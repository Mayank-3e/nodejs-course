import { useContext, useEffect } from 'react'
import { ProductsContext } from '../store/products-store'
import classes from './main.module.css'
import styles from './product.module.css'

const Shop = () =>
{
  document.title="Shop"
  const {prods,setProds}=useContext(ProductsContext)
  useEffect(()=>
  {
    const f=async()=>
    {
      const url="http://localhost:5000"
      let response = await fetch(url+"/shop",
      {
        headers: {'Content-Type':'application/json'}
      })
      response=await response.json()
      setProds(response)
    }
    f()
  })

  if(!prods.length) return <h1>No products</h1>

  return prods.map(product=>
    <div className={classes.grid} key={Math.random()}>
      <article className={classes.card+' '+styles['product-item']}>
        <header className={classes.card__header}>
          <h1 className={styles.product__title}>{product.title}</h1>
        </header>
        <div className={classes.card__image}>
          <img src="https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png" alt="A Book"/>
        </div>
        <div className={classes.card__content}>
          <h2 className={styles.product__price}>$19.99</h2>
          <p className={styles.product__description}>A very interesting book about so many even more interesting things!</p>
        </div>
        <div className={classes.card__actions}>
          <button className={classes.btn}>Add to Cart</button>
        </div>
      </article>
    </div>
  )
}

export default Shop

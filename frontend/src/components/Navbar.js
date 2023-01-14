import { Link, useLocation } from "react-router-dom"
import classes from './main.module.css'

const Navbar = () =>
{
  const location=useLocation()

  return (
    <header className={classes['main-header']}>
      <nav className={classes['main-header__nav']}>
        <ul className={classes['main-header__item-list']}>
          <li className={classes['main-header__item']}><Link to="/" className={location.pathname==="/"?classes.active:''}>Shop</Link></li>
          <li className={classes['main-header__item']}><Link to="/admin/add-product" className={location.pathname==="/admin/add-product"?classes.active:''}>Add Product</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

import { useNavigate } from 'react-router-dom'
import classes from './forms.module.css'
import classes_main from './main.module.css'
import styles from './product.module.css'

const AddProduct = () =>
{
  const navigate=useNavigate()
  document.title="Add Product"

  const submitHandler=async(e)=>
  {
    e.preventDefault()
    const url="http://localhost:5000"
    await fetch(url+"/admin/add-product",
    {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({title: e.target.title.value})
    })
    navigate("/")
  }

  return (
    <main>
      <form className={styles["product-form"]} method="post" onSubmit={submitHandler}>
        <div className={classes["form-control"]}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"/>
        </div>
        <button type="submit" className={classes_main.btn}>Add Product</button>
      </form>
    </main>
  )
}

export default AddProduct

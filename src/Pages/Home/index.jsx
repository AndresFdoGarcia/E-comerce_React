import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const [items, setitems] = useState(null)

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response=> response.json())
      .then(data => setitems(data))
  },[])
    return (
      <>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((item)=>{
            return  <Card key={item.id} data={item} />
          })
        }
        </div>
        <ProductDetail />   
      </>
    )
}  
 export default Home
import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const [items, setitems] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const itemsPerPage = 9

  useEffect(()=>{
    fetch('https://localhost:7026/api/Orders/GetAllProducts')
      .then(response=> response.json())
      .then(data => setitems(data))
      
  },[])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items?.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(items?.length / itemsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
    return (
      <>
      Home
      <div className="grid gap-x-8 gap-y-12 grid-cols-3 w-full max-w-screen-lg">
        {
          currentItems?.map((item) => {
            return <Card key={item.productId} data={item} />
          })
        }
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
      <ProductDetail />
    </>
    )
}  
 export default Home
import { useState } from "react";
import Header from "./components/Header";
import Items from './components/Items'
import Data from './components/Data'
import Buttons from "./components/Buttons";


const categoriesArr = ['all', "breakfast", "lunch", "shakes"]



function App() {

  const [allItems, setAllItems] = useState(Data)
  const [categories, setCategories] = useState(categoriesArr)

  console.log(categories);

  
  function filterItems(category){
    if(category==='all'){
      setAllItems(Data)
      return
    }

    const newArr = Data.filter((item) => item.category === category);
    setAllItems(newArr);
  }




  return (
    <div className="wrapper">
      <Header/>
      <Buttons categories={categories} filterItems={filterItems}/>
      <Items allItems={allItems}/>
    </div>
  )
}

export default App;

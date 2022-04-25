import Item from './Item'

function Items({allItems}) {
  
  return (
    <div className="menu-items">
      {allItems.map((item)=><Item
       key={item.id}
        {...item}
       />)}
    </div>
  )
}

export default Items

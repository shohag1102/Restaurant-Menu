
function Item({id, title, category, price, img, desc}) {
  return (
    <div className="item">
      <div className="img">
            <img src={`https://react-projects-5-menu.netlify.app/${img}`} alt={title}/>
          </div>
          <div className="item-description">
            <div className="item-heading">
              <div className="title">
                <p>{title}</p>
              </div>
              <div className="price">
                <p>
                  {`$${price}`}
                </p>
              </div>
            </div>
            <p className="dot-border"></p>
            <div className="item-info">
              <p>
                {desc}
              </p>
            </div>
          </div>
    </div>
  )
}

export default Item

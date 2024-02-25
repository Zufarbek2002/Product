import "./Price.scss"

function Price() {
  return (
    <div className="price">
        <div className="container price__container">
            <h2 className="price__title">Price Table</h2>
            <p className="price__sub_title">We offer competitive price</p>
            <div className="price__cards">
                <div className="price__card">
                    <h3 className="price__card_title">Free</h3>
                    <p className="price__card_sub_title">Brief price description</p>
                    <div className="price__card_type">
                        <h2 className="price__text">0</h2>
                        <div className="price__box">
                            <h3 className="price__icon">$</h3>
                            <p className="price__mon">Per / month</p>
                        </div>
                    </div>
                    <div className="price__text_box">
                        <h4 className="price__box_text">Only 2 Operators</h4>
                        <h4 className="price__box_text">Notifications</h4>
                        <h4 className="price__box_text">Landing Pages</h4>
                    </div>
                    <button className="price__btn">Order Now</button>
                </div>

                <div className="price__card">
                    <h3 className="price__card_title">Free</h3>
                    <p className="price__card_sub_title">Brief price description</p>
                    <div className="price__card_type">
                        <h2 className="price__text">0</h2>
                        <div className="price__box">
                            <h3 className="price__icon">$</h3>
                            <p className="price__mon">Per / month</p>
                        </div>
                    </div>
                    <div className="price__text_box">
                        <h4 className="price__box_text">Only 2 Operators</h4>
                        <h4 className="price__box_text">Notifications</h4>
                        <h4 className="price__box_text">Landing Pages</h4>
                    </div>
                    <button className="price__btn">Order Now</button>
                </div>

                <div className="price__card">
                    <h3 className="price__card_title">Free</h3>
                    <p className="price__card_sub_title">Brief price description</p>
                    <div className="price__card_type">
                        <h2 className="price__text">0</h2>
                        <div className="price__box">
                            <h3 className="price__icon">$</h3>
                            <p className="price__mon">Per / month</p>
                        </div>
                    </div>
                    <div className="price__text_box">
                        <h4 className="price__box_text">Only 2 Operators</h4>
                        <h4 className="price__box_text">Notifications</h4>
                        <h4 className="price__box_text">Landing Pages</h4>
                    </div>
                    <button className="price__btn">Order Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price
export default function Page() {
    return (
        <div className="catalogue">
            <div className="search">
                <input type="text" placeholder="Chercher un médicament"/>
                <button>Search</button>
            </div>
            <div className="catalogue-list">
                <div className="catalogue-item">
                    <div className="catalogue-item-image">
                        <img src="https://via.placeholder.com/150" alt="Placeholder"/>
                    </div>
                    <div className="catalogue-item-description">
                        <h2>Item name</h2>
                        <p>Item description</p>
                    </div>
                    <div className="catalogue-item-price">
                        <p>Item price</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
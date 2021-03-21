const Property = (props: { properties: any }) => {
  const { properties } = props;
  return (
    <>
      <div>
        <div className="Full-Details">
          <div>
            <img
              src={properties.image}
              alt="PropertiesImage"
              width="400"
              height="400"
            />
            <br />
            <div className="ActionButton">
              <button className="Actionbtn1">Buy Now</button>
              <button>Add to wishlist</button>
            </div>
          </div>
          <div className="prodInfo">
            <h2>{properties.title}</h2>
            <p className="location">
              <i className="fa fa-map-marker"></i> 14 Tottenham Road, London
            </p>
            <button className="propertyType">{properties.category}</button>
            <p>
              Price : <span>${properties.price}</span>
              <span className="originalPrice">$500.000</span>
            </p>
            <div className="highlights">
              <p className="sub-title">Description</p>
              <p>{properties.description}</p>
            </div>
            <button className="contactOwner">Contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;

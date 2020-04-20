import React, { Component } from "react";
import ShoppingData from "../../ShoppingData";
import CollectionPreview from "../../components/preview-collection/PreviewCollection";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: ShoppingData,
    };
  }

  render() {
    return (
      <div>
        {ShoppingData.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default Shop;

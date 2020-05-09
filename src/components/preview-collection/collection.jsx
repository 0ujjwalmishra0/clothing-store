import React from "react";
import "./collection.scss";
import CollectionItem from "../collection-item/collection-item";

const Collection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {/* displaying only 4 items per category using filter()*/}
      {items
        .filter((item, index) => index < 4)
        .map(({id,...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default Collection;

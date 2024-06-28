import React from "react";

import "./Tag.css";

interface TagProps {
  tagName: string;
}

const Tag: React.FC<TagProps> = (props) => {
  console.log("props", props);
  return <button className="tag">{props.tagName}</button>;
};

export default Tag;

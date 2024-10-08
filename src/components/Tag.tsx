import React from "react";

import "./Tag.css";

interface TagProps {
  tagName: string;
  selectTag?: (tagName: string) => void;
  selected: boolean;
}

// const Tag: React.FC<TagProps> = (props) => {
//   // console.log("props", props);
//   return <button className="tag">{props.tagName}</button>;
// };

const Tag: React.FC<TagProps> = ({
  tagName,
  selectTag = () => {},
  selected,
}) => {
  const tagStyle: any = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    Angular: { backgroundColor: "#FF5733" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      onClick={() => selectTag(tagName)}
      style={selected ? tagStyle[tagName] : tagStyle.default}
    >
      {tagName}
    </button>
  );
};

export default Tag;

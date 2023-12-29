import React, { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
  defaultState?: "expanded" | "collapsed";
}

const ExpandableText = ({
  children,
  maxLength = 25,
  defaultState = "collapsed",
}: Props) => {
  const isExpandedByDefault = defaultState === "expanded";
  const [isExpanded, setIsExpanded] = useState(isExpandedByDefault);

  const toggleExpand = () => {
    // toggle expand value
    setIsExpanded(!isExpanded);
  };

  var text = children;

  // if text is smaller than max length, we don't need to add '...' to text and also don't need 'Less/More' Button
  const isTextSmallerThanMaxLength = text.length <= maxLength;

  if (!isTextSmallerThanMaxLength && !isExpanded)
    text = `${text.substring(0, maxLength)}...`;

  return (
    <>
      <div>
        <span>{text}</span>
        {!isTextSmallerThanMaxLength && (
          <button onClick={toggleExpand}>{isExpanded ? "Less" : "More"}</button>
        )}
      </div>
    </>
  );
};

export default ExpandableText;

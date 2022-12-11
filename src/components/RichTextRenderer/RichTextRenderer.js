import React from "react";
import { PrismicRichText } from "@prismicio/react";

const RichTextRenderer = ({ richText }) => {
  return (
    <PrismicRichText field={richText} fallback={<>Content not supported</>} />
  );
};

export default RichTextRenderer;

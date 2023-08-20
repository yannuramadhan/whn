import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import MiddleContentBlock from "./MiddleContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "middle") return <MiddleContentBlock {...props} />;
  return null;
};

export default ContentBlock;

import { ImageContentProps } from "../types";

export const ImageContent = ({ src, width, height }: ImageContentProps) => (
  <img src={`http://localhost:4000/${src}`} alt={src} width={width} height={height} />
);

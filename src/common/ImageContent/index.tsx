import { ImageContentProps } from "../types";

export const ImageContent = ({ src, width, height }: ImageContentProps) => (
  <img src={`/img/images/${src}`} alt={src} width={width} height={height} />
);

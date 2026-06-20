import { Spinner } from "@/components/ui/spinner";
import { type CSSProperties, type ForwardRefRenderFunction, forwardRef } from "react";

interface ImageLoadingProps {
  imageSize: () => CSSProperties;
}

const ImageLoading: ForwardRefRenderFunction<HTMLDivElement, ImageLoadingProps> = ({ imageSize }, ref) => {
  return (
    <div ref={ref} style={imageSize()} className="image-loading">
      <Spinner className="size-6" />
    </div>
  );
};

export default forwardRef(ImageLoading);

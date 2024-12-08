import LineIcon from "@src/components/icons/uiIcons/Line";

export interface StyledHeadingProperties {
  className?: string;
  normalText: string;
  styledText: string;
}

export default function StyledHeading({
  className,
  normalText,
  styledText,
}: StyledHeadingProperties) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className={`text-center text-5xl font-medium  ${className}`}>
        {normalText} {styledText}
      </h3>
      <LineIcon className="h-3 mt-3" />
    </div>
  );
}

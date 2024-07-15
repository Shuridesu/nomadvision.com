import cn from "classnames";

interface Props {
  props?: string;
}

export default function OtherIcon({props}:Props) {
  const className = cn("w-6 h-6", props);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 48 48"
      id="b"
      className={className}
    >
      <rect className="c" x="25.5" y="5.5" width="17" height="17" />
      <rect className="c" x="25.5" y="25.5" width="17" height="17" />
      <rect className="c" x="5.5" y="5.5" width="17" height="17" />
      <rect className="c" x="5.5" y="25.5" width="17" height="17" />
    </svg>
  );
}

import clsx from "clsx";

export function Title({ className, ...props }) {
  return (
    <h2
      className={clsx(
        "text-[20px] md:text-[40px] font-bold leading-[50px] capitalize mb-5",
        className
      )}
      {...props}
    />
  );
}

export function TrendChart({
  firstSeries,
  secondSeries,
  firstColor,
  secondColor,
}: {
  firstSeries: number[];
  secondSeries: number[];
  firstColor: string;
  secondColor: string;
}) {
  const buildPath = (values: number[]) =>
    values
      .map((value, index) => `${index === 0 ? "M" : "L"} ${index * 56} ${value}`)
      .join(" ");

  return (
    <svg className="h-32 w-full" viewBox="0 0 336 100" preserveAspectRatio="none">
      <path
        d={buildPath(firstSeries)}
        fill="none"
        stroke={firstColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d={buildPath(secondSeries)}
        fill="none"
        stroke={secondColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
}

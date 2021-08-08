import { h, JSX } from 'preact';

type Props = Omit<JSX.SVGAttributes<SVGSVGElement>, 'size'> & {
  size?: number | string;
};

export function CrossIcon({ size = 16, ...props }: Props) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6l12 12" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

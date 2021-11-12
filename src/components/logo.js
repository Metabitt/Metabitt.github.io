/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'link.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 3,
      }}
      {...rest}
    >
      <Image src={src} alt="Ipnk portfolio logo" />
    </Link>
  );
}

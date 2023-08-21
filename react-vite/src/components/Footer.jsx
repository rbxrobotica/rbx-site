import { Button } from '@mui/material';
import Link from '@mui/material/Link';

function Footer() {

  return (
    <>
      <Link
        href="/blog"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        <Button variant="text">Blog</Button>
      </Link>
    </>
  )
}

export default Footer

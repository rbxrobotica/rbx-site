import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Blog() {

  return (
    <>
      <div>
        <Header />
        <main className="py-5">
        <Container>
          <Typography mt={2} sx={{color:'red'}}>
            lalalablog
          </Typography>
        </Container>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Blog

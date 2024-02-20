import Container from '@/components/Container'
import SectionTitle from '@/components/sections/SectionTitle'
import React from 'react'
import { NewsCardList } from '@/components/sections/noticias/NewsCardList';

function Page() {
  return (
    <Container>
      <section>
        <div className='py-12'>
          <SectionTitle textColorClass='text-primary-800' decoratorColorClass='bg-primary-800'>Noticias</SectionTitle>
        </div>
        <div className='pb-12'>
          <NewsCardList /> 
        </div>
      </section>
    </Container>
  )
}

export default Page
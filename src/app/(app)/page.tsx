import { Box, Text, Container, Stack, Image } from '@mantine/core';
import './styles.css';
import { HeroSection } from '@/components/hero.section';
import { BenefitSection } from '@/components/benefit.section';
import { ServiceCard, servicesData, ServicesSection } from '@/components/services.section';
import { BlogSection } from '@/components/blog.section';
import { EmailBanner } from '@/components/email-banner.section';

export default async function Home() {

  return (
    <>
     <HeroSection />
     <div style={{
        backgroundColor: '#EAE4F3',
        borderRadius: '48px',
        paddingTop: '150px',
        position: 'relative',
        zIndex: 1,
        paddingBottom: '40px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '0 20px',
          position: 'relative',
          marginTop: '-300px',
          zIndex: 2
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1400px'
          }}>
            <BenefitSection />
          </div>
        </div>

        <ServicesSection />
        <Image style={{position: 'absolute', bottom: -80, left: 0, width: '80px'}} src="/circle-ornament.svg" alt="Services" />
        <Image style={{position: 'absolute', top: 250, right: 0, zIndex: -1, width: '250px'}} src="/circle-ornament-2.svg" alt="Services" />
      </div>
      <Container size="lg" mt={82}> 
        <Stack>
      <Text style={{textAlign: 'center'}} component="h2" size='3rem' mb="32px">
            Layanan Kami
          </Text>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        </Stack>
        </Container>
      {/* <BlogSection /> */}
      <Box py={{ base: 40, md: 80 }}>
        <Container size="lg">
          <EmailBanner /> 
        </Container>
      </Box>
    </>
  );
}

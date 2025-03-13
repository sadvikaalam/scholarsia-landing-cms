import { Box, Text, Container, Stack, Image } from '@mantine/core';
import './styles.css';
import { HeroSection } from '@/components/hero.section';
import { BenefitSection } from '@/components/benefit.section';
import { ServiceCard, ServiceData, ServicesSection } from '@/components/services.section';
import { BlogSection } from '@/components/blog.section';
import { EmailBanner } from '@/components/email-banner.section';
import { IconSchool } from '@tabler/icons-react';
import { IconTent } from '@tabler/icons-react';

// Extract service data
const servicesData: ServiceData[] = [
  {
    icon: IconSchool,
    title: 'Scolarsia Development Center',
    description: 'Tempat di mana inovasi pendidikan bertemu dengan peluang global. Kami menyediakan berbagai program pengembangan yang memperkaya keterampilan pelajar Indonesia, mempersiapkan mereka untuk tantangan dunia internasional melalui kolaborasi pendidikan dan pelatihan berbasis teknologi.',
  },
  {
    icon: IconTent,
      title: 'Scolarshia Scholarsip Services',
      description: 'Menawarkan akses langsung ke berbagai peluang beasiswa internasional. Kami membantu pelajar Indonesia mengidentifikasi, mendaftar, dan mempersiapkan diri untuk mendapatkan beasiswa dari universitas terbaik di dunia, membuka jalan menuju pendidikan global yang berkualitas.'
  },
];

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

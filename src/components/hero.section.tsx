import { Container, Title, Text, Button, Group, Badge } from '@mantine/core';
import { AuroraBackground } from './aurora-background/aurora-background';
import { IconArrowRight } from '@tabler/icons-react';
export function HeroSection() {
  return (
    <AuroraBackground style={{
      position: 'relative',
      marginTop: '-60px',
      paddingTop: '60px',
      height: 'auto',
      minHeight: '100vh'
    }}>
    {/* <div style={{
      position: 'relative',
      minHeight: '100vh',
      zIndex: 1
    }}> */}
      {/* <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(pattern-bg.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(pattern-bg.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transform: 'rotate(180deg)',
      }} /> */}

        {/* <div style={{
          position: 'relative',
          background: 'white',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 0 40px 20px white',
          backdropFilter: 'blur(10px)',
          marginTop: '2rem',
        }}> */}
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '120px 24px 260px 24px',
        }}>
          <Container size="xl" style={{ position: 'relative' }}>
            {/* <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
              pointerEvents: 'none',
              zIndex: 1,
            }} /> */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
            }}>
              <div>
                {/* <Badge
                  variant="light"
                  color="#8A3FFC"
                  size="lg"
                  radius="xl"
                  mb="md"
                  rightSection={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  }
                >
                  📢 Announcement: Open for Bootcamp
                </Badge> */}
                <Title
                  order={2}
                  fz={{ base: 32, md: 48 }}
                  fw="600"
                  lh={1.2}
                  mb="md"
                >
                  Maksimalkan <span style={{color: '#E63946'}}>Potensimu</span> dengan Akses Global ke Pendidikan Terbaik
                </Title>
                <Text size="lg" c="dimmed" maw={600}>
                Platform Unggul yang Menghubungkan Pelajar Indonesia dengan Beasiswa, Program Pertukaran, dan Kesempatan Pendidikan Internasional
                </Text>
                <Group mt="xl">
                  <Button rightSection={<IconArrowRight />} size='lg' color='#E63946'>Jelajahi Program Kami!</Button>
                </Group>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src="hero-image.svg"
                  alt="Hero illustration"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
          </Container>
        </div>
        {/* </div> */}
    {/* </div> */}
    </AuroraBackground>
  );
}
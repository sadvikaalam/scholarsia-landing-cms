import { Box, Container, Text, Title, Grid, GridCol, Image, Stack, Group, Badge } from '@mantine/core';
import { EmailBanner } from '@/components/email-banner.section';
import styles from './about.module.css';
import { IconBolt, IconRocket, IconInfoCircle, IconDeviceDesktop, IconGlobe, IconExternalLink, IconLetterA, IconLetterB, IconLetterR, IconLetterI, IconLetterD, IconLetterG, IconLetterE } from '@tabler/icons-react';

export default function AboutPage() {
  return (
    <>
      <Box className={styles.heroSection}>
        <Container size="lg">
          <Grid gutter={50}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Title order={1} size="3rem">Tentang Kami</Title>
                <Text size="lg">
                Kami adalah platform edukasi terdepan yang berkomitmen untuk menghubungkan pelajar Indonesia dengan peluang pendidikan internasional terbaik. Dengan layanan informasi beasiswa global, program pertukaran pelajar, dan kemitraan pendidikan internasional, kami mendukung pelajar Indonesia meraih cita-cita mereka dan menjadi generasi yang siap bersaing di dunia global.
                </Text>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <Image
                src="/hero-picture-1.png"
                alt="Scholarsia Team"
                radius="md"
                height={400}
                fit="cover"
              />
            </GridCol>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.missionSection}>
        <Container size="lg">
          <Grid gutter={50}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Image
                src="/hero-picture-2.png"
                alt="Our Mission"
                radius="md"
                height={400}
                fit="cover"
              />
            </GridCol>
                <GridCol span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Title order={2} size="2.5rem">Misi Kami</Title>
                <Text size="lg">
                  Di Scholarsia, kami percaya bahwa setiap pelajar berbakat berhak mendapatkan akses ke pendidikan kelas dunia tanpa memandang latar belakang mereka.
                  Misi kami adalah menjembatani kesenjangan antara pelajar Indonesia dan institusi pendidikan internasional melalui layanan beasiswa komprehensif,
                  program pengembangan, dan komunitas yang mendukung.
                </Text>
                <Text size="lg">
                  Kami berusaha menjadi katalisator yang mengubah aspirasi pendidikan menjadi kenyataan, memberdayakan generasi muda Indonesia untuk menjadi
                  warga global dan pemimpin masa depan.
                </Text>
              </Stack>
            </GridCol>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.valuesSection}>
        <Container size="lg">
          <Title order={2} size="2.5rem" ta="center" mb={50}>Core Value Kita</Title>
          <Stack gap="xl">
            <Box>
              <Group align="center" mb="xs">
                <Box style={{ transform: 'rotate(-10deg)' }}>
                  <IconLetterB size={48} color="blue" />
                </Box>
                <Stack gap={0}>
                  <Title order={3} size="xl">Bold Innovation</Title>
                  <Text>Berani menghadirkan solusi inovatif yang menggabungkan teknologi canggih dan metode edukasi terbaik.</Text>
                </Stack>
              </Group>
            </Box>
            
            <Box>
              <Group align="center" mb="xs">
                <Box style={{ transform: 'rotate(-10deg)' }}>
                  <IconLetterR size={48} color="blue" />
                </Box>
                <Stack gap={0}>
                  <Title order={3} size="xl">Reliability</Title>
                  <Text>Memberikan layanan yang andal dan terpercaya untuk memenuhi kebutuhan klien dan pelajar.</Text>
                </Stack>
              </Group>
            </Box>
            
            <Box>
              <Group align="center" mb="xs">
                <Box style={{ transform: 'rotate(-10deg)' }}>
                  <IconLetterI size={48} color="blue" />
                </Box>
                <Stack gap={0}>
                  <Title order={3} size="xl">Integrity</Title>
                  <Text>Menjunjung tinggi etika, transparansi, dan kejujuran dalam setiap aspek kerja.</Text>
                </Stack>
              </Group>
            </Box>
            
            <Box>
              <Group align="center" mb="xs">
                <Box style={{ transform: 'rotate(-10deg)' }}>
                  <IconLetterD size={48} color="blue" />
                </Box>
                <Stack gap={0}>
                  <Title order={3} size="xl">Development</Title>
                  <Text>Fokus Berkomitmen pada pengembangan potensi individu melalui teknologi dan pendidikan.</Text>
                </Stack>
              </Group>
            </Box>
            
            <Box>
              <Group align="center" mb="xs">
                <Box style={{ transform: 'rotate(-10deg)' }}>
                  <IconLetterG size={48} color="blue" />
                </Box>
                <Stack gap={0}>
                  <Title order={3} size="xl">Global Perspective</Title>
                  <Text>Mengintegrasikan wawasan global untuk menciptakan dampak lokal yang berarti.</Text>
                </Stack>
              </Group>
            </Box>
            
            <Box>
              <Group align="center" mb="xs">
                <Box style={{ transform: 'rotate(-10deg)' }}>
                  <IconLetterE size={48} color="blue" />
                </Box>
                <Stack gap={0}>
                  <Title order={3} size="xl">Excellence in Service</Title>
                  <Text>Selalu memberikan yang terbaik dalam konsultasi IT dan layanan edukasi untuk menciptakan nilai jangka panjang.</Text>
                </Stack>
              </Group>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box className={styles.teamSection}>
        <Container size="lg">
          <Title order={2} size="2.5rem" ta="center" mb={50}>Tim Kami</Title>
          <Grid>
            {[
              { name: 'Bayu Eka Wibowo', position: 'Founder & CEO', image: '/about-us-1.jpg' },
              { name: 'Nur Hidayati Sihono', position: 'Chief Operations Officer', image: '/about-us-2.jpg' },
              { name: 'Firsta Royan Daliska', position: 'Head of Scholarship Services', image: '/about-us-3.jpg' },
              { name: 'Andre Diwa Aji', position: 'Development Center Director', image: '/about-us-4.jpg' },
            ].map((member, index) => (
              <GridCol key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <Box className={styles.teamCard}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    radius="md"
                    height={240}
                    fit="cover"
                    mb="md"
                  />
                  <Title order={4}>{member.name}</Title>
                  <Text c="dimmed">{member.position}</Text>
                </Box>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box py={{ base: 40, md: 80 }}>
        <Container size="lg">
          <EmailBanner />
        </Container>
      </Box>
    </>
  );
} 
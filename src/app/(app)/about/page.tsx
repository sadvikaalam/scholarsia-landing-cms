import { Box, Container, Text, Title, Grid, GridCol, Image, Stack, Group, Badge, Accordion, AccordionControl, AccordionItem, AccordionPanel } from '@mantine/core';
import { EmailBanner } from '@/components/email-banner.section';
import styles from './about.module.css';
import { IconBolt, IconRocket, IconInfoCircle, IconDeviceDesktop, IconGlobe, IconExternalLink, IconLetterA, IconLetterB, IconLetterR, IconLetterI, IconLetterD, IconLetterG, IconLetterE } from '@tabler/icons-react';

export default function AboutPage() {
  return (
    <>
      <Box 
        py={120} 
        pb={80} 
        bg="#EAE4F3" 
        mt={-60} 
        style={{ borderRadius: '0 0 24px 24px' }}
      >
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

      <Box py={80} bg="white" style={{position: 'relative'}}>
      <Image 
                  style={{
                    position: 'absolute', 
                    bottom: 400, 
                    left: 0, 
                    width: '80px',
                    zIndex: 0
                  }} 
                  src="/circle-ornament.svg" 
                  alt="Ornament" 
                />
                <Image 
                  style={{
                    position: 'absolute', 
                    top: 290, 
                    right: 0,
                    zIndex: 0, 
                    width: '150px'
                  }} 
                  src="/circle-ornament-2.svg" 
                  alt="Ornament" 
                />
        <Container size="lg" >
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
               

                <Box style={{ position: 'relative', zIndex: 1 }}>
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
                </Box>
              </Stack>
            </GridCol>
          </Grid>
        </Container>
      </Box>

      <Box py={80} bg="#f8f9fa">
        <Container size="lg">
        <Title order={2} size="2.5rem" ta="center" mb={50}>
            <Box mb={10}>
              <div style={{ width: 45, height: 4, backgroundColor: '#D64045', margin: '0 auto' }} />
            </Box>
            Core Value Kita
          </Title>
          <Stack gap="xl">
            {['B', 'R', 'I', 'D', 'G', 'E'].map((letter, index) => (
              <Box 
                key={index}
                p={30}
                bg="white"
                style={{
                  borderRadius: 12,
                  height: '100%',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <Group align="center" mb="xs">
                  <Box style={{ transform: 'rotate(-10deg)' }}>
                    {letter === 'B' && <IconLetterB size={48} color="blue" />}
                    {letter === 'R' && <IconLetterR size={48} color="blue" />}
                    {letter === 'I' && <IconLetterI size={48} color="blue" />}
                    {letter === 'D' && <IconLetterD size={48} color="blue" />}
                    {letter === 'G' && <IconLetterG size={48} color="blue" />}
                    {letter === 'E' && <IconLetterE size={48} color="blue" />}
                  </Box>
                  <Stack gap={0}>
                    <Title order={3} size="xl">{letter === 'B' ? 'Bold Innovation' : letter === 'R' ? 'Reliability' : letter === 'I' ? 'Integrity' : letter === 'D' ? 'Development' : letter === 'G' ? 'Global Perspective' : 'Excellence in Service'}</Title>
                    <Text>
                      {letter === 'B' ? 'Berani menghadirkan solusi inovatif yang menggabungkan teknologi canggih dan metode edukasi terbaik.' :
                      letter === 'R' ? 'Memberikan layanan yang andal dan terpercaya untuk memenuhi kebutuhan klien dan pelajar.' :
                      letter === 'I' ? 'Menjunjung tinggi etika, transparansi, dan kejujuran dalam setiap aspek kerja.' :
                      letter === 'D' ? 'Fokus Berkomitmen pada pengembangan potensi individu melalui teknologi dan pendidikan.' :
                      letter === 'G' ? 'Mengintegrasikan wawasan global untuk menciptakan dampak lokal yang berarti.' :
                      'Selalu memberikan yang terbaik dalam konsultasi IT dan layanan edukasi untuk menciptakan nilai jangka panjang.'}
                    </Text>
                  </Stack>
                </Group>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box py={80} bg="white">
        <Container size="lg">
        <Title order={2} size="2.5rem" ta="center" mb={50}>
            <Box mb={10}>
              <div style={{ width: 45, height: 4, backgroundColor: '#D64045', margin: '0 auto' }} />
            </Box>
            Tim Kami
          </Title>
          <Grid>
            {[
              { name: 'Bayu Eka Wibowo', position: 'Founder & CEO', image: '/about-us-1.jpg' },
              { name: 'Nur Hidayati Sihono', position: 'Chief Operations Officer', image: '/about-us-2.jpg' },
              { name: 'Firsta Royan Daliska', position: 'Head of Scholarship Services', image: '/about-us-3.jpg' },
              { name: 'Andre Diwa Aji', position: 'Development Center Director', image: '/about-us-4.jpg' },
            ].map((member, index) => (
              <GridCol key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <Box 
                  pb={20}
                  style={{
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
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

      <Box py={80} bg="#D64045">
        <Container size="lg">
          <Title order={2} size="3rem" ta="center" mb={30} c="white">Contact Us</Title>
          <Text size="lg" ta="center" c="white" mb={50}>
            Kami adalah mitra terpercaya Anda untuk <span style={{ fontWeight: 500 }}>layanan IT consultant</span> dan <span style={{ fontWeight: 500 }}>program beasiswa unggulan</span>.
            <br />
            Kami hadir untuk membantu Anda mengoptimalkan teknologi bisnis sekaligus mendukung pendidikan generasi muda.
          </Text>
          
          <Box bg="white" p={40} style={{ borderRadius: 16 }}>
            <Stack gap="xl">
              <Title order={3}>Hubungi Kami untuk Solusi IT dan Program Beasiswa Terbaik</Title>
              <Text style={{ textAlign: 'justify' }}>
                Selamat datang di Scolarsia, mitra terpercaya Anda untuk layanan IT consultant dan program beasiswa unggulan. Kami hadir untuk membantu Anda mengoptimalkan teknologi bisnis sekaligus mendukung pendidikan generasi muda.
              </Text>

              <Stack gap="xl">
                <Title order={3}>Mengapa Memilih Kami?</Title>
                <Stack gap="md">
                  <Text>1. Layanan IT Consultant yang Profesional</Text>
                  <Text style={{ textAlign: 'justify' }}>2. Dengan pengalaman bertahun-tahun, kami menyediakan solusi teknologi yang inovatif, mulai dari analisis kebutuhan, perancangan sistem, hingga implementasi yang sesuai dengan kebutuhan bisnis Anda.</Text>
                  <Text>3. Program Beasiswa yang Memberdayakan</Text>
                  <Text style={{ textAlign: 'justify' }}>4. Kami berkomitmen untuk mendukung pendidikan melalui program beasiswa yang mencakup berbagai bidang studi. Temukan peluang beasiswa terbaik untuk Anda atau keluarga Anda.</Text>
                </Stack>
              </Stack>

              <Stack gap="xl">
                <Title order={3}>Cara Menghubungi Kami</Title>
                <Text style={{ textAlign: 'justify' }}>
                  Kami memahami pentingnya respons cepat dan solusi tepat. Tim kami siap melayani Anda melalui berbagai saluran komunikasi berikut:
                </Text>
                <Stack gap="md">
                  <Group>
                    <IconDeviceDesktop size={24} />
                    <Text>Telepon: 089618451510</Text>
                  </Group>
                  <Group>
                    <IconInfoCircle size={24} />
                    <Text>Email: halo@scolarsia.com</Text>
                  </Group>
                  <Group>
                    <IconGlobe size={24} />
                    <Text>Formulir Online: Isi Formulir Kontak kami untuk mendapatkan respons cepat.</Text>
                  </Group>
                  <Group align="flex-start">
                    <IconExternalLink size={24} style={{ marginTop: 4 }} />
                    <Text>Kunjungi Kantor: Jl. Masjid Al Akbar Utara 3 Lt. 3, Jambangan – Surabaya, 60233</Text>
                  </Group>
                </Stack>
              </Stack>

              <Stack gap="md">
                <Text fw={600}>Jam Operasional:</Text>
                <Text>Senin - Jumat: 08.00 - 17.00 WIB</Text>
                <Text>Sabtu: 09.00 - 14.00 WIB</Text>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box py={80} bg="white">
        <Container size="lg">
          <Title order={2} size="2.5rem" ta="center" mb={50}>
            <Box mb={10}>
              <div style={{ width: 45, height: 4, backgroundColor: '#D64045', margin: '0 auto' }} />
            </Box>
            Sering Ditanyakan
          </Title>
          
          <Stack gap="md" maw={800} mx="auto">
            <Accordion variant="separated">
              <AccordionItem value="scholarship">
                <AccordionControl>
                  <Text size="lg">Apa saja syarat untuk mendapatkan beasiswa?</Text>
                </AccordionControl>
                <AccordionPanel>
                  <Text size="md" style={{ textAlign: 'justify' }}>
                    Kami memiliki kriteria yang fleksibel untuk berbagai program beasiswa. Hubungi kami untuk detailnya.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem value="consultation">
                <AccordionControl>
                  <Text size="lg">Bagaimana cara memulai konsultasi IT?</Text>
                </AccordionControl>
                <AccordionPanel>
                  <Text size="md" style={{ textAlign: 'justify' }}>
                    Anda dapat mengisi formulir kontak atau langsung menghubungi kami untuk penjadwalan sesi konsultasi gratis.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Container>
      </Box>

      <Box py={80}>
        <Container size="lg">
          <EmailBanner />
        </Container>
      </Box>
    </>
  );
} 
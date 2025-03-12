'use client';

import { 
  Box, 
  Container, 
  Text, 
  Title, 
  Grid, 
  GridCol, 
  Image, 
  Stack, 
  Group, 
  Button, 
  TextInput,
  Textarea,
  Select,
  Paper,
  SimpleGrid
} from '@mantine/core';
import { IconCheck, IconChartBar, IconHeartHandshake, IconShield } from '@tabler/icons-react';
import { EmailBanner } from '@/components/email-banner.section';

export default function MitraPage() {
  return (
    <>
      {/* Hero Section */}
      <Box style={{
        marginTop: '-60px',
        padding: '100px 0 0',
        backgroundColor: '#FBF8F1',
        position: 'relative',
        overflow: 'hidden',
        '@media (max-width: 768px)': {
          padding: '60px 0',
        }
      }}>
        <Container size="lg">
          <Grid gutter={50}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Title order={1} size="3rem" style={{ color: '#333', lineHeight: 1.2 }}>
                  Bergabunglah menjadi mitra kami
                </Title>
                <Text size="lg">
                  Bersama Kami,<br />
                  Kembangkan Potensi dan Raih Kesuksesan!
                </Text>
                <Text>
                  Kami mengundang Anda untuk menjadi bagian dari kemitraan yang saling
                  menguntungkan. Dengan jaringan global, layanan unggulan, dan dedikasi terhadap
                  inovasi, kami berkomitmen untuk mendukung mitra kami mencapai tujuan bersama.
                </Text>
                <Group>
                  <Button variant="filled" color="#E63946" size="md">
                    Hubungi Kami
                  </Button>
                  <Button variant="outline" color="#E63946" size="md">
                    Daftar Sebagai Mitra
                  </Button>
                </Group>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Image
                  src="/mitra.png"
                  alt="Partnership"
                  radius="md"
                  w='80%'
                  h='auto'
                  fit="cover"
                />
              </Box>
            </GridCol>
          </Grid>
        </Container>
      </Box>

      {/* Why Partner With Us Section */}
      <Box style={{
        padding: '80px 0',
        backgroundColor: '#fff',
        '@media (max-width: 768px)': {
          padding: '60px 0',
        }
      }}>
        <Container size="lg">
          <Title order={2} size="2.5rem" ta="center" mb={50}>
            Mengapa Bermitra dengan Kami?
          </Title>
          
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={30}>
            <Paper p="xl" radius="md" style={{
              backgroundColor: '#fff',
              border: '1px solid #eaeaea',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              height: '100%',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }
            }}>
              <Box mb="md">
                <IconChartBar size={48} color="#E63946" />
              </Box>
              <Title order={3} size="h4" mb="sm">Keuntungan Kompetitif</Title>
              <Text size="sm">
                Dapatkan akses ke peluang bisnis baru dari pasar global.
              </Text>
            </Paper>

            <Paper p="xl" radius="md" style={{
              backgroundColor: '#fff',
              border: '1px solid #eaeaea',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              height: '100%',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }
            }}>
              <Box mb="md">
                <IconShield size={48} color="#E63946" />
              </Box>
              <Title order={3} size="h4" mb="sm">Dukungan Profesional</Title>
              <Text size="sm">
                Tim kami siap membantu dengan strategi dan solusi yang Anda butuhkan.
              </Text>
            </Paper>

            <Paper p="xl" radius="md" style={{
              backgroundColor: '#fff',
              border: '1px solid #eaeaea',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              height: '100%',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }
            }}>
              <Box mb="md">
                <IconHeartHandshake size={48} color="#E63946" />
              </Box>
              <Title order={3} size="h4" mb="sm">Kerja Sama Berkelanjutan</Title>
              <Text size="sm">
                Kami percaya pada hubungan jangka panjang yang saling menguntungkan.
              </Text>
            </Paper>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Who Can Be Our Partner Section */}
      <Box style={{
        padding: '80px 0',
        backgroundColor: '#F9F9F9',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '300px',
          height: '300px',
          backgroundColor: 'rgba(230, 57, 70, 0.1)',
          borderRadius: '50%',
          bottom: '-150px',
          left: '-150px',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '400px',
          height: '400px',
          backgroundColor: 'rgba(251, 200, 0, 0.1)',
          borderRadius: '50%',
          top: '-200px',
          right: '-200px',
          zIndex: 0,
        },
        '@media (max-width: 768px)': {
          padding: '60px 0',
        }
      }}>
        <Container size="lg">
          <Grid gutter={50}>
            <GridCol span={{ base: 12, md: 5 }}>
              <Stack gap="xl">
                <Title order={2} size="2.5rem">
                  Siapa yang Bisa Menjadi Mitra Kami?
                </Title>
                <Box style={{ position: 'relative', zIndex: 1 }}>
                  <Group gap="sm" mb="md">
                    <IconCheck size={20} color="#4CAF50" />
                    <Text>Institusi Pendidikan</Text>
                  </Group>
                  <Group gap="sm" mb="md">
                    <IconCheck size={20} color="#4CAF50" />
                    <Text>Perusahaan Teknologi</Text>
                  </Group>
                  <Group gap="sm" mb="md">
                    <IconCheck size={20} color="#4CAF50" />
                    <Text>Penyedia Layanan Pelatihan dan Pendidikan</Text>
                  </Group>
                  <Group gap="sm" mb="md">
                    <IconCheck size={20} color="#4CAF50" />
                    <Text>Komunitas dan Organisasi Nonprofit</Text>
                  </Group>
                </Box>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 7 }}>
              <Paper p="xl" radius="md" shadow="md" style={{
                position: 'relative',
                zIndex: 1,
                backgroundColor: '#fff',
              }}>
                <Title order={3} size="h3" ta="center" mb="xl" c="#E63946">
                  Be Our Partner
                </Title>
                <form>
                  <Stack gap="md">
                    <TextInput
                      label="Name"
                      placeholder="Your name"
                      required
                    />
                    <TextInput
                      label="Email"
                      placeholder="your@email.com"
                      required
                    />
                    <TextInput
                      label="Phone"
                      placeholder="+62 xxx xxxx xxxx"
                      required
                    />
                    <TextInput
                      label="Address"
                      placeholder="Your address"
                      required
                    />
                    <Select
                      label="Type of Company"
                      placeholder="Select company type"
                      data={[
                        { value: 'education', label: 'Institusi Pendidikan' },
                        { value: 'tech', label: 'Perusahaan Teknologi' },
                        { value: 'training', label: 'Penyedia Layanan Pelatihan' },
                        { value: 'nonprofit', label: 'Organisasi Nonprofit' },
                        { value: 'other', label: 'Lainnya' },
                      ]}
                      required
                    />
                    <Textarea
                      label="Message"
                      placeholder="Tell us about your organization and how you'd like to partner with us"
                      minRows={3}
                    />
                    <Button 
                      fullWidth 
                      color="#E63946" 
                      mt="md"
                    >
                      Mulai Langkahmu
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </GridCol>
          </Grid>
        </Container>
      </Box>

      {/* Current Partners Section */}
      {/* <Box style={{
        padding: '80px 0',
        backgroundColor: '#fff',
        '@media (max-width: 768px)': {
          padding: '60px 0',
        }
      }}>
        <Container size="lg">
          <Title order={2} size="2.5rem" ta="center" mb={50}>
            Mitra Kami
          </Title>
          <SimpleGrid cols={{ base: 2, sm: 3, md: 5 }} spacing={30}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <Box key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                border: '1px solid #eaeaea',
                borderRadius: '8px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}>
                <Image
                  src={`/partner-logo-${index}.png`}
                  alt={`Partner ${index}`}
                  fallbackSrc="https://placehold.co/200x100?text=Partner+Logo"
                  fit="contain"
                  height={80}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box> */}

      {/* Email Banner */}
      <Box py={{ base: 40, md: 80 }}>
        <Container size="lg">
          <EmailBanner />
        </Container>
      </Box>
    </>
  );
} 
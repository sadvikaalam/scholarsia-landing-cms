"use client";

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
  SimpleGrid,
} from "@mantine/core";
import {
  IconCheck,
  IconChartBar,
  IconHeartHandshake,
  IconShield,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import { EmailBanner } from "@/components/email-banner.section";

export default function MitraPage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        pos={"relative"}
        mt={40}
        py={{ base: 40, md: 60 }}
        style={{
          borderRadius: "0 0 24px 24px",
          backgroundColor: "#E63946",
          backgroundImage: `url('/bg-pattern-3.png')`, // Optional SVG or PNG
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundPosition: "center",
          overflow: "hidden",
          // "@media (max-width: 768px)": {
          //   padding: "60px 0",
          // },
        }}
      >
        <Box
          pos={"absolute"}
          top={0}
          right={0}
          bottom={0}
          left={0}
          bg={"#E63946"}
          opacity={0.8}
        />
        <Container size="lg" pos={"relative"}>
          <Grid grow justify="center" align="center" gutter={50}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Title
                  order={1}
                  size="3rem"
                  style={{ color: "#fff", lineHeight: 1.2 }}
                >
                  Bergabunglah menjadi mitra kami
                </Title>
                <Text size="lg" c={"white"}>
                  Bersama Kami,
                  <br />
                  Kembangkan Potensi dan Raih Kesuksesan!
                </Text>
                <Text c={"white"}>
                  Kami mengundang Anda untuk menjadi bagian dari kemitraan yang
                  saling menguntungkan. Dengan jaringan global, layanan
                  unggulan, dan dedikasi terhadap inovasi, kami berkomitmen
                  untuk mendukung mitra kami mencapai tujuan bersama.
                </Text>
                <Group>
                  <Button variant="outline" color="white" size="md">
                    Hubungi Kami
                  </Button>
                  <Button variant="white" color="#E63946" size="md">
                    Daftar Sebagai Mitra
                  </Button>
                </Group>
              </Stack>
            </GridCol>
            <GridCol w={"100%"} span={{ base: 12, md: 6 }}>
              <Box
                h={{ base: 390, sm: 444 }}
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  style={{
                    width: 459,
                    height: 459,
                    background: `radial-gradient(circle, #E63946, #AA1722)`,
                    borderRadius: "50%",
                    position: "absolute",
                    top: "52%",
                    left: "52%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                  }}
                />
                <Box style={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src="/mitra.png"
                    alt="Mitra"
                    width={"80%"}
                    height={"auto"}
                    fit="contain"
                  />
                </Box>
              </Box>
            </GridCol>
          </Grid>
        </Container>
      </Box>

      {/* Why Partner With Us Section */}
      <Box
        style={{
          padding: "80px 0",
          backgroundColor: "#fff",
          "@media (max-width: 768px)": {
            padding: "60px 0",
          },
        }}
      >
        <Container size="lg">
          <Title order={2} size="2.5rem" ta="center" mb={50}>
            Mengapa Bermitra dengan Kami?
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={30}>
            <Paper
              p="xl"
              radius="md"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #eaeaea",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Box
                mb="md"
                bg={"#E7E7E7"}
                style={{
                  borderRadius: "7.5px",
                  display: "flex",
                  width: "80px",
                  height: "80px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconChartBar size={48} color="#E63946" />
              </Box>
              <Title order={3} size="h4" mb="sm">
                Keuntungan Kompetitif
              </Title>
              <Text size="sm">
                Dapatkan akses ke peluang bisnis baru dari pasar global.
              </Text>
            </Paper>

            <Paper
              p="xl"
              radius="md"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #eaeaea",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Box
                mb="md"
                bg={"#E7E7E7"}
                style={{
                  borderRadius: "7.5px",
                  display: "flex",
                  width: "80px",
                  height: "80px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconRosetteDiscountCheckFilled size={48} color="#E63946" />
              </Box>
              <Title order={3} size="h4" mb="sm">
                Dukungan Profesional
              </Title>
              <Text size="sm">
                Tim kami siap membantu dengan strategi dan solusi yang Anda
                butuhkan.
              </Text>
            </Paper>

            <Paper
              p="xl"
              radius="md"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #eaeaea",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Box
                mb="md"
                bg={"#E7E7E7"}
                style={{
                  borderRadius: "7.5px",
                  display: "flex",
                  width: "80px",
                  height: "80px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconHeartHandshake size={48} color="#E63946" />
              </Box>
              <Title order={3} size="h4" mb="sm">
                Kerja Sama Berkelanjutan
              </Title>
              <Text size="sm">
                Kami percaya pada hubungan jangka panjang yang saling
                menguntungkan.
              </Text>
            </Paper>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Who Can Be Our Partner Section */}
      <Box
        style={{
          padding: "80px 0",
          backgroundColor: "#F9F9F9",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "300px",
            height: "300px",
            backgroundColor: "rgba(230, 57, 70, 0.1)",
            borderRadius: "50%",
            bottom: "-150px",
            left: "-150px",
            zIndex: 0,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: "400px",
            height: "400px",
            backgroundColor: "rgba(251, 200, 0, 0.1)",
            borderRadius: "50%",
            top: "-200px",
            right: "-200px",
            zIndex: 0,
          },
          "@media (max-width: 768px)": {
            padding: "60px 0",
          },
        }}
      >
        <Container size="lg">
          <Image
            style={{
              position: "absolute",
              top: 200,
              left: 0,
              zIndex: 0,
              width: "150px",
            }}
            src="/circle-ornament.svg"
            alt="Ornament"
          />
          <Image
            style={{
              position: "absolute",
              top: 600,
              right: 0,
              zIndex: 0,
              width: "400px",
            }}
            src="/circle-ornament-3.svg"
            alt="Ornament"
          />
          <Grid align="center" justify="center" gutter={50}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Title order={2} size="2.5rem">
                Siapa yang Bisa Menjadi Mitra Kami?
              </Title>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <Box style={{ position: "relative", zIndex: 1 }}>
                <Group gap="sm" mb="md">
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      backgroundColor: "#2ECC71",
                      boxShadow: "2px 2px #27AE60",
                    }}
                  >
                    <IconCheck
                      stroke={4}
                      size={20}
                      color="#ECF0F1"
                      style={{ filter: `drop-shadow(2px 2px #27AE60)` }}
                    />
                  </Box>
                  <Text>Institusi Pendidikan</Text>
                </Group>
                <Group gap="sm" mb="md">
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      backgroundColor: "#2ECC71",
                      boxShadow: "2px 2px #27AE60",
                    }}
                  >
                    <IconCheck
                      stroke={4}
                      size={20}
                      color="#ECF0F1"
                      style={{ filter: `drop-shadow(2px 2px #27AE60)` }}
                    />
                  </Box>
                  <Text>Perusahaan Teknologi</Text>
                </Group>
                <Group gap="sm" mb="md">
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      backgroundColor: "#2ECC71",
                      boxShadow: "2px 2px #27AE60",
                    }}
                  >
                    <IconCheck
                      stroke={4}
                      size={20}
                      color="#ECF0F1"
                      style={{ filter: `drop-shadow(2px 2px #27AE60)` }}
                    />
                  </Box>
                  <Text>Penyedia Layanan Pelatihan dan Pendidikan</Text>
                </Group>
                <Group gap="sm" mb="md">
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      backgroundColor: "#2ECC71",
                      boxShadow: "2px 2px #27AE60",
                    }}
                  >
                    <IconCheck
                      stroke={4}
                      size={20}
                      color="#ECF0F1"
                      style={{ filter: `drop-shadow(2px 2px #27AE60)` }}
                    />
                  </Box>
                  <Text>Komunitas dan Organisasi Nonprofit</Text>
                </Group>
              </Box>
            </GridCol>
            <GridCol span={{ base: 12, md: 8 }}>
              <Paper
                p="xl"
                radius="md"
                shadow="md"
                style={{
                  position: "relative",
                  zIndex: 1,
                  backgroundColor: "#fff",
                }}
              >
                <Title order={3} size="h3" ta="center" mb="xl" c="#E63946">
                  Be Our Partner
                </Title>
                <form>
                  <Stack gap="md">
                    <TextInput label="Name" placeholder="Your name" required />
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
                        { value: "education", label: "Institusi Pendidikan" },
                        { value: "tech", label: "Perusahaan Teknologi" },
                        {
                          value: "training",
                          label: "Penyedia Layanan Pelatihan",
                        },
                        { value: "nonprofit", label: "Organisasi Nonprofit" },
                        { value: "other", label: "Lainnya" },
                      ]}
                      required
                    />
                    <Textarea
                      label="Message"
                      placeholder="Tell us about your organization and how you'd like to partner with us"
                      minRows={3}
                    />
                    <Group justify="end">
                      <Button color="#E63946" mt="md">
                        Mulai Langkahmu
                      </Button>
                    </Group>
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
      {/* <Box py={{ base: 40, md: 80 }}>
        <Container size="lg">
          <EmailBanner />
        </Container>
      </Box> */}
    </>
  );
}

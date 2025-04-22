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
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  SimpleGrid,
  Center,
  AspectRatio,
  Flex,
  Card,
  CardSection,
} from "@mantine/core";
import { EmailBanner } from "@/components/email-banner.section";
import {
  IconInfoCircle,
  IconDeviceDesktop,
  IconGlobe,
  IconExternalLink,
  IconLetterB,
  IconLetterR,
  IconLetterI,
  IconLetterD,
  IconLetterG,
  IconLetterE,
  IconFileFilled,
} from "@tabler/icons-react";
import QuotesIcon from "@/components/icons/QuotesIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import CommunityIcon from "@/components/icons/CommunityIcon";
import BulbIcon from "@/components/icons/BulbIcon";

export default function AboutPage() {
  return (
    <>
      {/* About Us */}
      <Box
        py={80}
        pb={80}
        mt={40}
        style={{
          display: "block",
          borderRadius: "0 0 24px 24px",
          backgroundImage: `url('/bg-pattern-2.png')`, // Optional SVG or PNG
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundColor: "#E63946",
        }}
      >
        <Container size="lg">
          <Grid gutter={50}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Title style={{ color: "#f2f2f2" }} order={1} size="3rem">
                  Tentang Kami
                </Title>
                <Text size="lg" style={{ color: "#f2f2f2" }}>
                  Kami adalah platform edukasi terdepan yang berkomitmen untuk
                  menghubungkan pelajar Indonesia dengan peluang pendidikan
                  internasional terbaik. Dengan layanan informasi beasiswa
                  global, program pertukaran pelajar, dan kemitraan pendidikan
                  internasional, kami mendukung pelajar Indonesia meraih
                  cita-cita mereka dan menjadi generasi yang siap bersaing di
                  dunia global.
                </Text>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <Flex
                direction={"row-reverse"}
                justify={"end"}
                gap={"md"}
                style={{ position: "relative" }}
                wrap={"wrap"}
              >
                <AspectRatio ratio={1 / 1} maw={155} mt={{ base: 75, md: 150 }}>
                  <Image
                    src="/about-us-hero-img-2.jpg"
                    alt="Scholarsia Team"
                    radius="md"
                    fit="cover"
                  />
                </AspectRatio>
                <Flex
                  direction={"column"}
                  justify={"end"}
                  align={{ base: "start", md: "end" }}
                  gap={"md"}
                >
                  <AspectRatio ratio={1 / 1} maw={{ base: 155, md: 260 }}>
                    <Image
                      src="/about-us-hero-img-1.jpg"
                      alt="Scholarsia Team"
                      radius="md"
                      fit="cover"
                    />
                  </AspectRatio>
                  <AspectRatio ratio={1 / 1} maw={155}>
                    <Image
                      src="/about-us-hero-img-3.jpg"
                      alt="Scholarsia Team"
                      radius="md"
                      fit="cover"
                    />
                  </AspectRatio>
                </Flex>
              </Flex>
            </GridCol>
          </Grid>
        </Container>
      </Box>

      {/* Our Vision */}
      <Box
        py={80}
        style={{
          backgroundImage: `url(./bg-visi.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container size="lg">
          <Stack
            gap="xl"
            h={400}
            align="center"
            maw={"48rem"}
            mx={"auto"}
            justify="center"
          >
            <Title order={2} ta={"center"} size="2.5rem" c={"#D64045"}>
              Visi Kami
            </Title>
            <Text size="lg" ta={"center"}>
              Menjadi platform edukasi terkemuka yang menghubungkan pelajar
              Indonesia dengan beasiswa internasional dan menjembatani
              kolaborasi pendidikan global, mencetak generasi kompetitif di
              dunia internasional.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Our Mission */}
      <Box py={80} bg="#f2f2f2" style={{ position: "relative" }}>
        <div className="mantine-visible-from-md">
          <Image
            style={{
              position: "absolute",
              top: 300,
              right: 0,
              zIndex: 0,
              width: "200px",
            }}
            src="/circle-ornament-2.svg"
            alt="Ornament"
          />
        </div>
        <Container size="lg">
          <Title c={"#D64045"} order={2} size="2.5rem" ta="center" mb={50}>
            Misi Kita
          </Title>
          <SimpleGrid
            mx={"auto"}
            maw={"rem"}
            cols={{ base: 1, xs: 2, md: 4 }}
            mt={50}
            spacing="md"
          >
            <Card
              shadow="md"
              radius="md"
              style={{ marginBottom: "20px", borderRadius: "8px" }}
              p="lg"
            >
              <CardSection>
                <Box p="md">
                  <Stack justify="center">
                    <Box
                      bg={"#E7E7E7"}
                      p={"md"}
                      style={{
                        borderRadius: "7.5px",
                        display: "flex",
                        width: "80px",
                        height: "80px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <GlobeIcon fill="#E63946" />
                    </Box>
                    <Text fw={700} size="lg">
                      Menyediakan Informasi Beasiswa Global
                    </Text>
                    <Text size="sm" c="dimmed">
                      Memberikan informasi terkini dan terpercaya tentang
                      peluang beasiswa internasional bagi pelajar Indonesia.
                    </Text>
                  </Stack>
                </Box>
              </CardSection>
            </Card>
            <Card
              shadow="md"
              radius="md"
              style={{ marginBottom: "20px", borderRadius: "8px" }}
              p="lg"
            >
              <CardSection>
                <Box p="md">
                  <Stack justify="center">
                    <Box
                      bg={"#E7E7E7"}
                      p={"md"}
                      style={{
                        borderRadius: "7.5px",
                        display: "flex",
                        width: "80px",
                        height: "80px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BulbIcon fill="#E63946" />
                    </Box>
                    <Text fw={700} size="lg">
                      Mendukung Proses Aplikasi Pelajar
                    </Text>
                    <Text size="sm" c="dimmed">
                      Memberikan informasi terkini dan terpercaya tentang
                      peluang beasiswa internasional bagi pelajar Indonesia.
                    </Text>
                  </Stack>
                </Box>
              </CardSection>
            </Card>
            <Card
              shadow="md"
              radius="md"
              style={{ marginBottom: "20px", borderRadius: "8px" }}
              p="lg"
            >
              <CardSection>
                <Box p="md">
                  <Stack justify="center">
                    <Box
                      bg={"#E7E7E7"}
                      p={"md"}
                      style={{
                        borderRadius: "7.5px",
                        display: "flex",
                        width: "80px",
                        height: "80px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IconFileFilled size={48} fill="#E63946" />
                    </Box>
                    <Text fw={700} size="lg">
                      Membangun Kerja Sama Internasional
                    </Text>
                    <Text size="sm" c="dimmed">
                      Memfasilitasi kemitraan antara universitas global dan
                      lembaga pendidikan Indonesia untuk pertukaran, penelitian,
                      dan pengembangan kurikulum.
                    </Text>
                  </Stack>
                </Box>
              </CardSection>
            </Card>
            <Card
              shadow="md"
              radius="md"
              style={{ marginBottom: "20px", borderRadius: "8px" }}
              p="lg"
            >
              <CardSection>
                <Box p="md">
                  <Stack justify="center">
                    <Box
                      bg={"#E7E7E7"}
                      p={"md"}
                      style={{
                        borderRadius: "7.5px",
                        display: "flex",
                        width: "80px",
                        height: "80px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CommunityIcon fill="#E63946" />
                    </Box>
                    <Text fw={700} size="lg">
                      Mengembangkan Potensi Global Pelajar
                    </Text>
                    <Text size="sm" c="dimmed">
                      Mempersiapkan pelajar Indonesia menghadapi tantangan
                      global melalui program pendidikan dan pengembangan diri
                      yang relevan.
                    </Text>
                  </Stack>
                </Box>
              </CardSection>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box
        py={80}
        pb={80}
        style={{
          background: `linear-gradient(180deg, #E63946 0%, #AA1722 100%)`, // Optional SVG or PNG
        }}
      >
        <Container size="lg">
          <Grid gutter={50}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Image
                src="/hero-picture-1.png"
                alt="Scholarsia Team"
                radius="md"
                height={400}
                fit="cover"
              />
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <QuotesIcon width={100} fill="#FFC107" />
              <Stack gap="xl">
                <Title style={{ color: "#f2f2f2" }} order={1} size="3rem">
                  Mengapa Memilih Kami
                </Title>
                <Text size="lg" style={{ color: "#f2f2f2" }}>
                  Kami percaya pada kekuatan pendidikan untuk mengubah hidup.
                  Dengan menghubungkan aspirasi lokal dengan peluang global,
                  kami memberdayakan pelajar Indonesia untuk meraih impian
                  mereka dan berkontribusi pada kemajuan Indonesia di tingkat
                  internasional.
                </Text>
              </Stack>
            </GridCol>
          </Grid>
        </Container>
      </Box>

      {/* Our Core Value */}
      <Box py={80} bg="#f2f2f2">
        <Container size="lg">
          <Title order={2} size="2.5rem" ta="center" mb={50}>
            <Box mb={10}>
              <div
                style={{
                  width: 45,
                  height: 4,
                  backgroundColor: "#D64045",
                  margin: "0 auto",
                }}
              />
            </Box>
            Core Value Kita
          </Title>
          <div className="mantine-visible-from-md">
            <SimpleGrid cols={6} spacing="sm">
              {["B", "R", "I", "D", "G", "E"].map((letter, index) => (
                <Box
                  key={index}
                  bg="white"
                  style={{
                    borderRadius: 12,
                    height: "100%",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    },
                    justifyContent: "center",
                  }}
                >
                  <Stack align="stretch" justify="center" mb="xs">
                    <Center
                      p={10}
                      h={"100%"}
                      w={"100%"}
                      bg={"red"}
                      style={{
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                    >
                      {letter === "B" && (
                        <IconLetterB size={250} color="white" />
                      )}
                      {letter === "R" && (
                        <IconLetterR size={250} color="white" />
                      )}
                      {letter === "I" && (
                        <IconLetterI size={250} color="white" />
                      )}
                      {letter === "D" && (
                        <IconLetterD size={250} color="white" />
                      )}
                      {letter === "G" && (
                        <IconLetterG size={250} color="white" />
                      )}
                      {letter === "E" && (
                        <IconLetterE size={250} color="white" />
                      )}
                    </Center>
                    <Stack gap={8} justify="center" p={20}>
                      <Title order={3} size="xl">
                        {letter === "B"
                          ? "Bold Innovation"
                          : letter === "R"
                          ? "Reliability"
                          : letter === "I"
                          ? "Integrity"
                          : letter === "D"
                          ? "Development"
                          : letter === "G"
                          ? "Global Perspective"
                          : "Excellence in Service"}
                      </Title>
                      <Text>
                        {letter === "B"
                          ? "Berani menghadirkan solusi inovatif yang menggabungkan teknologi canggih dan metode edukasi terbaik."
                          : letter === "R"
                          ? "Memberikan layanan yang andal dan terpercaya untuk memenuhi kebutuhan klien dan pelajar."
                          : letter === "I"
                          ? "Menjunjung tinggi etika, transparansi, dan kejujuran dalam setiap aspek kerja."
                          : letter === "D"
                          ? "Fokus Berkomitmen pada pengembangan potensi individu melalui teknologi dan pendidikan."
                          : letter === "G"
                          ? "Mengintegrasikan wawasan global untuk menciptakan dampak lokal yang berarti."
                          : "Selalu memberikan yang terbaik dalam konsultasi IT dan layanan edukasi untuk menciptakan nilai jangka panjang."}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </div>
          <div className="mantine-hidden-from-md">
            <Stack gap="xl">
              {["B", "R", "I", "D", "G", "E"].map((letter, index) => (
                <Box
                  key={index}
                  bg="white"
                  style={{
                    borderRadius: 12,
                    height: "100%",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Flex wrap={"nowrap"} align={"stretch"} gap={"md"}>
                    <Box
                      bg={"red"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderTopLeftRadius: 12,
                        borderBottomLeftRadius: 12,
                      }}
                    >
                      {letter === "B" && (
                        <IconLetterB size={48} color="white" />
                      )}
                      {letter === "R" && (
                        <IconLetterR size={48} color="white" />
                      )}
                      {letter === "I" && (
                        <IconLetterI size={48} color="white" />
                      )}
                      {letter === "D" && (
                        <IconLetterD size={48} color="white" />
                      )}
                      {letter === "G" && (
                        <IconLetterG size={48} color="white" />
                      )}
                      {letter === "E" && (
                        <IconLetterE size={48} color="white" />
                      )}
                    </Box>
                    <Stack gap={0} p={20} pl={0}>
                      <Title order={3} size="xl">
                        {letter === "B"
                          ? "Bold Innovation"
                          : letter === "R"
                          ? "Reliability"
                          : letter === "I"
                          ? "Integrity"
                          : letter === "D"
                          ? "Development"
                          : letter === "G"
                          ? "Global Perspective"
                          : "Excellence in Service"}
                      </Title>
                      <Text>
                        {letter === "B"
                          ? "Berani menghadirkan solusi inovatif yang menggabungkan teknologi canggih dan metode edukasi terbaik."
                          : letter === "R"
                          ? "Memberikan layanan yang andal dan terpercaya untuk memenuhi kebutuhan klien dan pelajar."
                          : letter === "I"
                          ? "Menjunjung tinggi etika, transparansi, dan kejujuran dalam setiap aspek kerja."
                          : letter === "D"
                          ? "Fokus Berkomitmen pada pengembangan potensi individu melalui teknologi dan pendidikan."
                          : letter === "G"
                          ? "Mengintegrasikan wawasan global untuk menciptakan dampak lokal yang berarti."
                          : "Selalu memberikan yang terbaik dalam konsultasi IT dan layanan edukasi untuk menciptakan nilai jangka panjang."}
                      </Text>
                    </Stack>
                  </Flex>
                </Box>
              ))}
            </Stack>
          </div>
        </Container>
      </Box>

      {/* Our Team */}
      <Box py={80} bg="#f2f2f2">
        <Container size="lg">
          <Stack gap={20} mb={50} align="center">
            <Title order={2} size="2.5rem" ta="center">
              <Box mb={10}>
                <div
                  style={{
                    width: 45,
                    height: 4,
                    backgroundColor: "#D64045",
                    margin: "0 auto",
                  }}
                />
              </Box>
              Tim Kami
            </Title>
            <Text c={'dimmed'} ta={'center'}>
              <Text span inherit fw={700}>Scolarsia</Text> memiliki tim yang terdiri dari individu-individu unik
              dan ahli di bidangnya masing-masing. Kami menyambut berbagai
              talenta dengan latar belakang yang beragam, yang memungkinkan kami
              untuk terus berkembang dan saling belajar satu sama lain. Dengan
              semangat kolaborasi dan inovasi, tim kami bekerja untuk
              menciptakan dampak positif di dunia pendidikan dan membangun
              solusi yang menginspirasi banyak orang.
            </Text>
          </Stack>
          <Grid>
            {[
              {
                name: "Bayu Eka Wibowo",
                position: "Founder & CEO",
                image: "/about-us-1.jpg",
              },
              {
                name: "Nur Hidayati Sihono",
                position: "Chief Operations Officer",
                image: "/about-us-2.jpg",
              },
              {
                name: "Firsta Royan Daliska",
                position: "Head of Scholarship Services",
                image: "/about-us-3.jpg",
              },
              {
                name: "Andre Diwa Aji",
                position: "Development Center Director",
                image: "/about-us-4.jpg",
              },
            ].map((member, index) => (
              <GridCol key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <Box
                  pb={20}
                  style={{
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
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

      {/* Contact Us */}
      <Box py={80} bg="#D64045">
        <Container size="lg">
          <Title order={2} size="3rem" ta="center" mb={30} c="white">
            Contact Us
          </Title>
          <Text size="lg" ta="center" c="white" mb={50}>
            Kami adalah mitra terpercaya Anda untuk{" "}
            <span style={{ fontWeight: 500 }}>layanan IT consultant</span> dan{" "}
            <span style={{ fontWeight: 500 }}>program beasiswa unggulan</span>.
            <br />
            Kami hadir untuk membantu Anda mengoptimalkan teknologi bisnis
            sekaligus mendukung pendidikan generasi muda.
          </Text>

          <Box bg="white" p={40} style={{ borderRadius: 16 }}>
            <Stack gap="xl">
              <Title order={3}>
                Hubungi Kami untuk Solusi IT dan Program Beasiswa Terbaik
              </Title>
              <Text style={{ textAlign: "justify" }}>
                Selamat datang di Scolarsia, mitra terpercaya Anda untuk layanan
                IT consultant dan program beasiswa unggulan. Kami hadir untuk
                membantu Anda mengoptimalkan teknologi bisnis sekaligus
                mendukung pendidikan generasi muda.
              </Text>

              <Stack gap="xl">
                <Title order={3}>Mengapa Memilih Kami?</Title>
                <Stack gap="md">
                  <Text>1. Layanan IT Consultant yang Profesional</Text>
                  <Text style={{ textAlign: "justify" }}>
                    2. Dengan pengalaman bertahun-tahun, kami menyediakan solusi
                    teknologi yang inovatif, mulai dari analisis kebutuhan,
                    perancangan sistem, hingga implementasi yang sesuai dengan
                    kebutuhan bisnis Anda.
                  </Text>
                  <Text>3. Program Beasiswa yang Memberdayakan</Text>
                  <Text style={{ textAlign: "justify" }}>
                    4. Kami berkomitmen untuk mendukung pendidikan melalui
                    program beasiswa yang mencakup berbagai bidang studi.
                    Temukan peluang beasiswa terbaik untuk Anda atau keluarga
                    Anda.
                  </Text>
                </Stack>
              </Stack>

              <Stack gap="xl">
                <Title order={3}>Cara Menghubungi Kami</Title>
                <Text style={{ textAlign: "justify" }}>
                  Kami memahami pentingnya respons cepat dan solusi tepat. Tim
                  kami siap melayani Anda melalui berbagai saluran komunikasi
                  berikut:
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
                    <Text>
                      Formulir Online: Isi Formulir Kontak kami untuk
                      mendapatkan respons cepat.
                    </Text>
                  </Group>
                  <Group align="flex-start">
                    <IconExternalLink size={24} style={{ marginTop: 4 }} />
                    <Text>
                      Kunjungi Kantor: Jl. Masjid Al Akbar Utara 3 Lt. 3,
                      Jambangan – Surabaya, 60233
                    </Text>
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

      {/* FAQ */}
      <Box py={80} bg="white">
        <Container size="lg">
          <Title order={2} size="2.5rem" ta="center" mb={50}>
            <Box mb={10}>
              <div
                style={{
                  width: 45,
                  height: 4,
                  backgroundColor: "#D64045",
                  margin: "0 auto",
                }}
              />
            </Box>
            Sering Ditanyakan
          </Title>

          <Stack gap="md" maw={800} mx="auto">
            <Accordion variant="separated">
              <AccordionItem value="scholarship">
                <AccordionControl>
                  <Text size="lg">
                    Apa saja syarat untuk mendapatkan beasiswa?
                  </Text>
                </AccordionControl>
                <AccordionPanel>
                  <Text size="md" style={{ textAlign: "justify" }}>
                    Kami memiliki kriteria yang fleksibel untuk berbagai program
                    beasiswa. Hubungi kami untuk detailnya.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem value="consultation">
                <AccordionControl>
                  <Text size="lg">Bagaimana cara memulai konsultasi IT?</Text>
                </AccordionControl>
                <AccordionPanel>
                  <Text size="md" style={{ textAlign: "justify" }}>
                    Anda dapat mengisi formulir kontak atau langsung menghubungi
                    kami untuk penjadwalan sesi konsultasi gratis.
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

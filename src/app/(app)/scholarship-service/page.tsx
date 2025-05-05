"use client";

import {
  Title,
  Text,
  Card,
  Image,
  Badge,
  Group,
  Button,
  Stack,
  Box,
  Grid,
  GridCol,
  Container,
  List,
  ListItem,
} from "@mantine/core";
import {
  Icon,
  IconProps,
  IconSchool,
  IconSnowflake,
  IconSun,
  IconLanguage,
  IconBuildingStore,
  IconPinFilled,
  IconMapPinFilled,
} from "@tabler/icons-react";
import styles from "@/styles/shared.module.css";
import { ServiceCard } from "@/components/services.section";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type ServiceData = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  title: string;
  description: string;
};

interface FeaturedServiceProps {
  imageSrc: string;
  imageAlt: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
}

function FeaturedService({
  imageSrc,
  imageAlt,
  badge,
  title,
  subtitle,
  description,
}: FeaturedServiceProps) {
  return (
    <Group px={90} align="flex-start" grow wrap="nowrap">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={210}
        height={210}
        style={{ maxWidth: "300px", flexGrow: 0, flexShrink: 0 }}
      />
      <Stack maw="100%">
        <Badge color="blue" variant="filled">
          {badge}
        </Badge>
        <Title order={1}>{title}</Title>
        <Title c="#E63946" order={2} size="h3">
          {subtitle}
        </Title>
        <Text>{description}</Text>
      </Stack>
    </Group>
  );
}

interface ServicesGridProps {
  services: ServiceData[];
}

function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <Box px={100} mt={50} className={styles.serviceCards}>
      <Grid justify="center" gutter="md">
        {services.map((service, index) => (
          <GridCol span={{ base: 12, sm: 6 }} key={index}>
            <ServiceCard key={index} {...service} />
          </GridCol>
        ))}
      </Grid>
    </Box>
  );
}

const scholarshipServices: ServiceData[] = [
  {
    icon: IconSnowflake,
    title: "Konsultasi Beasiswa",
    description:
      "Dapatkan bimbingan personal dari konsultan berpengalaman yang akan membantu Anda menemukan beasiswa yang sesuai dengan profil akademik, minat, dan tujuan karir Anda. Kami menawarkan strategi aplikasi yang komprehensif untuk meningkatkan peluang Anda mendapatkan beasiswa impian.",
  },
  {
    icon: IconSun,
    title: "Persiapan Dokumen",
    description:
      "Layanan penyusunan dan review dokumen aplikasi beasiswa, termasuk personal statement, CV akademik, dan surat rekomendasi. Tim kami akan membantu Anda menyusun dokumen yang menarik dan sesuai dengan persyaratan beasiswa yang Anda tuju.",
  },
  {
    icon: IconBuildingStore,
    title: "Informasi Beasiswa Global",
    description:
      "Akses database komprehensif yang berisi ribuan peluang beasiswa dari universitas dan lembaga terkemuka di seluruh dunia. Database kami diperbarui secara berkala untuk memastikan Anda mendapatkan informasi terbaru tentang deadline, persyaratan, dan proses aplikasi.",
  },
  {
    icon: IconLanguage,
    title: "Persiapan Wawancara",
    description:
      "Program pelatihan intensif untuk mempersiapkan Anda menghadapi wawancara beasiswa. Kami menyediakan simulasi wawancara dengan feedback langsung dari para profesional yang berpengalaman dalam proses seleksi beasiswa internasional.",
  },
];

const capacityBuildingServices: ServiceData[] = [
  {
    icon: IconSchool,
    title: "Digital Skill Bootcamp",
    description:
      "Menawarkan pelatihan intensif untuk menguasai keterampilan teknologi terkini, seperti coding, desain grafis, analisis data, dan manajemen media sosial﻿. Dirancang untuk mempersiapkan peserta dalam menghadapi tantangan dunia digital, bootcamp ini memberikan pengetahuan praktis yang diperlukan untuk bersaing di pasar kerja modern.",
  },
  {
    icon: IconSchool,
    title: "Academic & Career Mentoring",
    description:
      "Memberikan panduan menyeluruh untuk mempersiapkan siswa dan mahasiswa dalam memasuki perguruan tinggi, merancang CV yang menarik, mempersiapkan wawancara kerja, serta mengembangkan soft skills yang penting di dunia profesional. Program ini bertujuan untuk memastikan setiap peserta siap menghadapi tantangan akademik dan karier dengan percaya diri.",
  },
  {
    icon: IconSchool,
    title: "Professional Certification Training",
    description:
      "Program persiapan sertifikasi profesional membantu peserta mempersiapkan ujian sertifikasi di berbagai bidang, seperti manajemen, teknologi informasi, dan pendidikan. Dengan mengikuti pelatihan ini, peserta dapat meningkatkan daya saing di pasar kerja dan memperkuat kredibilitas ﻿profesional mereka dengan sertifikasi yang diakui di industri.",
  },
];

const scholarshipPrograms = [
  {
    title: "Beasiswa Internasional",
    description:
      "Akses ke beasiswa dari universitas terkemuka di seluruh dunia untuk jenjang S1, S2, dan S3.",
    image: "/international-scholarship.svg",
    link: "/scholarship-service/international",
  },
  {
    title: "Beasiswa Pemerintah",
    description:
      "Informasi lengkap tentang beasiswa yang ditawarkan oleh pemerintah Indonesia dan negara lain.",
    image: "/government-scholarship.svg",
    link: "/scholarship-service/government",
  },
  {
    title: "Beasiswa Perusahaan",
    description:
      "Peluang beasiswa yang disponsori oleh perusahaan multinasional untuk pengembangan karir.",
    image: "/corporate-scholarship.svg",
    link: "/scholarship-service/corporate",
  },
];

export default function ScholarshipService() {
  const cards = scholarshipPrograms.map((program) => (
    <Card
      key={program.title}
      p="md"
      radius="md"
      style={{
        transition: "transform 200ms ease, box-shadow 200ms ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "var(--mantine-shadow-md)",
        },
      }}
    >
      <Card.Section>
        <Image
          src={program.image}
          alt={program.title}
          fallbackSrc="https://placehold.co/600x400?text=Program+Image"
          style={{ width: "50%", height: "auto" }}
        />
      </Card.Section>

      <Card.Section
        mt="md"
        style={{
          borderBottom: "1px solid var(--mantine-color-gray-2)",
          paddingBottom: "var(--mantine-spacing-md)",
        }}
      >
        <Group justify="space-between">
          <Text fw={500} size="lg">
            {program.title}
          </Text>
        </Group>
        <Text size="sm" mt="xs" c="dimmed">
          {program.description}
        </Text>
      </Card.Section>
    </Card>
  ));

  return (
    <>
      {/* Hero Banner */}
      <Box
        style={{
          backgroundImage: `url('/bg-pattern-2.png')`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundColor: "#E63946",
          padding: "40px",
          position: "relative",
          overflow: "visible",
          marginTop: "40px",
          zIndex: 1,
          borderRadius: "0 0 16px 16px",
          height: "400px",
        }}
      >
        <Title
          order={1}
          ta="center"
          size="3rem"
          style={{ color: "#fff", lineHeight: 1.2 }}
        >
          Scholarship Service
        </Title>
        <Box
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "40px",
            top: "60px",
            display: "flex",
            position: "relative",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            zIndex: 3,
            transform: "translateZ(0)",
          }}
        >
          <Box style={{ flex: 1 }}>
            <Title order={1} size="h1" fw={700}>
              Your Number{" "}
              <Text span c="#D33F49" inherit>
                #1 Best
              </Text>
            </Title>
            <Title order={1} size="h1" c="#D33F49" fw={700}>
              Support System
            </Title>
            <Title order={1} size="h1" fw={700}>
              untuk Persiapan Study Abroad
            </Title>

            <Text mt="md" c="dimmed">
              Telah mewujudkan mimpi{" "}
              <Text span fw={700} inherit>
                ribuan alumni
              </Text>{" "}
              untuk raih beasiswa dan lanjut studi ke{" "}
              <Text span fw={700} inherit>
                kampus top dunia
              </Text>
              .
            </Text>

            <Button
              mt="xl"
              size="md"
              color="red"
              radius="md"
              style={{
                backgroundColor: "#D33F49",
                "&:hover": { backgroundColor: "#C13640" },
              }}
            >
              Mulai Langkahmu
            </Button>
          </Box>

          <Box
            style={{
              position: "relative",
              width: "40%",
              maxWidth: "350px",
            }}
          >
            <Box
              style={{
                position: "relative",
                zIndex: 2,
                borderRadius: "50%",
                overflow: "hidden",
                width: "300px",
                height: "300px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/scholarship-service.png"
                alt="Student with book"
                width={280}
                height={280}
                fit="contain"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Stack mt={200} component="section" gap="lg">
        <Box p="xl">
          <FeaturedService
            imageSrc="/short-term-program.svg"
            imageAlt="Short Term Program"
            badge="Layanan Beasiswa"
            title="Short Term Program"
            subtitle="Peluang Studi Luar Negeri untuk Mahasiswa Indonesia: Investasi Masa Depan Anda"
            description="Program jangka pendek adalah kesempatan untuk mengasah keterampilan akademik atau profesional dalam waktu singkat, biasanya dari beberapa minggu hingga beberapa bulan."
          />

          <ServicesGrid services={scholarshipServices} />
        </Box>

        <Box bg="#8A3FFC14" p="xl">
          <FeaturedService
            imageSrc="/university-program.svg"
            imageAlt="University Program"
            badge="Pusat Pengembangan"
            title="University Program"
            subtitle="Jelajahi peluang kuliah di luar negeri"
            description="Apakah Anda bercita-cita untuk belajar di universitas ternama dunia? Program kuliah ke luar negeri adalah langkah terbaik untuk meraih pendidikan berkualitas dan pengalaman global. 

Universitas-universitas di Indonesia bekerja sama dengan kampus ternama seperti Harvard, University of Melbourne, dan Tokyo University, membuka peluang bagi mahasiswa untuk mengejar studi di luar negeri. Program ini sering kali dilengkapi dengan beasiswa, mempermudah mahasiswa Indonesia untuk mewujudkan mimpi mereka. Selain mendapatkan pendidikan unggulan, Anda juga akan memiliki kesempatan untuk menjelajahi budaya baru, memperluas jejaring internasional, dan meningkatkan kemampuan bahasa asing."
          />

          <ServicesGrid services={capacityBuildingServices} />
        </Box>
      </Stack>

      <Box py={40} px={{ base: 0, md: 80 }} bg={"#8A3FFC"}>
        {/* <EmailBanner /> */}
        <Container size={"lg"}>
          <Grid grow justify="center" align="center" gutter="50">
            <GridCol span={{ base: 12, md: 6 }}>
              <Stack gap={"xl"}>
                <Title c={"white"} order={2}>
                  Bingung Mulai Persiapan Studi Abroad?
                </Title>
                <Text c={"white"} mt={10} mb={20} ta={"justify"}>
                  Tidak tahu harus mulai dari mana? Tenang, kami siap membantu!
                  🚀 <br />
                  📌 Konsultasi dengan Ahli – Dapatkan panduan lengkap sesuai
                  kebutuhanmu. <br />
                  📌 #StudentSuccess – Wujudkan impian kuliah di luar negeri
                  dengan persiapan terbaik. <br />
                  📌 Bebas Pilih Jadwal – Konsultasi fleksibel, pilih waktu yang
                  paling nyaman untukmu!
                  <br />
                  📍 Alamat: Apartemen Mediterania Garden Residence 1, Tower
                  Dahlia Jl. Tanjung Duren Raya Kav. 5-9 RT/RW. 003/005 Kel.
                  Tanjung Duren Selatan, Kec. Grogol Petamburan, Kota Jakarta
                  Barat, DKI Jakarta - 11470
                </Text>
                <Box>
                  <Button
                    style={{ backgroundColor: "#FFC107", color: "#E63946" }}
                    variant="filled"
                  >
                    Hubungi Lebih Lanjut
                  </Button>
                </Box>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Image
                  src="/contact-us.png"
                  alt="Contact Us"
                  width={"80%"}
                  fit="cover"
                />
              </Box>
            </GridCol>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

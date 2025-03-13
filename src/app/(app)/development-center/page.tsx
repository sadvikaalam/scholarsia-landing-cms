'use client';

import { CardSection, Title, Text, SimpleGrid, Card, Image, Badge, Group, Button, rem, Stack, Box } from '@mantine/core';
import { Icon, IconArrowRight, IconCertificate, IconMoonStars, IconProps, IconSchool, IconTent, IconDeviceDesktop, IconBrowser, IconServer, IconLicense, IconWorld } from '@tabler/icons-react';
import classes from './development-center.module.css';
import styles from '@/styles/shared.module.css';
import { ServiceCard } from '@/components/services.section';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { EmailBanner } from '@/components/email-banner.section';

const scholarshipServices: ServiceData[] = [
  {
      icon: IconSchool,
      title: 'Konsultasi Beasiswa',
      description: 'Dapatkan bimbingan personal dari konsultan berpengalaman yang akan membantu Anda menemukan beasiswa yang sesuai dengan profil akademik, minat, dan tujuan karir Anda. Kami menawarkan strategi aplikasi yang komprehensif untuk meningkatkan peluang Anda mendapatkan beasiswa impian.',
  },
  {
      icon: IconCertificate,
      title: 'Persiapan Dokumen',
      description: 'Layanan penyusunan dan review dokumen aplikasi beasiswa, termasuk personal statement, CV akademik, dan surat rekomendasi. Tim kami akan membantu Anda menyusun dokumen yang menarik dan sesuai dengan persyaratan beasiswa yang Anda tuju.',
  },
  {
      icon: IconWorld,
      title: 'Informasi Beasiswa Global',
      description: 'Akses database komprehensif yang berisi ribuan peluang beasiswa dari universitas dan lembaga terkemuka di seluruh dunia. Database kami diperbarui secara berkala untuk memastikan Anda mendapatkan informasi terbaru tentang deadline, persyaratan, dan proses aplikasi.',
  },
  {
      icon: IconTent,
      title: 'Persiapan Wawancara',
      description: 'Program pelatihan intensif untuk mempersiapkan Anda menghadapi wawancara beasiswa. Kami menyediakan simulasi wawancara dengan feedback langsung dari para profesional yang berpengalaman dalam proses seleksi beasiswa internasional.',
  },
];

type ServiceData = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  title: string;
  description: string;
}

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
    <Group px={50} align="flex-start" grow mt={50} wrap="nowrap">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={300}
        style={{ maxWidth: '300px', flexGrow: 0, flexShrink: 0 }}
      />
      <Stack maw="100%">
        <Badge color="blue" variant="filled">{badge}</Badge>
        <Title order={1}>{title}</Title>
        <Title c="#E63946" order={2} size="h3">{subtitle}</Title>
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
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

const servicesData: ServiceData[] = [
  {
    icon: IconDeviceDesktop,
    title: 'IT Solution',
    description: 'Kami menghadirkan solusi IT terintegrasi, termasuk pengembangan perangkat lunak, pengelolaan data, optimalisasi jaringan, dan pengadaan perangkat keras inovatif. Solusi kami dirancang untuk meningkatkan efisiensi dan mendorong inovasi, membantu bisnis Anda tumbuh di era digital.'
  },
  {
    icon: IconBrowser,
    title: 'Learning Management System',
    description: 'Kami menawarkan platform pembelajaran digital yang dirancang untuk mengelola, menyampaikan, dan melacak proses belajar secara efisien. Solusi LMS kami mendukung pengembangan pendidikan berbasis teknologi modern.'
  },
  {
    icon: IconServer,
    title: 'IT Management',
    description: 'Kami menyediakan layanan manajemen TI yang terintegrasi untuk mengelola infrastruktur, aplikasi, dan sumber daya teknologi dengan cara yang lebih efisien. Pendekatan proaktif kami fokus pada peningkatan kinerja sistem, penguatan keamanan data, serta opti﻿masi proses operasional, membantu organisasi mencapai efisiensi maksimal dalam pemanfaatan teknologi.'
  },
  {
    icon: IconLicense,
    title: 'Licensing',
    description: 'Kami menyediakan layanan pengadaan lisensi resmi dari berbagai principal terkemuka, termasuk Microsoft. Solusi ini memastikan anda menggunakan software yang resmi, aman, dan mendukung produktivitas sekaligus kepatuhan terhadap regulasi.'
  },
];

const studentDevelopmentServices: ServiceData[] = [
  {
      icon: IconSchool,
      title: 'Scolarsia NextGen Student',
      description: 'Dapatkan bimbingan personal dari konsultan berpengalaman yang akan membantu Anda menemukan beasiswa yang sesuai dengan profil akademik, minat, dan tujuan karir Anda. Kami menawarkan strategi aplikasi yang komprehensif untuk meningkatkan peluang Anda mendapatkan beasiswa impian.',
  },
  {
      icon: IconMoonStars,
      title: 'Santri IT',
      description: 'Santri IT adalah program pengembangan keterampilan bagi para santri di lingkungan pesantren yang bertujuan untuk membekali mereka dengan kemampuan teknologi dan soft skill yang relevan dengan kebutuhan dunia modern. Program ini dirancang untuk mengintegrasikan nilai-nilai pesantren dengan Teknologi',
  },
];

const developmentPrograms = [
  {
    title: 'Tech Consulting & Solutions',
    description: 'Kami menghadirkan solusi IT cerdas yang menghubungkan dunia pendidikan dan bisnis untuk mencapai efisiensi dan inovasi. Dengan keahlian kami dalam solusi IT, Learning Management System (LMS), IT Management Solution, dan konsultasi lisensi, kami menyediakan layanan yang terintegrasi dan adaptif untuk mendukung transformasi digital. Kami berkomitmen untuk memberdayakan klien dalam meraih pertumbuhan berkelanjutan melalui teknologi yang memajukan pendidikan dan bisnis di era digital yang terus berkembang.',
    image: '/tech-consulting.svg',
    link: '/development-center/mentoring',
  },
  {
    title: 'Capacity Building',
    description: 'Program Capacity Building Scolarsia berfokus pada  pada﻿ pemberdayaan generasi muda melalui pengembangan keterampilan berbasis IT yang mempersiapkan mereka menghadapi tantangan era digital. Program kami mencakup pelatihan teknologi, kepemimpinan digital, dan kewirausahaan berbasis inovasi, dengan pendekatan terintegrasi yang memastikan siswa dan mahasiswa siap berkompetisi secara global.',
    image: '/capacity-building.svg',
    link: '/development-center/workshops',
  },
  {
    title: 'Student Development',
    description: 'Scolarsia Development Student Program adalah inisiatif komprehensif yang dirancang untuk memberdayakan siswa dengan keterampilan, pengetahuan, dan pengalaman yang esensial guna mencapai kesuksesan di bidang akademik maupun profesional.',
    image: '/student-development.svg',
    link: '/development-center/workshops',
  }
];

export default function DevelopmentCenter() {
  const cards = developmentPrograms.map((program) => (
    <Card shadow='md' key={program.title} radius="md" style={{ marginBottom: '20px', borderRadius: '8px' }} p="md">
      <CardSection>
        <Box p="md" style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src={program.image}
            alt={program.title}
            fallbackSrc="https://placehold.co/600x400?text=Program+Image"
            style={{ width: '50%', height: 'auto' }}
          />
        </Box>
      </CardSection>

      <CardSection>
        <Box p="md">
          <Group justify="center" w="100%">
            <Text fw={500} size="lg">{program.title}</Text>
          </Group>
        </Box>
      </CardSection>
    </Card>
  ));

  return (
    // <Container size="xl" py={40}>
    //   <Title order={1} style={{ textAlign: 'center', marginTop: '16px' }}>
    //     Scolarsia Development Center
    //   </Title>
    //   <Text style={{ color: 'dimmed', textAlign: 'justify', marginTop: '16px', marginBottom: '50px' }}>
    //     Scolarsia Development Center adalah pusat unggulan yang mengintegrasikan pengembangan keterampilan dengan inovasi pendidikan global. Kami menghadirkan program pelatihan komprehensif berbasis teknologi untuk memberdayakan pelajar dan profesional Indonesia, membekali mereka dengan keahlian relevan agar siap bersaing di kancah internasional. Melalui pendekatan kolaboratif, kami mendukung transformasi digital dan membangun generasi yang mampu menghadapi tantangan global dengan solusi kreatif dan inovatif.
    //   </Text>

    //   <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="xl" p="md" mt={50}>
    //     {cards}
    //   </SimpleGrid>

    //   <Box>
    //     <FeaturedService 
    //       imageSrc="/tech-consulting.svg"
    //       imageAlt="Tech Consulting"
    //       badge="Pusat Pengembangan"
    //       title="Tech Consulting & Solutions"
    //       subtitle="Empowering Education and Business Through Smart IT Solutions"
    //       description="Kami menghadirkan solusi IT cerdas yang menghubungkan dunia pendidikan dan bisnis untuk mencapai efisiensi dan inovasi. Dengan keahlian kami dalam solusi IT, Learning Management System (LMS), IT Management Solution, dan konsultasi lisensi, kami menyediakan layanan yang terintegrasi dan adaptif untuk mendukung transformasi digital. Kami berkomitmen untuk memberdayakan klien dalam meraih pertumbuhan berkelanjutan melalui teknologi yang memajukan pendidikan dan bisnis di era digital yang terus berkembang."
    //     />

    //     <ServicesGrid services={servicesData} />
    //   </Box>

    //   <Box style={{ backgroundColor: '#8A3FFC14' }}>
    //     <FeaturedService 
    //       imageSrc="/capacity-building.svg"
    //       imageAlt="Capacity Building"
    //       badge="Pusat Pengembangan"
    //       title="Capacity Building"
    //       subtitle="Empowering Education and Business Through Smart IT Solutions"
    //       description="Kami menghadirkan solusi IT cerdas yang menghubungkan dunia pendidikan dan bisnis untuk mencapai efisiensi dan inovasi. Dengan keahlian kami dalam solusi IT, Learning Management System (LMS), IT Management Solution, dan konsultasi lisensi, kami menyediakan layanan yang terintegrasi dan adaptif untuk mendukung transformasi digital. Kami berkomitmen untuk memberdayakan klien dalam meraih pertumbuhan berkelanjutan melalui teknologi yang memajukan pendidikan dan bisnis di era digital yang terus berkembang."
    //     />

    //     <ServicesGrid services={servicesData} />
    //   </Box>
    // </Container>
    <>
      <Box
        style={{
          background: 'linear-gradient(135deg, #D33F49 0%, #C13640 100%)',
          padding: '40px',
          position: 'relative',
          overflow: 'visible',
          marginTop: '40px',
          zIndex: 1,
          borderRadius: '0 0 16px 16px',
          height: '400px'
        }}
      >
        <Title order={1} ta="center" size="3rem" style={{ color: '#fff', lineHeight: 1.2 }}>
          Development Center
        </Title>
        <Text style={{ color: '#fff', textAlign: 'justify', marginTop: '16px', marginBottom: '50px' }}>
          Scolarsia Development Center adalah pusat unggulan yang mengintegrasikan pengembangan keterampilan dengan inovasi pendidikan global. Kami menghadirkan program pelatihan komprehensif berbasis teknologi untuk memberdayakan pelajar dan profesional Indonesia, membekali mereka dengan keahlian relevan agar siap bersaing di kancah internasional. Melalui pendekatan kolaboratif, kami mendukung transformasi digital dan membangun generasi yang mampu menghadapi tantangan global dengan solusi kreatif dan inovatif.
        </Text>

        <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="xl" p="md" mt={50}>
          {cards}
        </SimpleGrid>
      </Box>
      <Stack mt={200} component='section' gap="lg">
        <Box p="xl">
          <FeaturedService
            imageSrc="/tech-consulting.svg"
            imageAlt="Tech Consulting & Solutions"
            badge="Pusat Pengembangan"
            title="Tech Consulting & Solutions"
            subtitle="Empowering Education and Business Through Smart IT Solutions"
            description="Kami menghadirkan solusi IT cerdas yang menghubungkan dunia pendidikan dan bisnis untuk mencapai efisiensi dan inovasi. Dengan keahlian kami dalam solusi IT, Learning Management System (LMS), IT Management Solution, dan konsultasi lisensi, kami menyediakan layanan yang terintegrasi dan adaptif untuk mendukung transformasi digital.
Kami berkomitmen untuk memberdayakan klien dalam meraih pertumbuhan berkelanjutan melalui teknologi yang memajukan pendidikan dan bisnis di era digital yang terus berkembang."
          />

          <ServicesGrid services={servicesData} />
        </Box>

        <Box bg="#8A3FFC14" p="xl">
          <FeaturedService
            imageSrc="/capacity-building.svg"
            imageAlt="Capacity Building"
            badge="Pusat Pengembangan"
            title="Capacity Building"
            subtitle="Empowering the Next Generation Through IT-Driven Development"
            description="Program Capacity Building Scolarsia berfokus pada  pada pemberdayaan generasi muda melalui pengembangan keterampilan berbasis IT yang mempersiapkan mereka menghadapi tantangan era digital. Program kami mencakup pelatihan teknologi, kepemimpinan digital, dan kewirausahaan berbasis inovasi, dengan pendekatan terintegrasi yang memastikan siswa dan mahasiswa siap berkompetisi secara global. 

Kami bertujuan untuk menciptakan individu yang tidak hanya menguasai teknologi terkini, tetapi juga dapat berkontribusi dalam transformasi digital di berbagai sektor, menjadi pemimpin yang inovatif dan agen perubahan di dunia global."
          />

          <ServicesGrid services={scholarshipServices} />
        </Box>

        <Box p="xl">
                    <FeaturedService
                        imageSrc="/student-development.svg"
                        imageAlt="Short Term Program"
                        badge="Layanan Beasiswa"
                        title="Student Development Center"
                        subtitle="Empowering Dreams, Inspiring Change"
                        description="Scolarsia Development Student Program adalah inisiatif komprehensif yang dirancang untuk memberdayakan siswa dengan keterampilan, pengetahuan, dan pengalaman yang esensial guna mencapai kesuksesan di bidang akademik maupun profesional. 

Program ini berfokus pada pengembangan holistik melalui workshop yang terarah, sesi mentorship, dan proyek praktis yang mendorong pemikiran kritis, kreativitas, dan kepemimpinan. Dengan menjembatani kesenjangan antara pendidikan dan tantangan dunia nyata, Scolarsia bertujuan untuk membentuk individu yang berintegritas dan siap memberikan dampak positif di bidang pilihan mereka."
                    />

                    <ServicesGrid services={studentDevelopmentServices} />
                </Box>
      </Stack>

      <Box py={{ base: 40, md: 80 }}>
        <EmailBanner />
      </Box>
    </>
  );
} 
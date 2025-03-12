import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import styles from './services.section.module.css';
import {
  IconSchool,
  IconNotes,
  IconUserCheck,
  IconSearch,
  IconFiles,
  IconTent,
  IconUsers,
  IconHome,
  IconArrowRight,
  IconProps,
  Icon,
} from '@tabler/icons-react';
import { Group, Text, Image, Stack, GridCol, Grid } from '@mantine/core';
// import { AuroraBackground } from './AuroraBackground';``

// Define the service data type
type ServiceData = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  title: string;
  description: string;
}

// Extract service data
export const servicesData: ServiceData[] = [
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

// Reusable ServiceCard component
export const ServiceCard: React.FC<ServiceData & { center?: boolean }> = ({ 
  icon: Icon, 
  title, 
  description, 
  center 
}) => (
  <div className={styles.serviceCard} style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: center ? 'center' : 'flex-start' 
  }}>
    <div className={styles.iconWrapper}>
      <Icon size={24} stroke={1.5} />
    </div>
    <Text component="h3" fw={600} mb="xs" ta={center ? 'center' : 'left'}>{title}</Text>
    {description && <Text ta={center ? 'center' : 'left'}>{description}</Text>}
  </div>
);

export function ServicesSection() {
  return (
    // <AuroraBackground>
      <div className={styles.servicesSection}>
        <Grid gutter="xl">
          <GridCol span={{ base: 12, md: 6 }}>
            <Image
              radius="md"
              src="hero-picture-1.png"
              alt="Image 2"
              h="100%"
              w={550}
              fit="cover"
              style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
            />
          </GridCol>
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap="md" justify="center" h="100%">
              <Text fw={700} fz="2rem">
                Mengapa Memilih Scholarsia?
              </Text>
              <Text>
                Kami percaya pada kekuatan pendidikan untuk mengubah hidup. Dengan menghubungkan aspirasi lokal dengan peluang global, kami memberdayakan pelajar Indonesia untuk meraih impian mereka dan berkontribusi pada kemajuan Indonesia di tingkat internasional.
              </Text>
            </Stack>
          </GridCol>
        </Grid>
        <Grid gutter="xl">
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap="md" justify="center" h="100%">
              <Text fw={700} fz="2rem">
                Bergabunglah Dengan Kami
              </Text>
              <Text>
              Bergabung dengan kami dan jadilah bagian dari komunitas pelajar Indonesia yang terhubung dengan dunia pendidikan internasional. Kami menyediakan peluang yang memungkinkanmu mencapai tujuan pendidikan terbaik dengan dukungan penuh dari kami.
              </Text>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, md: 6 }}>
            <Image
              radius="md"
              src="hero-picture-2.png"
              alt="Image 2"
              h="100%"
              w={550}
              fit="cover"
              style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
            />
          </GridCol>
        </Grid>

      </div>
    // </AuroraBackground>
  );
}
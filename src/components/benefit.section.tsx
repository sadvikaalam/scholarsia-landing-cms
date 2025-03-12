"use client"

import React from "react";
import { Text, Container, SimpleGrid, Box, Stack, Grid, Image } from "@mantine/core";
import styles from "./benefit.section.module.css";

export function BenefitSection() {
  const benefits = [
    {
      step: "1",
      title: "Raih pendidikan berkualitas terbaik",
      description: "Kami membantu kamu untuk mendapatkan pendidikan berkualitas tinggi dengan program yang sesuai dengan kebutuhan dan aspirasi karirmu.",
    },
    {
      step: "2",
      title: "Jaringan global yang membuka pintu peluang tak terbatas",
      description: "Bangun jaringan global yang membuka peluang tak terbatas untuk pengembangan karir dan akademik melalui koneksi dengan institusi dan profesional internasional.",
    },
    {
      step: "3",
      title: "Berinteraksi dengan Mahasiswa dan Professional dari seluruh dunia",
      description: "Perluas wawasan dan pengalaman melalui interaksi dengan mahasiswa dan profesional dari berbagai negara dan latar belakang budaya.",
    },
  ];

  return (
    <Box className={styles.servicesSection}>
      <Container size="lg">
        <div className={styles.sectionHeader}>
          {/* <Text tt="capitalize" fw="bold" fz="lg">Dapat apa di Scholarsia?</Text> */}
          <Text style={{ textAlign: 'center' }} component="h2" className={styles.sectionTitle}>
            Tentang Kami
          </Text>
          <Text className={styles.sectionDescription}>
            Kami adalah platform edukasi terdepan yang berkomitmen untuk menghubungkan pelajar Indonesia dengan peluang pendidikan internasional terbaik. Dengan layanan informasi beasiswa global, program pertukaran pelajar, dan kemitraan pendidikan internasional, kami mendukung pelajar Indonesia meraih cita-cita mereka dan menjadi generasi yang siap bersaing di dunia global.
          </Text>
        </div>

        <Grid pos="relative" h={360}>
          <Grid.Col span={4}>
            <div style={{
              position: 'absolute',
              left: '-10%',
              top: '10px',
              width: '30%',
              transform: 'rotate(-3deg)',
              zIndex: 2
            }}>
              <Image
                radius="md"
                src="about-us-1.jpg"
                alt="Image 1"
                h={300}
                w="100%"
                fit="cover"
                style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
              />
            </div>
          </Grid.Col>

          <Grid.Col span={4}>
            <div style={{
              position: 'absolute',
              left: '21%',
              top: '60px',
              width: '30%',
              transform: 'rotate(3deg)',
              zIndex: 1
            }}>
              <Image
                radius="md"
                src="about-us-2.jpg"
                alt="Image 2"
                h={300}
                w="100%"
                fit="cover"
                style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
              />
            </div>
          </Grid.Col>

          <Grid.Col span={4}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0px',
              width: '30%',
              transform: 'rotate(-2deg)',
              zIndex: 3
            }}>
              <Image
                radius="md"
                src="about-us-3.jpg"
                alt="Image 3"
                h={300}
                w="100%"
                fit="cover"
                style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
              />
            </div>
          </Grid.Col>

          <Grid.Col span={4}>
            <div style={{
              position: 'absolute',
              left: '80%',
              top: '40px',
              width: '30%',
              transform: 'rotate(4deg)',
              zIndex: 2
            }}>
              <Image
                radius="md"
                src="about-us-4.jpg"
                alt="Image 4"
                h={300}
                w="100%"
                fit="cover"
                style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
              />
            </div>
          </Grid.Col>
        </Grid>

        {/* <SimpleGrid cols={3} spacing={40}>
          {benefits.map((benefit) => (
            <div key={benefit.step} className={styles.serviceCard}>
              <div className={styles.stepNumber}>
                {benefit.step}
              </div>
              <Text component="h3" fw={600} mb="xs">
                {benefit.title}
              </Text>
              <Text>
                {benefit.description}
              </Text>
            </div>
          ))}
        </SimpleGrid> */}
      </Container>
    </Box>
  );
}
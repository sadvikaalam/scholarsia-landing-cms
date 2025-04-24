import React from "react";
import { Container, Group, Stack, Text, Box, Flex } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandYoutube, href: "#", label: "YouTube" },
];

const footerLinks = {
  solusi: [
    { label: "Program", href: "#" },
    { label: "Pusat Pengembangan", href: "#" },
    { label: "Beasiswa", href: "#" },
    { label: "Tentang Kami", href: "#" },
    { label: "Sitemap", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
  program: [
    { label: "College Camp", href: "#" },
    { label: "Seasonal Camp", href: "#" },
    { label: "Bootcamp", href: "#" },
    { label: "Komunitas", href: "#" },
    { label: "Akomodasi", href: "#" },
  ],
  perusahaan: [
    { label: "Pusat Bantuan", href: "#" },
    { label: "Hubungi Kami", href: "#" },
    { label: "Ketentuan Layanan", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Privasi", href: "#" },
  ],
};

export function Footer() {
  return (
    <Box
      component="footer"
      bg="rgba(251, 200, 0, 0.3)"
      c="black"
      pt={80}
      pb={40}
    >
      <Container size="lg">
        <Flex
          gap={{ base: 50, md: 80 }}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
        >
          {/* Company Info */}
          <Stack gap="lg" style={{ flex: 1 }}>
            {/* <Image
              src="/logo-white.png"
              alt="Scholarsia"
              width={150}
              height={40}
            /> */}
            {/* <MantineLogo size={28}/> */}
            <Image
              src="/scholarsia-logo.svg"
              alt="Scholarsia Logo"
              width={116}
              height={30}
              priority
            />
            <Text size="sm" maw={300}>
              Gedung Artha Graha, Jl. Jend. Sudirman kav 52-53 RT.5/RW.3,
              Senayan, Kebayoran Baru, South Jakarta City, Jakarta 12190
            </Text>
            <Stack gap="xs">
              <Text size="sm">Tel : +6229341037</Text>
              <Text size="sm">Sen - Sab, 08:00 - 20:00</Text>
              <Text size="sm">info@scholarsia.com</Text>
            </Stack>
          </Stack>

          {/* Links Sections */}
          <Group gap={60} align="flex-start" wrap="nowrap" visibleFrom="sm">
            <Stack gap="md">
              <Text fw={600}>Solusi</Text>
              <Stack gap="xs">
                {footerLinks.solusi.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Text size="sm">{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack gap="md">
              <Text fw={600}>Program</Text>
              <Stack gap="xs">
                {footerLinks.program.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Text size="sm">{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack gap="md">
              <Text fw={600}>Perusahaan</Text>
              <Stack gap="xs">
                {footerLinks.perusahaan.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Text size="sm">{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack gap="md">
              <Text fw={600}>Terhubung</Text>
              <Group gap="md">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      border: "1px solid black",
                      borderRadius: "50%",
                      padding: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </Group>
              <Text size="sm">@Scholarsia</Text>
            </Stack>
          </Group>
          <Stack hiddenFrom="sm">
            <Stack gap="md">
              <Text fw={600}>Solusi</Text>
              <Stack gap="xs">
                {footerLinks.solusi.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Text size="sm">{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack gap="md">
              <Text fw={600}>Program</Text>
              <Stack gap="xs">
                {footerLinks.program.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Text size="sm">{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack gap="md">
              <Text fw={600}>Perusahaan</Text>
              <Stack gap="xs">
                {footerLinks.perusahaan.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Text size="sm">{link.label}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack gap="md">
              <Text fw={600}>Terhubung</Text>
              <Group gap="md">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      border: "1px solid black",
                      borderRadius: "50%",
                      padding: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </Group>
              <Text size="sm">@Scholarsia</Text>
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}

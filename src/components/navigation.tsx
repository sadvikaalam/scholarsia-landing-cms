'use client';

import { Container, Group, SegmentedControl, Button } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import classes from './navigation.module.css';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const links = [
  { link: '/', label: '🏠' },
  { link: '/development-center', label: 'Pusat Pengembangan' },
  { link: '/scholarship-service', label: 'Layanan Beasiswa' },
  { link: '/mitra', label: 'Mitra' },
  { link: '/about', label: 'Tentang Kami' },
];

export function Navigation() {
  // const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();
  const pathname = usePathname();

  const segments = links.map((link) => ({
    value: link.link,
    label: link.label,
  }));

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <div style={{ flex: '0 0 auto' }}>
            <Image
              src="/scholarsia-logo.svg"
              alt="Scholarsia Logo"
              width={116}
              height={30}
              priority
            />
          </div>
          <Group
            justify="center"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1
            }}
          >
            <SegmentedControl
              data={segments}
              value={pathname}
              onChange={(value) => {
                router.push(value);
              }}
              radius="xl"
              size="md"
              classNames={{
                root: classes.segmentedControl,
                indicator: classes.segmentedControlIndicator,
                control: classes.segmentedControlControl,
                label: classes.segmentedControlLabel,
              }}
            />
          </Group>
          {/* <Group gap="xs" visibleFrom="sm">
            <Button variant="subtle" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </Group> */}
          {/* <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" /> */}
        </div>
      </Container>
    </header>
  );
}
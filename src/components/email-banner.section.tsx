import { Button, Image, Text, TextInput, Title } from '@mantine/core';
import classes from './email-banner.section.module.css';

export function EmailBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Penasaran dengan program Scholarsia?</Title>
        <Text fz="sm" c="white">
        Program Scholarsia memberikan akses ke beasiswa dan peluang pendidikan dari lebih dari 50 universitas internasional, Gabung Sekarang & Dapatkan Info Beasiswa dan Program Lainnya yang Menginspirasi!
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Masukkan Emailmu!"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control} color='#E63946'>Subscribe</Button>
        </div>
      </div>
      {/* <Image src="/hero-image.svg" className={classes.image} /> */}
    </div>
  );
}
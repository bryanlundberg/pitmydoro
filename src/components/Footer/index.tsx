'use client';

import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import tinycolor from 'tinycolor2';
import useSessionStore from '@/stores/Session.store';
import usePomodoroStore from '@/stores/Pomodoro.store';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const sessionStatus = useSessionStore((state) => state.status);
  const currentScuderia = usePomodoroStore((state) => state.currentScuderia);

  const darkenColor = tinycolor(currentScuderia?.colors?.background?.[sessionStatus])
    .darken(5)
    .toString();

  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      bgColor={{ base: darkenColor, _dark: 'gray.950' }}
      paddingY={12}
      gap={4}
    >
      <VStack>
        <a
          style={{ maxWidth: 200, marginBottom: 20 }}
          href='https://www.buymeacoffee.com/srterra'
          target='_blank'
        >
          <Image
            src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
            alt='Buy Me A Coffee'
          />
        </a>

        <Text fontSize={'sm'} color={'gray.500'}>
          &copy; {new Date().getFullYear()} Pit my doro
        </Text>

        <Text fontSize={'sm'} fontWeight={'bold'} color={'gray.500'}>
          Made with ❤️ by @srteerra
        </Text>
      </VStack>

      <HStack gap={8} marginTop={4} fontSize={'sm'} color={'gray.500'}>
        <Link href={'/about-us'}>About</Link>
        <Link href={'/terms'}>Terms & Conditions</Link>
        <Link href={'/privacy'}>Privacy Policy</Link>
        <Link href={'/legal'}>Legal Notice</Link>
      </HStack>
    </Flex>
  );
};

'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'use-intl';
import Link from 'next/link';

export default function CookieNoticePage() {
  const t = useTranslations('cookies');

  return (
    <Flex flexDirection='column' my={32}>
      <Box>
        <Text fontSize='4xl' fontWeight='bold'>
          {t('title')}
        </Text>
      </Box>

      <VStack alignItems='flex-start' gap={8}>
        <Text fontSize='md' opacity={0.5}>
          {t('lastUpdated')}
        </Text>

        <Text>{t('intro')}</Text>

        <Flex flexDirection='column' gap={2}>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.whatAreCookies.title')}
          </Text>
          <Text>{t('sections.whatAreCookies.description')}</Text>
        </Flex>

        <Flex flexDirection='column' gap={2}>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.types.title')}
          </Text>
          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.types.technical')}</li>
            <li>{t('sections.types.analytics')}</li>
            <li>{t('sections.types.personalization')}</li>
            <li>{t('sections.types.advertising')}</li>
          </Box>
        </Flex>

        <Flex flexDirection='column' gap={2}>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.thirdParties.title')}
          </Text>
          <Text>{t('sections.thirdParties.description')}</Text>
        </Flex>

        <Flex flexDirection='column' gap={2}>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.consent.title')}
          </Text>
          <Text>{t('sections.consent.description')}</Text>
        </Flex>

        <Flex flexDirection='column' gap={2}>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.manage.title')}
          </Text>
          <Text>
            {t.rich('sections.manage.description', {
              settings: (chunks) => <strong>{chunks}</strong>,
            })}
          </Text>
        </Flex>

        <Flex flexDirection='column' gap={2}>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.moreInfo.title')}
          </Text>
          <Text>
            {t.rich('sections.moreInfo.description', {
              privacy: (chunks) => (
                <Link href='/privacy'>
                  <strong>{chunks}</strong>
                </Link>
              ),
            })}
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
}

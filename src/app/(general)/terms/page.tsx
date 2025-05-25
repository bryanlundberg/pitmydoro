'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'use-intl';

export default function TermsPage() {
  const t = useTranslations('terms');

  return (
    <Flex flexDirection='column' my={32}>
      <Box>
        <Text>{t('agreement')}</Text>
      </Box>

      <Box>
        <Text fontSize='4xl' fontWeight='bold'>
          {t('title')}
        </Text>
      </Box>

      <VStack alignItems='flex-start' gap={8}>
        <Text fontSize='md' opacity={0.5} marginBottom={4}>
          {t('lastUpdated')}
        </Text>

        <Text>{t('intro')}</Text>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.definitions.title')}
          </Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>
              {t.rich('sections.definitions.items.app', { strong: (c) => <strong>{c}</strong> })}
            </li>
            <li>
              {t.rich('sections.definitions.items.user', { strong: (c) => <strong>{c}</strong> })}
            </li>
            <li>
              {t.rich('sections.definitions.items.content', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.definitions.items.account', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
          </Box>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.usage.title')}
          </Text>

          <Text>{t('sections.usage.commitments')}</Text>
          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.usage.legalUse')}</li>
            <li>{t('sections.usage.noCopy')}</li>
            <li>{t('sections.usage.noAbuse')}</li>
          </Box>

          <Text>{t('sections.usage.prohibited')}</Text>
          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.usage.fraudulentUse')}</li>
            <li>{t('sections.usage.unauthorizedAccess')}</li>
          </Box>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.accounts.title')}
          </Text>
          <Text>{t('sections.accounts.content')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.thirdParties.title')}
          </Text>
          <Text>{t('sections.thirdParties.content')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.changes.title')}
          </Text>
          <Text>{t('sections.changes.modify')}</Text>
          <Text>{t('sections.changes.notice')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.limitation.title')}
          </Text>
          <Text>{t('sections.limitation.intro')}</Text>
          <Text>{t('sections.limitation.notResponsible')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.limitation.damage')}</li>
            <li>{t('sections.limitation.loss')}</li>
          </Box>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.termination.title')}
          </Text>
          <Text>{t('sections.termination.content')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.contact.title')}
          </Text>
          <Text>{t('sections.contact.info')}</Text>
          <Text>{t('sections.contact.email')}</Text>
        </Flex>
      </VStack>
    </Flex>
  );
}

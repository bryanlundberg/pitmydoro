'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'use-intl';

export default function TermsPage() {
  const t = useTranslations('privacy');

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
          {t('effectiveDate')}
        </Text>

        <Text>
          {t.rich('intro', {
            strong: (c) => <strong>{c}</strong>,
          })}
        </Text>

        <Text>{t('disclaimer')}</Text>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.dataCollection.title')}
          </Text>

          <Text>{t('sections.dataCollection.description')}</Text>

          <Text fontWeight='bold'>{t('sections.dataCollection.personal.title')}</Text>
          <Text>{t('sections.dataCollection.personal.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.dataCollection.personal.email')}</li>
            <li>{t('sections.dataCollection.personal.tokens')}</li>
          </Box>

          <Text>{t('sections.dataCollection.personal.note')}</Text>

          <Text fontWeight='bold'>{t('sections.dataCollection.usage.title')}</Text>
          <Text>{t('sections.dataCollection.usage.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.dataCollection.usage.ip')}</li>
            <li>{t('sections.dataCollection.usage.device')}</li>
            <li>{t('sections.dataCollection.usage.time')}</li>
            <li>{t('sections.dataCollection.usage.pages')}</li>
          </Box>

          <Text>{t('sections.dataCollection.usage.note')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.cookies.title')}
          </Text>

          <Text>{t('sections.cookies.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>
              {t.rich('sections.cookies.session', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.cookies.preference', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.cookies.security', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
          </Box>

          <Text>{t('sections.cookies.warning')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.usagePurpose.title')}
          </Text>

          <Text>{t('sections.usagePurpose.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.usagePurpose.operate')}</li>
            <li>{t('sections.usagePurpose.analyze')}</li>
            <li>{t('sections.usagePurpose.notify')}</li>
            <li>{t('sections.usagePurpose.customize')}</li>
            <li>{t('sections.usagePurpose.prevent')}</li>
          </Box>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.transfer.title')}
          </Text>
          <Text>{t('sections.transfer.description')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.disclosure.title')}
          </Text>
          <Text>{t('sections.disclosure.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.disclosure.legal')}</li>
            <li>{t('sections.disclosure.authority')}</li>
            <li>{t('sections.disclosure.fraud')}</li>
            <li>{t('sections.disclosure.protection')}</li>
          </Box>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.security.title')}
          </Text>
          <Text>{t('sections.security.description')}</Text>
          <Text>{t('sections.security.warning')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.providers.title')}
          </Text>
          <Text>{t('sections.providers.description')}</Text>
          <Text>{t('sections.providers.restriction')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.changes.title')}
          </Text>
          <Text>{t('sections.changes.description')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column'>
          <Text fontSize='lg' fontWeight='bold'>
            {t('sections.contact.title')}
          </Text>
          <Text>{t('sections.contact.description')}</Text>
          <Text>{t('sections.contact.email')}</Text>
        </Flex>
      </VStack>
    </Flex>
  );
}

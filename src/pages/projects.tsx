import React from 'react';

import { NextPage } from 'next';
import { UiCard, UiPage, UiProgress } from 'components';

import {
  ArrowNarrowRightSolid,
  BookOpenOutline,
  ChevronDownSolid,
  ChevronUpSolid,
  ClipboardCheckOutline,
  LightBulbOutline,
  LightningBoltOutline,
} from '@graywolfai/react-heroicons';

import {
  Box,
  Button,
  Flex,
  Heading,
  SlideFade,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

interface IProgress {
  total: number;
  completed: number;
  colorScheme: string;
  icon: JSX.Element;
}

const Projects: NextPage = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const onGoingProgresses: IProgress[] = [
    {
      colorScheme: 'orange',
      icon: <BookOpenOutline width="1.3rem" />,
      completed: 4,
      total: 10,
    },
    {
      colorScheme: 'blue',
      icon: <ClipboardCheckOutline width="1.3rem" />,
      completed: 5,
      total: 10,
    },
    {
      colorScheme: 'green',
      icon: <LightBulbOutline width="1.3rem" />,
      completed: 3,
      total: 10,
    },
  ];

  const getProgressPercentage = (value: number, total: number) =>
    Math.round((value / total) * 100);

  return (
    <UiPage>
      <Flex flexWrap="wrap" gridGap="3.5rem">
        <SlideFade in offsetY="40px">
          <UiCard>
            <Box padding="1.8rem" paddingBottom="1.5rem">
              <Tag
                bg="purple.50"
                color="purple.600"
                borderRadius="base"
                marginBottom="1rem"
                paddingY="0.2rem"
                paddingX="0.8rem"
              >
                HTML
              </Tag>
              <Heading
                as="h3"
                fontSize="xl"
                marginBottom="1rem"
                color="gray.700"
              >
                Introduction to HTML
              </Heading>
              <Text lineHeight="1.6rem" color="gray.600">
                HyperText Markup Language is used to describe the structure of a
                web page. This section introduces how to use HTML elements to
                give structure and meaning to your web content.
              </Text>
            </Box>
            <Box
              padding="1.8rem"
              paddingTop="1.8rem"
              borderTop="sm"
              borderColor="gray.200"
            >
              <Flex
                justifyContent="space-between"
                marginBottom={isOpen && '1.25rem'}
              >
                <Tag
                  height="1.8rem"
                  borderRadius="base"
                  colorScheme="gray"
                  color="gray.600"
                >
                  <TagLeftIcon color="yellow.600" fontSize="1.1rem">
                    <LightningBoltOutline />
                  </TagLeftIcon>
                  <TagLabel>ONGOING</TagLabel>
                </Tag>
                <Button
                  colorScheme="teal"
                  borderRadius="base"
                  paddingX="0.6rem"
                  height="1.8rem"
                  variant="ghost"
                  onClick={() => onToggle()}
                  leftIcon={
                    isOpen ? (
                      <ChevronUpSolid width="1.8rem" />
                    ) : (
                      <ChevronDownSolid width="1.8rem" />
                    )
                  }
                >
                  {isOpen ? 'close info' : 'show info'}
                </Button>
              </Flex>
              <SlideFade in={isOpen}>
                {isOpen && (
                  <>
                    {onGoingProgresses.map(
                      ({ icon, colorScheme, completed, total }, index) => (
                        <Flex
                          alignItems="center"
                          key={index}
                          _notLast={{ marginBottom: '1.2rem' }}
                        >
                          <UiProgress
                            leftIcon={icon}
                            colorScheme={colorScheme}
                            iconColor={`${colorScheme}.600`}
                            value={getProgressPercentage(completed, total)}
                          />
                          <Text
                            fontSize="xs"
                            marginX="1rem"
                            color="gray.600"
                            whiteSpace="nowrap"
                          >
                            {completed} of {total}
                          </Text>
                          <Box
                            color="gray.500"
                            cursor="pointer"
                            padding="0.2rem"
                            borderRadius="base"
                            transition="0.3s"
                            _hover={{ bg: 'gray.100' }}
                          >
                            <ArrowNarrowRightSolid width="1.2rem" />
                          </Box>
                        </Flex>
                      )
                    )}
                  </>
                )}
              </SlideFade>
            </Box>
          </UiCard>
        </SlideFade>
      </Flex>
    </UiPage>
  );
};
export default Projects;

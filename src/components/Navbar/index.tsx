'use client';

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

import Image from 'next/image';
import useScroll from '@/lib/hooks/useScroll';

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const scrolled = useScroll(60);

    return (
        <Box className={`fixed top-0 w-full transition-all duration-300 ${scrolled ? 'drop-shadow-nav border-none' : 'drop-shadow-none'}`}>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={scrolled ? 'solid' : 'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justifyContent={'space-around'}
                >
                <Flex
                flex={{ base: 1, md: 'auto' }}
                
                display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                        isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex  justify={{ base: 'center', md: 'start' }}>
                    <Image
                        src="/assets/reservin.svg"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                    />

                    <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}
                        _hover={{
                        bg: 'gray.100',
                        color: 'gray.900',
                        }}
                        p={3}
                        >
                        Sign In
                    </Button>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'black'}
                        border={'1px solid transparent'}
                        href={'#'}
                        _hover={{
                        bg: 'white',
                        color: 'black',
                        border: '1px solid black',
                        }}>
                        Sign Up
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                <Link
                    p={3}
                    href={navItem.href ?? '#'}
                    fontSize={'sm'}
                    fontWeight={500}
                    color={linkColor}
                    rounded={'md'}
                    _hover={{
                    textDecoration: 'none',
                    bg: 'gray.100',
                    color: linkHoverColor,
                    }}
                    >
                    {navItem.label}
                </Link>
                </PopoverTrigger>

                {navItem.children && (
                <PopoverContent
                    border={0}
                    boxShadow={'xl'}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={'xl'}
                    minW={'sm'}>
                    <Stack>
                    {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                    ))}
                    </Stack>
                </PopoverContent>
                )}
            </Popover>
            </Box>
        ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'gray.600' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                transition={'all .3s ease'}
                transform={'translateX(-10px)'}
                opacity={0}
                _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                justify={'flex-end'}
                align={'center'}
                flex={1}>
                    <Icon color={'gray.600'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {

    return (
        <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
        ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
        <Flex
            py={2}
            as={Link}
            href={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
            textDecoration: 'none',
            }}>
            <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
            </Text>
            {children && (
            <Icon
                as={ChevronDownIcon}
                transition={'all .25s ease-in-out'}
                transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
            />
            )}
        </Flex>

        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
                children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                    {child.label}
                </Link>
                ))}
            </Stack>
        </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    }

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'About us',
    },
    {
        label: 'Make a reservation',
    },
];
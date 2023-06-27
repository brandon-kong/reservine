'use client';

import NewContainer from "@/components/Container"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useRouter } from "next/navigation";

import HeroImg from "@/../public/images/hero-cover.jpeg";

import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineEdit } from "react-icons/ai";
import { BiBed, BiBath, BiCar, BiHandicap } from "react-icons/bi";
import { PiPawPrintBold, PiTelevisionSimple, PiFan, PiWifiHighLight, PiFireExtinguisherBold } from "react-icons/pi";
import { LuUtensilsCrossed } from "react-icons/lu";
import { TbWashMachine } from "react-icons/tb";
import { MdOutlineBalcony, MdSmokeFree, MdOutlineCleaningServices } from "react-icons/md";


import { StarIcon } from "@chakra-ui/icons";

const Overview = {
    bedroom: {number: 3, icon: BiBed},
    bathroom: {number: 2, icon: BiBath},
    parking: {number: 1, icon: BiCar},
    pet: {number: 0, icon: PiPawPrintBold}
}



import {
    Text,
    Box,
    Grid,
    GridItem,
    Image,
    Divider,
    Heading,
    Flex,
    Icon,
} from "@chakra-ui/react";
import PrimaryButton, { OutlineButton } from "@/components/Button";
import Map from "@/components/Map";
import ServiceCard from "@/components/ServiceCard";
import ReviewBar from "@/components/ReviewBar";
import ReviewCard from "@/components/ReviewCard";
import ReserveCard from "@/components/ReserveCard";
import StickyBox from "react-sticky-box";

import Link from "next/link";

type Params = {
    params: {
        id: string
    }
}



function BetterGridItem ({ children, ...props }: any) {
    return (
        <GridItem
        bg='var(--color-secondary)'
        display={'inline-block'}
        rounded='lg'
        {...props}
        overflow={'hidden'}
        cursor={'pointer'}
        >
            <Image
            src={HeroImg.src}
            alt='Hero Image'
            objectFit='cover'
            w='full'
            h='full'
            transition='all .2s ease-in-out'
            rounded={'lg'}

            _hover={{
                filter: 'brightness(.8)',
            }}
            >

            </Image>
            {children}
        </GridItem>
    )
}

function AmenitiesSlot ({ children, ...props }: any) {
    return (
        <Flex
        gap={'4'}
        align={'center'}
        w='full'
        >
            <Icon as={props.icon} fontSize='2xl' />
            <Text
            fontWeight={'500'}
            >
                { props.name }
            </Text>
        </Flex>
    )
}

export default function PropertyDashboard ({ params }: Params) {
    const router = useRouter();

    return (
        <>
            <Navbar />
            <NewContainer
            display='flex'
            flexDir='column'
            gap={'14'}
            pb={'32'}
            >
               

               <Grid templateColumns='2fr 1fr 1fr'  gap={4}
               h='23.75rem'
               >
                    <BetterGridItem 
                    rowSpan={2}
                    />
                    <BetterGridItem />
                    <BetterGridItem />
                    <BetterGridItem />
                    <BetterGridItem />
                </Grid>
                <Flex
                gap={'16'}

                >

                <Flex
                direction={'column'}
                flex='5'
                gap={'10'}
                >

                
                    <Flex
                    w='full'
                    justify={'space-between'}
                    >
                        <Flex
                        gap='1'
                        direction={'column'}
                        >
                            <Heading
                            fontSize='2xl'
                            >
                                Well Furnished Apartment
                            </Heading>
                            <Text
                            color={'var(--text-secondary)'}
                            >
                                100 Smart Street, Chicago, IL 60601
                            </Text>
                            <Text
                            color={'var(--text-secondary)'}
                            fontSize={'sm'}
                            >
                                Posted by <Text as={Link} href={'/account'}
                                _hover={{
                                    textDecoration: 'underline',
                                }}
                                color={'var(--color-primary)'}>John Doe</Text>
                            </Text>
                        </Flex>
                        <Flex
                        gap='4'
                        >
                            <Icon as={AiOutlineHeart} fontSize='4xl' />
                            <Icon as={AiOutlineShareAlt} fontSize='4xl' />
                            <Icon as={AiOutlineEdit} fontSize='4xl' />
                        </Flex>
                        </Flex>
                        <Flex
                        gap={'4'}
                        >
                            {
                                Object.keys(Overview).map((key: string, index) => {
                                    return (
                                        <Flex
                                            key={index}
                                            direction={'column'}
                                            gap='2'
                                            align={'center'}
                                            justify={'center'}
                                            bg={'var(--gray)'}
                                            flex={'1'}
                                            aspectRatio={1}
                                            rounded={'lg'}

                                            >
                                                <Icon as={Overview[key].icon} fontSize='5xl' />
                                                <Text
                                                fontWeight={'600'}
                                                >
                                                    {Overview[key].number} { Overview[key].number !== 1 ? key + 's' : key}
                                                </Text>
                                            </Flex>
                                    )
                                })
                            }
                            
                        </Flex>
                        <Flex
                        w='full'
                        gap={'20'}
                        direction={'column'}
                        >

                        
                        <Flex
                        gap={'3'}
                        direction={'column'}
                        >
                            <Heading
                            fontSize='xl'
                            >
                                Hotel Description
                            </Heading>
                            <Text
                            color={'var(--text-secondary)'}
                            >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </Flex>
                        <Flex
                        gap={'6'}
                        direction={'column'}
                        >
                            <Heading
                            fontSize='xl'
                            >
                                Offered Amenities
                            </Heading>
                            <Flex
                            direction={'column'}
                            gap={'8'}
                            >
                            <Grid
                            templateColumns={'repeat(2, 1fr)'}
                            gap={4}
                            >
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'Kitchen'}
                                    icon={LuUtensilsCrossed}
                                    />
                                </GridItem>
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'TV with Netflix'}
                                    icon={PiTelevisionSimple}
                                    />
                                </GridItem>
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'Air Conditioning'}
                                    icon={PiFan}
                                    />
                                </GridItem>
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'Free Wifi'}
                                    icon={PiWifiHighLight}
                                    />
                                </GridItem>
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'Washer & Dryer'}
                                    icon={TbWashMachine}
                                    />
                                </GridItem>
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'Balcony/Patio'}
                                    icon={MdOutlineBalcony}
                                    />
                                </GridItem>
                            </Grid>
                                <OutlineButton
                                w={'15.125rem'}
                                >
                                    View all 10 Amenities
                                </OutlineButton>
                            </Flex>
                           
                                

                         </Flex>
                         <Flex
                        gap={'6'}
                        direction={'column'}
                        >
                            <Heading
                            fontSize='xl'
                            >
                                Safety and Hygiene
                            </Heading>
                            <Grid
                            templateColumns={'repeat(2, 1fr)'}
                            gap={4}
                            >
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'Handicap Accessible'}
                                    icon={BiHandicap}
                                    />
                                </GridItem>
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'Daily Cleaning'}
                                    icon={MdOutlineCleaningServices}
                                    />
                                </GridItem>
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'Fire Extinguisher'}
                                    icon={PiFireExtinguisherBold}
                                    />
                                </GridItem>
                                <GridItem>
                                    <AmenitiesSlot
                                    name={'Smoke Detector'}
                                    icon={MdSmokeFree}
                                    />
                                </GridItem>
                            </Grid>
                           
                                

                         </Flex>
                         <Box>
                            <Map 
                            aspectRatio={16/9}
                            rounded={'lg'}
                            overflow={'hidden'}
                            />
                         </Box>
                         
                        <Flex
                        gap={'6'}
                        direction={'column'}
                        >
                            <Heading
                            fontSize='xl'
                            >
                                Nearby Services
                            </Heading>
                            <Flex
                            gap={'2'}
                            >
                                <ServiceCard
                                title={'Grill Restro & Bar'}
                                description={'100 meters away'}
                                rating={4}
                                />
                                    <ServiceCard
                                title={'Grill Restro & Bar'}
                                description={'100 meters away'}
                                rating={3}
                                />
                                    <ServiceCard
                                title={'Grill Restro & Bar'}
                                description={'100 meters away'}
                                rating={4}
                                />
                            </Flex>
                            <PrimaryButton
                            w={'11.8125rem'}
                            >
                                Show on Map
                            </PrimaryButton>
                        </Flex>
                        <Flex
                            gap={'6'}
                            direction={'column'}
                            >
                                <Heading
                                fontSize='xl'
                                >
                                    <Flex
                                    gap={'4'}
                                    >
                                        <Text>
                                            Reviews
                                        </Text>
                                        <Flex
                                        gap={'4'}
                                        >
                                            <Icon as={StarIcon} color={'var(--color-primary)'} />
                                            <Text>5.0</Text>
                                        </Flex>
                                    </Flex>
                                </Heading>
                                <Flex
                                direction={'column'}
                                gap={'14'}
                                >
                                    <Grid
                                    templateColumns={'repeat(2, 1fr)'}
                                    gap={4}
                                    columnGap={10}
                                    >
                                        <GridItem>
                                            <ReviewBar
                                            title={'Amenities'}
                                            value={40}
                                            rating={'3.0'}
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <ReviewBar
                                            title={'Cleanliness'}
                                            value={100}
                                            rating={'5.0'}
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <ReviewBar
                                            title={'Communication'}
                                            value={100}
                                            rating={'5.0'}
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <ReviewBar
                                            title={'Value for Money'}
                                            value={100}
                                            rating={'5.0'}
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <ReviewBar
                                            title={'Location'}
                                            value={100}
                                            rating={'5.0'}
                                            />
                                        </GridItem>
                                    </Grid>
                                    <Flex
                                    direction={'column'}
                                    gap={'8'}
                                    >

                                    <Grid
                                    templateColumns={'repeat(2, 1fr)'}
                                    gap={10}
                                    rowGap={14}
                                    >
                                        <GridItem>
                                        <ReviewCard
                                            name={'John Doe'}
                                            date={'Mar 12, 2022'}
                                            review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                            rating={4}
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <ReviewCard
                                            name={'John Doe'}
                                            date={'Mar 12, 2022'}
                                            review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                            rating={1}
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <ReviewCard
                                            name={'John Doe'}
                                            date={'Mar 12, 2022'}
                                            review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                            rating={3}
                                            />
                                        </GridItem>
                                        <GridItem>
                                        <ReviewCard
                                            name={'John Doe'}
                                            date={'Mar 12, 2022'}
                                            review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                            rating={2}
                                            />
                                        </GridItem>
                                        
                                    </Grid>

                                        <OutlineButton
                                        w={'15.125rem'}
                                        >
                                            View all 10 Reviews
                                        </OutlineButton>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    

                        <Box
                        flex={'2'}
                        
                        >
                            <StickyBox
                            offsetTop={40}
                            >
                                <ReserveCard />
                            </StickyBox>
                            
                            
                        </Box>
                    
                </Flex>
                
            </NewContainer>
            <Footer />
        </>
    )
}
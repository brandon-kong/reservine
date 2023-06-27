import {
    Box,
    Badge,
    Image,
    Skeleton,
    SkeletonText
} from "@chakra-ui/react";

import { StarIcon } from '@chakra-ui/icons'

export default function ResultQueryCard() {

    const isLoaded = false

    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Box 
      cursor={'pointer'}
      w='full'
      transition='all .2s ease-in-out'
      borderWidth='1px' borderColor={'gray.300'} bg='white' color='black' borderRadius='lg' overflow='hidden'
      _hover={{ boxShadow: 'lg', transform: 'scale(1.025)' }}
      >
        <Image 
        src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='center'>
            <Badge borderRadius='full' px='2' colorScheme='black'>
              New
            </Badge>
            <SkeletonText
            ml='2'
            noOfLines={1}
            spacing='4'
            isLoaded={isLoaded}
            >
                <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
            </SkeletonText>
            
          </Box>
  
            <SkeletonText
            mt='2'
            noOfLines={1}
            spacing='4'
            isLoaded={isLoaded}
            >
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
            >
                {property.title}
            </Box>
            </SkeletonText>
  
        <SkeletonText
        noOfLines={1}
        spacing='4'
        mt='3'
        w='50%'
        isLoaded={isLoaded}
        >
             <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>
        </SkeletonText>
         
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'var(--color-primary)' : 'gray.300'}
                />
              ))}
              <SkeletonText
              ml='2'
              noOfLines={1}
              isLoaded={isLoaded}
              >
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {property.reviewCount} reviews
                </Box>
              </SkeletonText>
            
          </Box>
        </Box>
      </Box>
    )
  }
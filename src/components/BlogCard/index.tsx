import {
    Box,
    Badge,
    Image,
    Skeleton,
    SkeletonText
} from "@chakra-ui/react";

import { StarIcon } from '@chakra-ui/icons'
import BlogPhoto from '@/../public/images/blog-photo.jpeg'

export default function BlogCard( props: any ) {

    const isLoaded = false

    const property = {
      imageUrl: props.img || BlogPhoto.src,
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
      maxW='sm'
      cursor={'pointer'}
      transition='all .2s ease-in-out'
      borderWidth='0' borderColor={'gray.300'} bg='white' color='black' borderRadius='lg' overflow='hidden'
      _hover={{ transform: 'scale(1.05)' }}
      >
        <Image 
        src={property.imageUrl} alt={property.imageAlt} 
        h='300px'
        aspectRatio={1/1}
        objectFit='cover'
        rounded='inherit'
        />
  
        <Box>
          <Box pt='7' display='flex' alignItems='center' w='full'>
            <SkeletonText
            noOfLines={1}
            isLoaded={true}
            >
                <Box
              color='var(--text-primary)'
              fontWeight='700'
              fontSize='1.125rem'
            >
              { props.title || 'Title'}
            </Box>
            </SkeletonText>
            
          </Box>
  
            <SkeletonText
            noOfLines={1}
            w='full'
            spacing='4'
            isLoaded={true}
            >
            <Box
                mt='1'
                w='full'
                fontWeight='600'
                color='var(--text-secondary)'
            >
                { props.genre || 'Genre'}
            </Box>
            </SkeletonText>
         
  
          
        </Box>
      </Box>
    )
  }
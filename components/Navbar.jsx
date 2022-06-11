import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer,Image } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import {GiPerspectiveDiceSixFacesRandom} from 'react-icons/gi'
import Logo from '../assets/images/logo_1.png'

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        
        {/* <Box fontSize='3xl' color='navy' fontWeight='bold'>
            <Link href='/' paddingLeft='2'>
                
                DOI
                
            </Link>
        
        </Box> */}

        <Box fontSize='3xl' color='navy' fontWeight='bold'>
        <Image 
        boxSize='100px'
        src='https://firebasestorage.googleapis.com/v0/b/doi-real-estate.appspot.com/o/logo_2.0.png?alt=media&token=97b84044-ee4c-4c81-b3c4-614016809bb7' 
        alt='Logo' />
        </Box>

        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>

                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>

                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<GiPerspectiveDiceSixFacesRandom />}>Lottery</MenuItem>
                    </Link>

                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;
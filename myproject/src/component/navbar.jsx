import React from 'react'
import {
  Box,
  Flex,
  // Text,
  // IconButton,
  Button,
  Stack,
 Image,
  useColorModeValue,
 
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export default function Navbar() {
 

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to="/">
            <Image src={"imge"} alt="" />
          </Link>

          <Stack
            flex={{ base: 1 }}
            // justify={"flex-start"}
            justify={{ base: "center", md: "start" }}
            direction={"row"}
            spacing={6}
          >
            <Box as={"a"} fontSize={"sm"} fontWeight={400} href={"/on-the-menu"}>
              ON-THE-MENU
            </Box>
            <Box as={"a"} fontSize={"sm"} fontWeight={400} href={"/pricing"}>
              PRICING
            </Box>
            <Box as={"a"} fontSize={"sm"} fontWeight={400} href={"/wine"}>
              WINE
            </Box>
            <Box as={"a"} fontSize={"sm"} fontWeight={400} href={"/gifts"}>
              GIFTS
            </Box>
            <Box as={"a"} fontSize={"sm"} fontWeight={400} href={"/market"}>
              MARKET
            </Box>
          </Stack>
        </Flex>

        <Stack
          // flex={{ base: 1}}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Box
            as={"a"}
            direction={"row"}
            fontSize={"sm"}
            fontWeight={400}
            // variant={"link"}
            href={"/login"}
            // textDecoration={"none"}
          >
            Log In
          </Box>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}


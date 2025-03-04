import { Box, Text, Flex, Link, IconButton, Stack, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.900" color="gray.300" py={6} mt={10} boxShadow="0 -2px 10px rgba(0, 0, 0, 0.2)">
      <Flex direction="column" align="center">
        {/* Navigation Links */}
        <Stack direction={["column", "row"]} spacing={6} mb={4}>
          <Link href="#" _hover={{ color: "white", textDecoration: "underline" }}>
            Home
          </Link>
          <Link href="#" _hover={{ color: "white", textDecoration: "underline" }}>
            About Us
          </Link>
          <Link href="#" _hover={{ color: "white", textDecoration: "underline" }}>
            Contact
          </Link>
          <Link href="#" _hover={{ color: "white", textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          <Link href="#" _hover={{ color: "white", textDecoration: "underline" }}>
            Terms of Service
          </Link>
        </Stack>

        <Divider w="80%" borderColor="gray.600" />

        {/* Social Media Icons */}
        <Flex mt={4} gap={4}>
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook />}
            colorScheme="facebook"
            variant="ghost"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
            colorScheme="twitter"
            variant="ghost"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="pink"
            variant="ghost"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="YouTube"
            icon={<FaYoutube />}
            colorScheme="red"
            variant="ghost"
          />
        </Flex>

        <Text fontSize="sm" mt={4} color="gray.400">
          © {new Date().getFullYear()} Game Folio ^_~. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;

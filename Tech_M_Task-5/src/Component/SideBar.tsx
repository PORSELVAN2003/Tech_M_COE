import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function SideContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Change color dynamically based on mode
  const iconColor = useColorModeValue("black", "white");
  const menuBg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        color={iconColor} // Changes with theme
        bg="transparent" // No background
        _hover={{ bg: "transparent" }} // No hover effect
        onClick={onOpen}
        size="lg"
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent bg={menuBg} color={textColor}>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={6}>
              <Text fontWeight="bold" fontSize="2xl">
                Xanthos_19
              </Text>
              <Text fontSize="xl">Wishlist</Text>
              <Text fontSize="xl">My Library</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideContent;

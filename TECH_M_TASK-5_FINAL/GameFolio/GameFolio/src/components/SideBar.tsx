import {
    useDisclosure,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    HStack,
    Text,
    Box,
  } from "@chakra-ui/react";
  import { FaHome, FaGamepad, FaUser, FaBars } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";
  import React from "react";
  
  function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();
  
    const menuItems = [
      { icon: FaHome, label: "Home", path: "/" },
      { icon: FaGamepad, label: "Games", path: "/games" },
      { icon: FaUser, label: "Profile", path: "/profile" },
    ];
  
    return (
      <>
        <IconButton
          ref={btnRef}
          icon={<FaBars />}
          colorScheme="teal"
          onClick={onOpen}
          aria-label="Open Menu"
          size="lg"
          variant="ghost"
          _hover={{ bg: "teal.100" }}
        />
  
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} initialFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent bg="gray.900" color="white">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px" borderColor="gray.700" fontSize="lg">
              Navigation Menu
            </DrawerHeader>
  
            <DrawerBody>
              <VStack align="start" spacing={4} mt={4}>
                {menuItems.map((item, index) => (
                  <HStack
                    key={index}
                    onClick={() => {
                      navigate(item.path);
                      onClose();
                    }}
                    cursor="pointer"
                    spacing={4}
                    px={3}
                    py={2}
                    w="full"
                    borderRadius="md"
                    _hover={{ bg: "gray.700", transform: "scale(1.05)" }}
                    transition="0.2s"
                  >
                    <Box as={item.icon} size="20px" />
                    <Text fontSize="md" fontWeight="medium">
                      {item.label}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  export default SideBar;
  
import React, { useState, useEffect } from "react";
import { HStack, Image, Text, Spacer, useColorModeValue } from "@chakra-ui/react";
import GSTORE_LOGO from "../assets/logo.png";
import SwitchMode from "./SwitchMode";
import Sidebar from "./SideBar";

function NavBar() {
  const colors = ["cyan", "yellow", "lime", "orange", "teal", "magenta"];
  const fonts = ["cursive", "monospace", "sans-serif", "serif", "fantasy"];

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentFont, setCurrentFont] = useState(fonts[0]);

  // Use `useColorModeValue` for automatic theme switching
  const backgroundColor = useColorModeValue("red.900", "gray.700"); // Dark Mode Friendly

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => colors[(colors.indexOf(prev) + 1) % colors.length]);
      setCurrentFont((prev) => fonts[(fonts.indexOf(prev) + 1) % fonts.length]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HStack backgroundColor={backgroundColor} px={6} py={2} width="100%" transition="background 0.3s ease-in-out">
      <HStack spacing={4}>
        <Image src={GSTORE_LOGO} boxSize="60px" alt="logo" />
        <Text fontSize="xl" fontWeight="bold" color={currentColor} fontFamily={currentFont}>
          RE PUBLIC OF GAMERS
        </Text>
      </HStack>
      <Spacer />
      <SwitchMode />
      <Sidebar />
    </HStack>
  );
}

export default NavBar;

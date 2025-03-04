import { HStack, Switch, useColorMode, Text, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function SwitchMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={3} px={4} cursor="pointer" onClick={toggleColorMode}>
      <Icon as={colorMode === "dark" ? FaMoon : FaSun} color="purple.400" boxSize={5} />
      <Text fontSize="md" fontWeight="medium">
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
      <Switch
        colorScheme="purple"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="md"
      />
    </HStack>
  );
}

export default SwitchMode;

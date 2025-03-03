

import { HStack, Switch, useColorMode } from "@chakra-ui/react";
function DarkSwitch() {
    let {colorMode,toggleColorMode}=useColorMode();
  return (
    <HStack>
      <Switch colorScheme="teal" isChecked={colorMode==='dark'} onChange={toggleColorMode}> DarkSwitch</Switch>
    </HStack>
  );
}
export default DarkSwitch;
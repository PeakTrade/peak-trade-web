"use client";
import {
  FormControl,
  FormLabel,
  HStack,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import { useId } from "react";

const DarkModeSwitch = () => {
  const { colorMode, setColorMode } = useColorMode();
  const id = useId();
  return (
    <FormControl display="flex" alignItems="center">
      <HStack>
        <FormLabel
          as={colorMode === "light" ? "span" : undefined}
          opacity={colorMode !== "light" ? 0.5 : undefined}
          htmlFor={id}
          mb="0"
          mr={0}
        >
          <Sun />
        </FormLabel>
        <Switch
          colorScheme="brand"
          id={id}
          isChecked={colorMode === "dark"}
          onChange={(e) => setColorMode(e.target.checked ? "dark" : "light")}
        />
        <FormLabel
          as={colorMode === "dark" ? "span" : undefined}
          opacity={colorMode !== "dark" ? 0.5 : undefined}
          htmlFor={id}
          mb="0"
        >
          <Moon />
        </FormLabel>
      </HStack>
    </FormControl>
  );
};

export default DarkModeSwitch;

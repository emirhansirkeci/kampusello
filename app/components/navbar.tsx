"use client";
import Link from "next/link";
import * as Avatar from "@radix-ui/react-avatar";
import { Box, Container, Flex } from "@radix-ui/themes";

export const Navbar = () => {
  return (
      <Container size="1" position="fixed" top="0">
        <Box py="9">
          <Flex gap="3" justify="between" align="center">
            <Avatar.Root className="AvatarRoot w-[65px] ml-[150px]">
              <Avatar.Image 
                className="AvatarImage"
                src="https://avatars.githubusercontent.com/u/34745911?s=200&v=4"
                alt="kampüs logo"
              />
              <Avatar.Fallback
                className="AvatarFallback"
                delayMs={600}
              ></Avatar.Fallback>
            </Avatar.Root>

            <Flex>
              <Link style={{ marginRight: 15 }} href={""}>
                Kampüs Nedir?
              </Link>
              <Link style={{ marginRight: 15 }} href={""}>
                Contributors
              </Link>
              <Link style={{ marginRight: 150 }} href={""}>
                Documention
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
  );
};

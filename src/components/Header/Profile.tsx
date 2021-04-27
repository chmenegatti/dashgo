import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Cesar Menegatti</Text>
          <Text color="gray.300" fontSize="small">
            cesinha51@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Cesar Menegatti"
        src="https://avatars.githubusercontent.com/u/38325696?v=4"
      />
    </Flex>
  );
}

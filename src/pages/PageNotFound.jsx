import { Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

const PageNotFound = () => {
  return (
    <MotionBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-r, gray.800, gray.900)"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Text fontSize="6xl" fontWeight="bold" color="white">
        404
      </Text>
      <Text fontSize="2xl" color="gray.300" mt={2}>
        Page Not Found
      </Text>
      <Button
        as={Link}
        to="/"
        mt={6}
        px={6}
        py={3}
        bg="blue.500"
        color="white"
        _hover={{ bg: "blue.600" }}
        _active={{ bg: "blue.700" }}
      >
        Go Home
      </Button>
    </MotionBox>
  );
};

export default PageNotFound;

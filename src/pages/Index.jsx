import { useState } from "react";
import { Box, Container, VStack, Text, HStack, Button, IconButton, Image, Flex, Heading, Link } from "@chakra-ui/react";
import { FaHome, FaVideo, FaQuestionCircle, FaComments } from "react-icons/fa";

const Navbar = ({ setActivePage }) => {
  return (
    <HStack spacing={8} padding={4} bg="gray.800" color="white" width="100%" justifyContent="center">
      <IconButton aria-label="Home" icon={<FaHome />} onClick={() => setActivePage("home")} />
      <IconButton aria-label="Video" icon={<FaVideo />} onClick={() => setActivePage("video")} />
      <IconButton aria-label="Quiz" icon={<FaQuestionCircle />} onClick={() => setActivePage("quiz")} />
      <IconButton aria-label="Chat" icon={<FaComments />} onClick={() => setActivePage("chat")} />
    </HStack>
  );
};

const Home = () => (
  <VStack spacing={4} textAlign="center">
    <Heading>Islamische Radikalisierung</Heading>
    <Text>Erfahren Sie mehr über die Ursachen und Auswirkungen der islamischen Radikalisierung.</Text>
    <Image src="https://images.unsplash.com/photo-1692704209606-62b2597a4fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwY3VsdHVyZXxlbnwwfHx8fDE3MTcxNjA0MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Islamic Culture" />
  </VStack>
);

const Video = () => (
  <VStack spacing={4} textAlign="center">
    <Heading>Video</Heading>
    <Text>Sehen Sie sich ein informatives Video über islamische Radikalisierung an.</Text>
    <Box as="iframe" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowFullScreen />
  </VStack>
);

const Quiz = () => (
  <VStack spacing={4} textAlign="center">
    <Heading>Quiz</Heading>
    <Text>Testen Sie Ihr Wissen über islamische Radikalisierung.</Text>
    <Button colorScheme="teal">Start Quiz</Button>
  </VStack>
);

const Chat = () => (
  <VStack spacing={4} textAlign="center">
    <Heading>Chat</Heading>
    <Text>Chatten Sie mit einem Experten über islamische Radikalisierung.</Text>
    <Button colorScheme="teal">Start Chat</Button>
  </VStack>
);

const Index = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "video":
        return <Video />;
      case "quiz":
        return <Quiz />;
      case "chat":
        return <Chat />;
      default:
        return <Home />;
    }
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Navbar setActivePage={setActivePage} />
      <Flex direction="column" align="center" justify="center" height="calc(100vh - 64px)">
        {renderPage()}
      </Flex>
    </Container>
  );
};

export default Index;

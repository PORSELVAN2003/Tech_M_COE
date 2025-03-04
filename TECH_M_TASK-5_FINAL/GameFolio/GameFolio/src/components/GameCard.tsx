import {
    Card,
    CardBody,
    CardFooter,
    GridItem,
    SimpleGrid,
    Button,
    ButtonGroup,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
    Flex,
    Box,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  
  const GameCard = () => {
    interface Game {
      id: number;
      name: string;
      background_image: string;
      released: string;
      rating: number;
      platforms: { platform: { name: string } }[];
      genres: { name: string }[];
    }
  
    const [response, setResponse] = useState<Game[]>([]);
    const [page, setPage] = useState(1);
    const [cardColors, setCardColors] = useState<string[]>([]);
    const navigate = useNavigate();
  
    const colors = ["lightblue", "lightcoral", "lightgreen", "lightgoldenrodyellow", "lightpink", "lightgray"];
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get<{ results: Game[] }>(
            `https://api.rawg.io/api/games?key=0f3cb634cb324a6d9851723bd77c4132&page=${page}`
          );
          setResponse(result.data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [page]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCardColors(response.map(() => colors[Math.floor(Math.random() * colors.length)]));
      }, 10000);
  
      return () => clearInterval(interval);
    }, [response]);
  
    return (
      <Box minH="100vh" display="flex" flexDirection="column">
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} px={5} py={5} flex="1">
          {response.map((game, index) => (
            <GridItem key={game.id} w="100%">
              <Card
                w="100%"
                h="500px" // Increased Card Size
                bg={cardColors[index] || "white"}
                boxShadow="4px 4px 12px rgba(0, 0, 0, 0.2)"
                display="flex"
                flexDirection="column"
                transition="transform 0.2s, box-shadow 0.3s"
                _hover={{ transform: "scale(1.08)", boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.3)", cursor: "pointer" }}
                onClick={() => navigate(`/game/${game.id}`)}
                borderRadius="lg"
                overflow="hidden"
              >
                <CardBody flex="1" p={5}>
                  <Image
                    src={game.background_image}
                    alt={game.name}
                    borderRadius="lg"
                    h="200px" // Increased Image Height
                    w="100%"
                    objectFit="cover"
                  />
                  <Stack mt={4} spacing={3}>
                    <Heading size="lg" noOfLines={1}>
                      {game.name}
                    </Heading>
                    <Text fontSize="md" color="gray.600">
                      Released: {game.released}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" color="yellow.500">
                      Rating: {game.rating}⭐
                    </Text>
                    <Text fontSize="md" noOfLines={1}>
                      <strong>Genres:</strong> {game.genres.map((g) => g.name).join(", ")}
                    </Text>
                    <Text fontSize="md" noOfLines={1}>
                      <strong>Platforms:</strong> {game.platforms.map((p) => p.platform.name).join(", ")}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing={3} w="100%">
                    <Button variant="solid" colorScheme="red" flex="1">
                      Get Now
                    </Button>
                    <Button variant="outline" colorScheme="yellow" flex="1">
                      Add to Cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
  
        <Flex justifyContent="center" mt={6} mb={4}>
          <ButtonGroup>
            <Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
              Previous
            </Button>
            <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
          </ButtonGroup>
        </Flex>
      </Box>
    );
  };
  
  export default GameCard;
  
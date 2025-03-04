import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Heading, Image, Text, VStack, Spinner } from "@chakra-ui/react";

const GameDetails = () => {
  interface Game {
    id: number;
    name: string;
    background_image: string;
    description: string;
    released: string;
    rating: number;
    platforms: { platform: { name: string } }[];
    genres: { name: string }[];
  }

  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const result = await axios.get<Game>(
          `https://api.rawg.io/api/games/${id}?key=0f3cb634cb324a6d9851723bd77c4132`
        );
        setGame(result.data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGameDetails();
  }, [id]);

  if (loading) return <Spinner size="xl" />;

  return (
    <Box p={6} textAlign="center">
      {game && (
        <>
          <Image src={game.background_image} alt={game.name} borderRadius="lg" w="80%" mx="auto" />
          <VStack spacing={4} mt={6}>
            <Heading>{game.name}</Heading>
            <Text fontSize="md">Released: {game.released}</Text>
            <Text fontSize="md">Rating: {game.rating}⭐</Text>
            <Text fontSize="md">Genres: {game.genres.map((g) => g.name).join(", ")}</Text>
            <Text fontSize="md">Platforms: {game.platforms.map((p) => p.platform.name).join(", ")}</Text>
            <Text fontSize="large">{game.description.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
          </VStack>
        </>
      )}
    </Box>
  );
};

export default GameDetails;
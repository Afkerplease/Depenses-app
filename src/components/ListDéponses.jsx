import React, { useContext } from "react";
import { DeponseContext } from "../App";
import education from "../../public/school-books-young-adult-education.jpg";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";

function ListDéponses() {
  const { state } = useContext(DeponseContext);
  let IMAGE;

  return (
    <>
      <Flex wrap={"wrap"}>
        {state.dépenses.map((dep, index) => {
          if (dep.categorie === "Transport") {
            console.log("hello");
            IMAGE =
              "https://images-ext-1.discordapp.net/external/pTwoovZtMzbG30Wn8g8Ca2FHUMh6_aMz-qapB3W3fZ0/https/images.alphacoders.com/130/1309691.jpg?width=1082&height=676";
          }
          if (dep.categorie === "Éducation") {
            IMAGE =
              "https://habitatbroward.org/wp-content/uploads/2020/01/10-Benefits-Showing-Why-Education-Is-Important-to-Our-Society.jpg";
          }
          if (dep.categorie === "Logement") {
            IMAGE =
              "https://images-ext-2.discordapp.net/external/ocO7vrcVaerGQowlPe783M6AUyyIARqCnVYeOpFsp3Q/https/e1.pxfuel.com/desktop-wallpaper/36/427/desktop-wallpaper-north-pole-igloo-igloo.jpg";
          }
          if (dep.categorie === "Divertissement") {
            IMAGE =
              "https://images-ext-2.discordapp.net/external/qUTIXa_wZCsxmuP6zMC0HKFrqrgXDPKJISxXlVjcOpE/https/wallpapercave.com/wp/wp6608589.jpg?width=901&height=676";
          }
          if (dep.categorie === "Santé") {
            IMAGE =
              "https://images-ext-1.discordapp.net/external/cbdnz9zZFuz4Td3L840I_zp-EIu6dgIi2qHU97wlZ-g/https/wallpapers.com/images/hd/healthcare-heart-beat-4rg8v86gvhzdl30y.jpg?width=1202&height=676";
          }
          if (dep.categorie === "Alimentation") {
            IMAGE =
              "https://images-ext-2.discordapp.net/external/ek6yV8jJ83yFT2dZMUtcaiVl1CKDyZv9yoNrmkfSkFo/https/www.azutura.com/media/catalog/product/cache/49/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-50198_WP.jpg";
          }
          if (dep.categorie === "Autres") {
            IMAGE =
              "https://logos.flamingtext.com/Word-Logos/autres-design-sketch-name.png";
          }

          return (
            <Center key={index} py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"230px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${IMAGE})`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={230}
                    width={282}
                    objectFit={"cover"}
                    src={IMAGE}
                    alt="#"
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Text
                    color={"gray.500"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                    style={{ fontFamily: "Dancing Script", fontWeight: "700" }}
                  >
                    {dep.categorie}
                  </Text>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={500}
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    {dep.description}
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text
                      style={{ fontFamily: "Dancing Script" }}
                      fontWeight={800}
                      fontSize={"xl"}
                    >
                      {dep.prix} €
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          );
        })}
      </Flex>
    </>
  );
}

export default ListDéponses;

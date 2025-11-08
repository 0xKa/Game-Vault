import { Box, Heading, Center, Spinner, Text } from "@chakra-ui/react";

const TextOverlaySpinner = () => {
  return (
    <Box px={10} position="relative" aria-busy="true" userSelect="none">
      <Heading size={"3xl"} pb={5}>
        Blurry Heading Cause Game is Loading
      </Heading>
      <Text fontSize={"xl"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
        soluta consequuntur laborum commodi harum, fugit quis quidem,
        dignissimos provident nisi nobis illum recusandae ut eaque! Animi,
        laborum! Consectetur veritatis, quia, dolores cum iure animi, placeat
        neque impedit modi quisquam harum soluta ipsam ea aliquam ipsum ipsa
        nemo distinctio molestiae architecto fugiat perferendis non at beatae!
        Ea odit magnam ad temporibus laborum, vitae molestias officia vero ut
        optio nesciunt. Error doloremque molestias assumenda alias a earum
        provident quidem quaerat, labore ipsa inventore, mollitia aperiam
        nostrum dolores tenetur sequi iure magnam facere praesentium! Minima
        voluptates labore error dolorem magnam quo, amet numquam molestiae
        inventore nisi ab dolore repudiandae quae necessitatibus reiciendis
        doloribus ipsam exercitationem, accusantium perferendis veniam nostrum
        repellendus. Quis delectus, optio repudiandae error fugiat maxime
        maiores, accusamus, nesciunt consectetur neque at. Voluptate autem ut
        tempore ipsa dignissimos quae neque deserunt excepturi cum corporis,
        dolore veniam quia provident voluptas dicta porro vel mollitia impedit
        beatae illo! Labore ut facilis commodi repellendus. Molestiae obcaecati
        fugit nisi beatae corrupti, quibusdam, accusamus nesciunt officiis
        perferendis excepturi nulla et soluta quaerat quo autem ipsum officia
        eum non blanditiis facilis? Tempora exercitationem laborum tenetur
        facilis dolores, rerum labore ipsam odio, quia dolore iste illum saepe
        commodi eaque!
      </Text>
      <Box pos="absolute" inset="0" bg="bg/80" backdropFilter={"blur(6px)"}>
        <Center h="full">
          <Spinner color={"purple.500"} size={"xl"} borderWidth="10px" />
        </Center>
      </Box>
    </Box>
  );
};

export default TextOverlaySpinner;

import { Box } from "@hopin-team/ui-box";
import { FierceButton } from "../components/fierce-button";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  TabHeader,
} from "@hopin-team/ui-tabs";
import { Text } from "@hopin-team/ui-text";

import { Head } from "../components/head";
import { Main } from "../components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Box>
          <Text as="h1" color="grey-800" pattern="headingOne">
            Hello
          </Text>
          <Text as="p" color="grey-650" pattern="body">
            Lorem ipsum dolor sit amet consectetur adipiscing elit luctus,
            accumsan malesuada erat dictumst dictum vestibulum. Risus sociosqu
            ultricies inceptos dictum purus viverra leo nulla libero, volutpat
            dapibus condimentum accumsan fusce cursus aliquam enim, cum
            ullamcorper sapien feugiat erat iaculis morbi mi. Non sed penatibus
            vehicula neque inceptos egestas tellus, habitasse molestie dictumst
            lacinia tincidunt convallis, felis nisi nibh sociis quam ornare.
            Natoque habitant nec cras ridiculus tempus quis condimentum
            habitasse, dictum inceptos duis pretium gravida nascetur laoreet,
            sociis ut tristique himenaeos velit consequat pellentesque. Platea
            etiam sociosqu malesuada netus tincidunt proin cursus mollis
            facilisis, enim orci curabitur senectus nullam elementum inceptos
            venenatis leo eget, egestas viverra eleifend nisi ullamcorper litora
            non taciti. Sociosqu quisque arcu ullamcorper convallis imperdiet
            massa morbi sed cum, integer in tempor ultrices velit himenaeos
            accumsan donec fames, proin nulla sollicitudin ultricies dignissim
            fusce sem phasellus.
          </Text>
          <Tabs pattern="main">
            <TabHeader>
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab>Four</Tab>
              </TabList>
            </TabHeader>
            <TabPanels>
              <TabPanel>
                <Box>
                  <Text>Panel one!</Text>
                  <FierceButton size="large">Button</FierceButton>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Text>Panel two!</Text>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Text>Panel three!</Text>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Text>Panel four!</Text>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Main>
    </>
  );
}

import { Avatar } from "../fe-library/avartar";
import { Text } from "@hopin-team/ui-text";

import { Head } from "../components/head";
import { Main } from "../components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Playground: Stable classes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Text element="h1" pattern="headingTwo">
          Classes for Custom Branding
        </Text>
        <Text element="p" pattern="body">
          Adds classes to all <code>fe-library</code> components that the sales
          team can rely on to create custom themes.
        </Text>

        <div>
          {/* General */}
          <Avatar
            src="https://dummyimage.com/400x400/d6e3ff/333333/"
            alt="Example avatar"
          />
          {/* With Scope */}
          <Avatar
            src="https://dummyimage.com/400x400/d6e3ff/333333/"
            alt="Example avatar"
            __UIScope="stable-classes-page"
          />
        </div>
      </Main>
    </>
  );
}

import {
  Burger,
  Container,
  Group,
  Header,
  Image,
  Paper,
  rem,
  Text,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import data from '@content/navigation-links.json';
import useStyles from './NavigationBar.styles';
import { NavigationInfo } from './NavigationBar.d';

const HEADER_HEIGHT = rem(60);

const navData = data?.navBarInfo as NavigationInfo[];
export const NavigationBar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const navItems = navData.map((link) => (
    <Text key={link.id} onClick={() => close()}>
      {link.label}
    </Text>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Image src="/Ubiquity-Logo.png" alt="Ubiquity Logo" width={50} height="auto" mb={16} />
        <Group spacing={5} className={classes.links}>
          {navItems}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {navItems}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

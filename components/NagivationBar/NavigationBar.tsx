import { useState } from 'react';
import { Header, Container, Group, Burger, Paper, Transition, rem, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import data from '@content/navigation-links.json';
import useStyles from './NavigationBar.styles';
import { NavigationInfo } from './NavigationBar.d';

const HEADER_HEIGHT = rem(60);

const navData = data?.navBarInfo as NavigationInfo[];
export const NavigationBar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(navData[0].path);
  const { classes, cx } = useStyles();

  const navItems = navData.map((link) => (
    <a
      key={link.id}
      href={link.path}
      className={cx(classes.link, { [classes.linkActive]: active === link.path })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.path);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Image src="/Ubiquity-Logo.png" alt="Ubiquity Logo" width={50} height="auto" />
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

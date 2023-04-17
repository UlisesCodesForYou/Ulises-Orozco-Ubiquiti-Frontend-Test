import { useState } from 'react';
import {
    Header,
    Container,
    Group,
    Burger,
    Paper,
    Transition,
    rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useStyles from './NavigationBar.styles';
// import { MantineLogo } from '@mantine/ds';

const HEADER_HEIGHT = rem(60);

// interface HeaderResponsiveProps {
//     links: { link: string; label: string }[];
// }

export const NavigationBar = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                close();
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
            <Container className={classes.header}>
                {/*<MantineLogo size={28} />*/}
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}



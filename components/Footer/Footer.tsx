import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';
import data from '@content/footer-links.json';
import useStyles from './Footer.styles';
import { FooterInfo } from './Footer.d';

const footerData = data?.footerLinks as FooterInfo[];
export const FooterLinks = () => {
    const { classes } = useStyles();

    // const groups = footerData.map((group) => {
    //
    //
    //     return (
    //         <div className={classes.wrapper} key={group.title}>
    //             <Text className={classes.title}>{group.title}</Text>
    //             {links}
    //         </div>
    //     );
    // });
    const links = footerData.map((link) => (
        <Text<'a'>
          key={link.id}
          className={classes.link}
          component="a"
          href={link.links.link}
          onClick={(event) => event.preventDefault()}
        >
            {link.links.label}
        </Text>
    ));

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    {/*<MantineLogo size={30} />*/}
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Build fully functional accessible web applications faster than ever
                    </Text>
                </div>
                <div className={classes.groups}>{links}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2020 mantine.dev. All rights reserved.
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <IconBrandTwitter size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
};

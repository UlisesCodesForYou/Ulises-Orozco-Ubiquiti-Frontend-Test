import { Anchor, Container, Group, Image } from '@mantine/core';
import data from '@content/footer-links.json';
import useStyles from './Footer.styles';
import { FooterInfo } from './Footer.d';

const footerData = data?.footerLinks as FooterInfo[];
export const FooterLinks = () => {
  const { classes } = useStyles();

  const items: JSX.Element[] = footerData.map((link: FooterInfo) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.id}
      href={link.links.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.links.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image src="Ubiquity-Logo.png" alt="Ubiquity Logo" width={40} height="auto" />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
};

import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  scrollArea: {
    height: 600,
    marginTop: -80,
    marginBottom: -30,

    [theme.fn.largerThan('sm')]: {
      paddingLeft: '5%',
      paddingRight: '5%',
    },

    [theme.fn.largerThan('md')]: {
      paddingLeft: '10%',
      paddingRight: '10%',
    },
  },

  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',
    zIndex: 10,

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export default useStyles;

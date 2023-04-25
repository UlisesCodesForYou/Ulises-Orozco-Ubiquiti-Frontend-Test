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

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },

  imageContainer: {
    background: '#f6f6f8',
  },

  nameContainer: {
    marginTop: '15px',
  },

  productTitle: {
    marginLeft: '25%',

    [theme.fn.largerThan('sm')]: {
      textAlign: 'center',
      marginLeft: '5%',
    },
  },

  drawerContainer: {
    position: 'fixed',
    top: '50%',
    left: '15%',
    marginTop: '-300px',

    [theme.fn.largerThan('sm')]: {
      marginTop: '-400px',
    },

    [theme.fn.largerThan('md')]: {
      marginTop: '-200px',
    },
  },

  detailContainer: {
    display: 'flex',
    margin: 'auto',
  },

  tableContainer: {
    minWidth: 200,
    marginRight: 50,

    [theme.fn.largerThan('md')]: {
      minWidth: 300,
    },

    [theme.fn.largerThan('sm')]: {
      minWidth: 500,
    },
  },

  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.white,
    transition: 'box-shadow 150ms ease',
    zIndex: 10,

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid theme.colors.gray[2]}`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export default useStyles;

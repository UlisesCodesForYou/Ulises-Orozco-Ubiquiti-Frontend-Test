import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    border: 'solid 1px #ededed',

    '&:hover': {
      transform: 'scale(1)',
      boxShadow: theme.shadows.md,
      border: 'none',
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
    textAlign: 'center',
    marginLeft: '25%',
  },

  drawerContainer: {
    position: 'fixed',
    top: '50%',
    left: '15%',
    marginTop: '-200px',
  },

  detailContainer: {
    display: 'flex',
    margin: 'auto',
  },

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
}));

export default useStyles;

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    // transition: 'transform 150ms ease, box-shadow 150ms ease',
    border: 'solid 2px #ededed',
    padding: 0,

    '&:hover': {
      transform: 'scale(1)',
      boxShadow: theme.shadows.md,
      border: 'solid 2px #00A5E7',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    textAlign: 'center',
  },

  imageContainer: {
    background: '#f6f6f8',
  },

  nameContainer: {
    marginTop: '15px',
    textAlign: 'center',
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

  scrollArea: {
    height: 600,
    marginTop: -80,
    marginBottom: -30,
  },
}));

export default useStyles;

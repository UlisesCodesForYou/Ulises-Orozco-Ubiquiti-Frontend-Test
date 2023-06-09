import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    border: 'solid 2px #ededed',

    '&:hover': {
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

  imagePadding: {
    paddingRight: '2rem',
    paddingLeft: '2rem',
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

    [theme.fn.largerThan('sm')]: {
      minWidth: 500,
    },

    [theme.fn.largerThan('md')]: {
      minWidth: 300,
    },
  },

  scrollArea: {
    height: 800,
    marginTop: -80,
    marginBottom: -100,
  },
}));

export default useStyles;

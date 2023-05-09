import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: '1px solid #e9ecef',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      display: 'flex',
      placeContent: 'center',
    },
  },
}));

export default useStyles;

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
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
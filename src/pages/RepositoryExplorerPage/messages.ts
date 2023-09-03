import { defineMessages } from 'react-intl';

const scope = "Pages.RepositoryExplorerPage";

export const messages = defineMessages({
    noUsersMatched: {
        id: `${scope}.NoUsersMatched`,
        defaultMessage: 'No users matched, Try another one!',
    },
    showingUsersFor: {
        id: `${scope}.ShowingUsersFor`,
        defaultMessage: 'Showing users for "{name}"',
    },
    noDescription: {
        id: `${scope}.NoDescription`,
        defaultMessage: 'No description for this repository.',
    },
    noRepository: {
        id: `${scope}.NoRepository`,
        defaultMessage: 'This user doesn\'t have any public repository.',
    },
    title: {
        id: `${scope}.Title`,
        defaultMessage: 'Github Repository Explorer',
    },
});
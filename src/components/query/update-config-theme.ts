import { gql } from '@apollo/client';

export const MUTATION_CHANGE_CONFIG_THEME = gql`
    mutation ChangeConfigTheme(
        $color: String
        $colorIcon: String
        $backgroundColor: String
        $backgroundImage: String
        $fontFamily: String
    ) {
        changeConfigTheme(
            color: $color
            colorIcon: $colorIcon
            backgroundColor: $backgroundColor
            backgroundImage: $backgroundImage
            fontFamily: $fontFamily
        ) {
            backgroundImage {
                _id
                url
            }
            backgroundColor
            color
            colorIcon
            fontFamily
        }
    }
`;

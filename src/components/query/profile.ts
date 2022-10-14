import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
    query Profile($idRegister: String!) {
        profile(idRegister: $idRegister) {
            _id
            fullname
            avatarS3 {
                url
            }
            list {
                _id
                name
                type
                no
                content
                owner
                shortName
                isDefault
            }
            career_position
            company
            template {
                _id
                template
                colorIcon
                color
                background {
                    url
                }
            }
            hash_url
            themeConfig {
                backgroundImage {
                    _id
                    url
                }
                backgroundColor
                color
                colorIcon
                fontFamily
            }
            isDeleted
            idRegister
        }
    }
`;

import { gql } from '@apollo/client';

export const MUTATION_LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            _id
            fullname
            username
            phoneNumber
            description
            email
            address
            avatarS3 {
                url
                userId
                _id
                key
            }
            idRegister
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
            token
            defaultTemplate
            template {
                _id
                template
            }
            hash_url
            groupId
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
        }
    }
`;

export const MUTATION_REGISTER = gql`
    mutation RegisterUser(
        $name: String!
        $phoneNumber: String!
        $address: String!
        $email: String!
    ) {
        registerUser(
            name: $name
            phoneNumber: $phoneNumber
            address: $address
            email: $email
        ) {
            _id
            code
        }
    }
`;

export const MUTATION_SIGNUP = gql`
    mutation Signup(
        $fullname: String!
        $username: String!
        $email: String!
        $code: String!
        $password: String!
    ) {
        signup(
            fullname: $fullname
            username: $username
            email: $email
            code: $code
            password: $password
        ) {
            _id
            fullname
            phoneNumber
            description
            email

            avatarS3 {
                url
                userId
                _id
                key
            }
            career_position
            company
            idRegister
            hash_url
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
            token
            groupId
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
        }
    }
`;

export const MUTATION_RESET_ACCOUNT = gql`
    mutation ResetAccount(
        $id: String!
        $fullname: String!
        $username: String!
        $email: String!
        $code: String!
        $password: String!
    ) {
        resetAccount(
            id: $id
            fullname: $fullname
            username: $username
            email: $email
            code: $code
            password: $password
        ) {
            _id
            fullname
            phoneNumber
            description
            email

            avatarS3 {
                url
                userId
                _id
                key
            }
            career_position
            company
            idRegister
            hash_url
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
            token
            groupId
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
        }
    }
`;

export const QUERY_USER = gql`
    query Me {
        me {
            _id
            username
            fullname
            phoneNumber
            description
            email
            address
            avatarS3 {
                url
                userId
                _id
                key
            }
            type
            career_position
            company
            idRegister
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
            token
            template {
                _id
                template
            }
            defaultTemplate
            hash_url
            groupId
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
        }
    }
`;

export const MUTATION_UPDATE_USER_INFO = gql`
    mutation UpdateUserInfo(
        $address: String
        $fullname: String
        $career_position: String
        $company: String
        $description: String
        $avatarS3: String
        $hash_url: String
    ) {
        updateUserInfo(
            address: $address
            fullname: $fullname
            career_position: $career_position
            company: $company
            avatarS3: $avatarS3
            description: $description
            hash_url: $hash_url
        ) {
            _id
            fullname
            description
            phoneNumber
            email
            address

            avatarS3 {
                url
                userId
                _id
                key
            }
            idRegister
            list {
                _id
                name
                no
                content
                owner
                shortName
                isDefault
            }
            token
            template {
                _id
                template
            }
            career_position
            company
            defaultTemplate
            hash_url
            groupId
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
        }
    }
`;

export const MUTATION_CHANGE_PASSWORD = gql`
    mutation ChangePassword($password: String!, $passwordNew: String!) {
        changePassword(password: $password, passwordNew: $passwordNew) {
            _id
            fullname
            description
            phoneNumber
            email
            address

            avatarS3 {
                url
                userId
                _id
                key
            }
            idRegister
            list {
                _id
                name
                no
                content
                owner
                shortName
                isDefault
            }
            token
            template {
                _id
                template
            }
            career_position
            company
            defaultTemplate
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
        }
    }
`;

export const MUTATION_FORGOT_PASSWORD = gql`
    mutation ForgotPassword($email: String!) {
        forgotPassword(email: $email)
    }
`;

export const MUTATION_RESET_PASSWORD = gql`
    mutation ResetPassword($password: String!, $token: String!) {
        resetPassword(password: $password, token: $token)
    }
`;

export const MUTATION_ADMIN_RESET_PASSWORD = gql`
    mutation AdminResetPassword($userId: String!) {
        adminResetPassword(userId: $userId)
    }
`;

export const MUTATION_ADMIN_RESET_ACCOUNT = gql`
    mutation AdminResetAccount($userId: String!) {
        adminResetAccount(userId: $userId)
    }
`;

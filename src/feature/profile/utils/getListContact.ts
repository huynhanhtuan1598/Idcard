import {bankLists } from '../../../feature/profile/constants/bank-list';
import {socialLists} from '../../../feature/profile/constants/social-list';
import {emailList} from '../../../feature/profile/constants/email-list';
import {phoneList} from '../../../feature/profile/constants/phone-list';
import {servicesList } from '../../../feature/profile/constants/services-list';
import {websiteList } from '../../../feature/profile/constants/website-list';
import {taxcodeList} from '../../../feature/profile/constants/taxcode-list';
import {ecommerceList } from '../../../feature/profile/constants/ecommerce-list';
import {addressList } from '../../../feature/profile/constants/adress-list';

export enum ETypeContact {
    Bank = 'bank',
    Email = 'email',
    Phone = 'phone',
    Address = 'address',
    Services = 'services',
    Website = 'website',
    Taxcode = 'taxcode',
    Ecommerce = 'ecommerce',
}

export function getListContact(type: ETypeContact) {
    if (type === ETypeContact.Bank) {
        return bankLists;
    }
    if (type === ETypeContact.Email) {
        return emailList;
    }
    if (type === ETypeContact.Phone) {
        return phoneList;
    }
    if (type === ETypeContact.Address) {
        return addressList;
    }

    if (type === ETypeContact.Services) {
        return servicesList;
    }

    if (type === ETypeContact.Website) {
        return websiteList;
    }

    if (type === ETypeContact.Taxcode) {
        return taxcodeList;
    }

    if (type === ETypeContact.Ecommerce) {
        return ecommerceList;
    }

    return socialLists;
}

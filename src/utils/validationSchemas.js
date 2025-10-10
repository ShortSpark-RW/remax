/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

export const contactFormSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
  agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required('You must agree to the terms and conditions')
});

export const searchFormSchema = Yup.object({
  location: Yup.string().required('Location is required'),
  propertyType: Yup.string().required('Property type is required'),
  status: Yup.string().required('Property status is required'),
  priceRange: Yup.string().required('Price range is required')
});

export const advancedSearchSchema = Yup.object({
  location: Yup.string(),
  propertyStatus: Yup.string(),
  propertyType: Yup.string(),
  minBeds: Yup.string(),
  minBaths: Yup.string(),
  minPrice: Yup.string(),
  maxPrice: Yup.string(),
  minGarages: Yup.string(),
  agent: Yup.string(),
  minArea: Yup.string(),
  maxArea: Yup.string(),
  keyword: Yup.string(),
  propertyId: Yup.string()
});

export const newsletterSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
});

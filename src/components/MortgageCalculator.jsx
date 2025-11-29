/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, Minus } from 'lucide-react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const calculatorSchema = Yup.object({
  propertyValue: Yup.number().required('Property value is required').min(100000, 'Minimum 100,000 AED'),
  downPayment: Yup.number().required('Down payment is required').min(0),
  mortgageTermYears: Yup.number().required('Years required').min(1).max(25),
  mortgageTermMonths: Yup.number().required('Months required').min(0).max(11),
  interestRate: Yup.number().required('Rate required').min(0.1).max(20)
});

const MortgageCalculator = () => {
  const [step, setStep] = useState(0);
  const [calculatorData, setCalculatorData] = useState(null);
  const [formData, setFormData] = useState({
    lookingFor: '',
    bank: '',
    propertyValue: '',
    loanAmount: '',
    yearsRemaining: '',
    monthlyInstallment: '',
    fullName: '',
    email: '',
    phone: '',
    hasPassport: '',
    isResident: ''
  });

  const progress = ((step) / 8) * 100;

  const handleNext = () => {
    if (step < 8) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const calculateEMI = (values) => {
    const principal = values.propertyValue - values.downPayment;
    const monthlyRate = values.interestRate / 100 / 12;
    const totalMonths = values.mortgageTermYears * 12 + values.mortgageTermMonths;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return emi;
  };

  const banks = [
    'Dubai Islamic Bank',
    'Emirates NBD',
    'Abu Dhabi Commercial Bank',
    'First Abu Dhabi Bank',
    'Mashreq Bank'
  ];

  const years = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        {step > 0 && step < 8 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                {Math.round(progress)}% Completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-red-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Step 0: Calculator */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-lg"
            >
              <div className="p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  UAE <span className="text-red-600">MORTGAGE CALCULATOR</span>
                </h1>
                <p className="text-gray-600 mb-6">Accurately plan your mortgage with our trusted home loan EMI calculator</p>

                <Formik
                  initialValues={{
                    propertyValue: 1000000,
                    downPayment: 200000,
                    mortgageTermYears: 25,
                    mortgageTermMonths: 0,
                    interestRate: 3.7
                  }}
                  validationSchema={calculatorSchema}
                  onSubmit={(values) => {
                    setCalculatorData(values);
                    setStep(1);
                  }}
                >
                  {({ values, setFieldValue, errors, touched }) => {
                    const downPaymentPercent = ((values.downPayment / values.propertyValue) * 100).toFixed(0);
                    const emi = calculateEMI(values);
                    const financeAmount = values.propertyValue - values.downPayment;

                    return (
                      <Form>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Left Column */}
                          <div className="space-y-6">
                            {/* Property Value */}
                            <div>
                              <label className="block text-sm font-semibold mb-2 text-gray-700">PROPERTY VALUE</label>
                              <div className="relative">
                                <Field
                                  type="number"
                                  name="propertyValue"
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-right pr-16 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">AED</span>
                              </div>
                              {errors.propertyValue && touched.propertyValue && (
                                <p className="text-red-500 text-xs mt-1">{errors.propertyValue}</p>
                              )}
                            </div>

                            {/* Down Payment */}
                            <div>
                              <div className="flex justify-between mb-2">
                                <label className="text-sm font-semibold text-gray-700">DOWN PAYMENT</label>
                                <span className="text-sm font-semibold text-gray-900">{downPaymentPercent}%</span>
                              </div>
                              <div className="relative mb-3">
                                <input
                                  type="range"
                                  min={values.propertyValue * 0.2}
                                  max={values.propertyValue * 0.8}
                                  value={values.downPayment}
                                  onChange={(e) => setFieldValue('downPayment', Number(e.target.value))}
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                  style={{
                                    background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${downPaymentPercent}%, #e5e7eb ${downPaymentPercent}%, #e5e7eb 100%)`
                                  }}
                                />
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md" style={{ left: `calc(${downPaymentPercent}% - 8px)` }}></div>
                              </div>
                              <div className="relative">
                                <Field
                                  type="number"
                                  name="downPayment"
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-right pr-16 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">AED</span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">Minimum 20%</p>
                            </div>

                            {/* Mortgage Term */}
                            <div>
                              <label className="block text-sm font-semibold mb-2 text-gray-700">MORTGAGE TERM</label>
                              <div className="relative mb-3">
                                <input
                                  type="range"
                                  min="1"
                                  max="25"
                                  value={values.mortgageTermYears}
                                  onChange={(e) => setFieldValue('mortgageTermYears', Number(e.target.value))}
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                  style={{
                                    background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${(values.mortgageTermYears / 25) * 100}%, #e5e7eb ${(values.mortgageTermYears / 25) * 100}%, #e5e7eb 100%)`
                                  }}
                                />
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md" style={{ left: `calc(${(values.mortgageTermYears / 25) * 100}% - 8px)` }}></div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs text-gray-600 mb-1">Year</label>
                                  <Field
                                    type="number"
                                    name="mortgageTermYears"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs text-gray-600 mb-1">Month</label>
                                  <Field
                                    type="number"
                                    name="mortgageTermMonths"
                                    min="0"
                                    max="11"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Interest Rate */}
                            <div>
                              <label className="block text-sm font-semibold mb-2 text-gray-700">RATE (chose from the current best options)</label>
                              <div className="flex items-center gap-2">
                                <Field
                                  type="number"
                                  name="interestRate"
                                  step="0.1"
                                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                                <button
                                  type="button"
                                  onClick={() => setFieldValue('interestRate', Math.max(0.1, values.interestRate - 0.1))}
                                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setFieldValue('interestRate', Math.min(20, values.interestRate + 0.1))}
                                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-xs italic text-gray-500 mt-2">* Interest rates are based on global economic markets and can change at any time</p>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-6">
                            {/* Live EIBOR Rates */}
                            <div>
                              <h3 className="text-sm font-semibold mb-3 text-gray-900">LIVE EIBOR RATES <span className="font-normal text-xs text-gray-600">*EIBOR: Emirates offering interbank offering rate</span></h3>
                              <div className="grid grid-cols-3 gap-3">
                                <div className="bg-gray-100 p-3 rounded-lg text-center">
                                  <div className="text-xl font-bold text-gray-900">3.95%</div>
                                  <div className="text-xs text-red-600 font-semibold mt-1">1 MONTH</div>
                                </div>
                                <div className="bg-gray-100 p-3 rounded-lg text-center">
                                  <div className="text-xl font-bold text-gray-900">3.62%</div>
                                  <div className="text-xs text-red-600 font-semibold mt-1">3 MONTHS</div>
                                </div>
                                <div className="bg-gray-100 p-3 rounded-lg text-center">
                                  <div className="text-xl font-bold text-gray-900">3.94%</div>
                                  <div className="text-xs text-red-600 font-semibold mt-1">6 MONTHS</div>
                                </div>
                              </div>
                            </div>

                            {/* Estimate Rates */}
                            <div>
                              <h3 className="text-sm font-semibold mb-3 text-gray-900">ESTIMATE YOUR MORTGAGE REPAYMENT WITH OUR BEST RATES</h3>
                              <div className="grid grid-cols-3 gap-3">
                                <div className="border-2 border-gray-900 p-3 rounded-lg text-center bg-white">
                                  <div className="text-xl font-bold text-gray-900">3.7%</div>
                                  <div className="text-xs text-gray-700 mt-1">3 Years Fixed</div>
                                  <div className="text-xs text-red-600 mt-2 font-medium">Your payable EMI</div>
                                  <div className="text-sm font-semibold text-gray-900 mt-1">AED 4,091</div>
                                </div>
                                <div className="bg-gray-100 p-3 rounded-lg text-center">
                                  <div className="text-xl font-bold text-gray-900">4.19%</div>
                                  <div className="text-xs text-gray-700 mt-1">5 Years Fixed</div>
                                  <div className="text-xs text-red-600 mt-2 font-medium">Your payable EMI</div>
                                  <div className="text-sm font-semibold text-gray-900 mt-1">AED 4,307</div>
                                </div>
                                <div className="bg-gray-100 p-3 rounded-lg text-center">
                                  <div className="text-xl font-bold text-gray-900">4.27%</div>
                                  <div className="text-xs text-gray-700 mt-1">Variable Rate</div>
                                  <div className="text-xs text-red-600 mt-2 font-medium">Your payable EMI</div>
                                  <div className="text-sm font-semibold text-gray-900 mt-1">AED 4,343</div>
                                </div>
                              </div>
                            </div>

                            {/* EMI Result */}
                            <div className="border-2 border-red-500 rounded-lg p-6 text-center bg-white">
                              <p className="text-sm text-gray-700 mb-2">Your monthly payable EMI will be</p>
                              <div className="text-4xl font-bold text-gray-900 mb-4">AED {emi.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                              <button type="button" className="text-sm underline text-gray-900 hover:text-red-600 mb-3 transition-colors">VIEW CLOSING COSTS</button>
                              <p className="text-xs text-gray-600 mb-1">Estimated monthly payment based on {financeAmount.toLocaleString()} AED finance amount with a {values.interestRate}% fixed finance rate.</p>
                              <p className="text-xs text-gray-600 mb-4"><strong>Disclaimer</strong>: Rates may vary based on bank policies. T&Cs apply</p>
                              <div className="flex gap-3">
                                <button
                                  type="button"
                                  onClick={handleNext}
                                  className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                                >
                                  Next
                                </button>
                                <button
                                  type="submit"
                                  className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                                >
                                  FREE ELIGIBILITY CHECK
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </motion.div>
          )}

          {/* Step 1: Looking For */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                What are you looking for?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => handleChange('lookingFor', 'new')}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${
                    formData.lookingFor === 'new'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">New Purchase</span>
                    {formData.lookingFor === 'new' && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>

                <button
                  onClick={() => handleChange('lookingFor', 'refinance')}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${
                    formData.lookingFor === 'refinance'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Mortgage Refinances</span>
                    {formData.lookingFor === 'refinance' && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              </div>

              <button
                onClick={handleNext}
                disabled={!formData.lookingFor}
                className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next ›
              </button>
            </motion.div>
          )}

          {/* Step 2: Bank Selection */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Perfect! Let's get some more information about your existing mortgage
              </h2>

              <div className="mt-8 mb-8">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Which bank is your mortgage with?
                </label>
                <select
                  value={formData.bank}
                  onChange={(e) => handleChange('bank', e.target.value)}
                  className="w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Dubai Islamic Bank</option>
                  {banks.map((bank) => (
                    <option key={bank} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border-2 border-gray-300 rounded-md hover:bg-gray-50"
                >
                  ‹ Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800"
                >
                  Next ›
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Property Details */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Alright, let's get a few details about your property?
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Property value
                  </label>
                  <div className="relative max-w-md">
                    <input
                      type="text"
                      value={formData.propertyValue}
                      onChange={(e) => handleChange('propertyValue', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="40,000"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      AED
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Not sure what the amount is? Give us an approximate figure.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Outstanding loan amount
                  </label>
                  <div className="relative max-w-md">
                    <input
                      type="text"
                      value={formData.loanAmount}
                      onChange={(e) => handleChange('loanAmount', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="2,000"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      AED
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Not sure what the amount is? Give us an approximate figure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border-2 border-gray-300 rounded-md hover:bg-gray-50"
                >
                  ‹ Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800"
                >
                  Next ›
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Mortgage Term */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                What's the remaining mortgage term?
              </h2>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Number of years remaining?
                </label>
                <select
                  value={formData.yearsRemaining}
                  onChange={(e) => handleChange('yearsRemaining', e.target.value)}
                  className="w-full max-w-md px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year} {year === 1 ? 'year' : 'years'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border-2 border-gray-300 rounded-md hover:bg-gray-50"
                >
                  ‹ Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800"
                >
                  Next ›
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 5: Monthly Installment */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                What's your current mortgage monthly installment?
              </h2>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Monthly installment amount?
                </label>
                <div className="relative max-w-md">
                  <input
                    type="text"
                    value={formData.monthlyInstallment}
                    onChange={(e) => handleChange('monthlyInstallment', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="4,000"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    AED
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Not sure what the amount is? Give us an approximate figure.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border-2 border-gray-300 rounded-md hover:bg-gray-50"
                >
                  ‹ Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800"
                >
                  Next ›
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 6: Personal Details */}
          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Let's get some details to help serve you better!
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Your full name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className="w-full max-w-md px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Igor Jean Luc Ndiramiye"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full max-w-md px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="jeanluc05@live.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full max-w-md px-4 py-3 border-2 border-gray-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="+250 789 660 036"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border-2 border-gray-300 rounded-md hover:bg-gray-50"
                >
                  ‹ Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800"
                >
                  Next ›
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 7: UAE Passport */}
          {step === 7 && (
            <motion.div
              key="step7"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Do you hold a UAE passport?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => {
                    handleChange('hasPassport', 'yes');
                    handleNext();
                  }}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${
                    formData.hasPassport === 'yes'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-lg font-medium">Yes</span>
                </button>

                <button
                  onClick={() => {
                    handleChange('hasPassport', 'no');
                    handleNext();
                  }}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${
                    formData.hasPassport === 'no'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-lg font-medium">No</span>
                </button>
              </div>

              <button
                onClick={handleBack}
                className="px-6 py-3 border-2 border-gray-300 rounded-md hover:bg-gray-50"
              >
                ‹ Back
              </button>
            </motion.div>
          )}

          {/* Step 8: Completion */}
          {step === 8 && (
            <motion.div
              key="step8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-10 h-10 text-white" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                That's all we need for now!
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Thanks for the information
              </h3>

              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Your enquiry has been submitted successfully and our team will be in touch shortly
              </p>

              <button
                onClick={() => window.location.href = '/'}
                className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800"
              >
                Back to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MortgageCalculator;

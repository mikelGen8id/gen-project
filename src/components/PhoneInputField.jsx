// PhoneInput.js
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import COLORS from '../constants/colors';

const PhoneInputField = () => {
  const [phone, setPhone] = useState('');
  const [isfocused, setIsFocused] = useState(false);

  const handlePhoneChange = (value) => {
    // Extract digits only and limit to 10 digits
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length <= 10) {
      setPhone(numericValue);
    }
  };
  return (
    <div className="flex flex-col space-y-2 mt-2">
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={handlePhoneChange}
        containerStyle={{ width: '100%' }}
        inputStyle={{
          width: '100%',
          height: '40px',
          fontSize: '20px',
          borderColor: COLORS.gray,
          borderRadius: '0.5rem',
          borderWidth: '2px',
          padding: "24px 16px 24px 40px"
        }}
        onFocus={(e) => {e.target.style.borderColor = "purple"; setIsFocused(true)}}
        onBlur={(e) => {e.target.style.borderColor = COLORS.gray; setIsFocused(false)}}
        buttonStyle={{
          backgroundColor: 'white',
          borderRadius: '0.5rem 0 0 0.5rem',
          borderWidth:'2px',
          borderRight: 'none',
          borderColor: isfocused ? "purple" : COLORS.gray,
          
        }}
      />
      <span className="text-sm text-gray-500 self-end">
        {phone.length}/10
      </span>
    </div>
  );
};

export default PhoneInputField;
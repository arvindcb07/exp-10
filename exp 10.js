import React, { useState } from 'react';

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    gender: '',
    address: '',
    mobile: '',
    department: '',
    dateOfBirth: '',
    college: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Add your form submission logic here
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.gender) {
      validationErrors.gender = 'Gender is required';
    }

    if (!formData.address.trim()) {
      validationErrors.address = 'Address is required';
    }

    if (!formData.mobile.trim()) {
      validationErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      validationErrors.mobile = 'Invalid mobile number';
    }

    if (!formData.department) {
      validationErrors.department = 'Department is required';
    }

    if (!formData.dateOfBirth) {
      validationErrors.dateOfBirth = 'Date of Birth is required';
    }

    if (!formData.college.trim()) {
      validationErrors.college = 'College is required';
    }

    return validationErrors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>
      <div>
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        {errors.address && <span className="error">{errors.address}</span>}
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <span className="error">{errors.mobile}</span>}
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
        {errors.department && (
          <span className="error">{errors.department}</span>
        )}
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        {errors.dateOfBirth && (
          <span className="error">{errors.dateOfBirth}</span>
        )}
      </div>
      <div>
        <label>College:</label>
        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
        />
        {errors.college && <span className="error">{errors.college}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;

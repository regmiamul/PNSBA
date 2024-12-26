import React, { useState } from 'react';
import './MembershipForm.css';

function MembershipForm() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      mobileNumber: '',
      address: '',
    });
  
    const [errors, setErrors] = useState({}); // Validation error state
  
    // Handle form data changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle gender selection
    const handleGenderSelect = (gender) => {
      setFormData({ ...formData, gender });
    };
  
    // Form validation
    const validateForm = () => {
      let valid = true;
      const newErrors = {};
  
      // Required fields validation
      if (!formData.firstName) {
        newErrors.firstName = 'First Name is required';
        valid = false;
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last Name is required';
        valid = false;
      }
      if (!formData.gender) {
        newErrors.gender = 'Gender is required';
        valid = false;
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
        valid = false;
      }
      if (!formData.mobileNumber) {
        newErrors.mobileNumber = 'Mobile Number is required';
        valid = false;
      }
      if (!formData.address) {
        newErrors.address = 'Address is required';
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        alert('Form submitted successfully!');
        // Add additional form submission logic (e.g., send data to the server)
      }
    };
  
    return (
      <div>
        <h2>Membership Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
          </div>
  
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
          </div>

          <div className="form-group">
          <label>Gender:</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                required
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>  



          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
  
          <div>
            <label>Mobile Number:</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            {errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p>}
          </div>
  
          <div>
            <label>Address (State/Territory):</label>
            <select
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            >
              <option value="">Select a state</option>
              <option value="ACT">ACT</option>
              <option value="NSW">NSW</option>
              <option value="NT">NT</option>
              <option value="QLD">QLD</option>
              <option value="SA">SA</option>
              <option value="TAS">TAS</option>
              <option value="VIC">VIC</option>
              <option value="WA">WA</option>
            </select>
            {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
          </div>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default MembershipForm;
  


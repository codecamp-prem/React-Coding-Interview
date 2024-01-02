import { ChangeEvent, FormEvent, useState } from "react";
import "./multiStepForm.css";
const initialFormData = {
  name: "",
  email: "",
  address: "",
  city: "",
  zipcode: "",
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] =
    useState<typeof initialFormData>(initialFormData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for submission");
    setCurrentStep(1);
    setFormData(initialFormData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => setCurrentStep(currentStep + 1);

  const handlePreviousStep = () => setCurrentStep(currentStep - 1);

  if (currentStep === 1) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Personal Information</h2>
          <div>
            <label>Step {currentStep} of 3</label>
            <progress value={currentStep} max={3} />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              required
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="button" className="secondary" onClick={handleNextStep}>
            Next
          </button>
        </form>
      </div>
    );
  } else if (currentStep === 2) {
    return (
      <div className="container">
        <form>
          <h2>Address</h2>
          <div>
            <label>Step {currentStep} of 3</label>
            <progress value={currentStep} max={3} />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              required
              name="address"
              id="address"
              type="address"
              placeholder="What is your address?"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              required
              name="city"
              id="city"
              placeholder="What city do you live in?"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="zipcode">ZipCode</label>
            <input
              required
              name="zipcode"
              id="zipcode"
              placeholder="What city do your zipcode?"
              value={formData.zipcode}
              onChange={handleChange}
            />
          </div>
          <div className="buttonDiv">
            <button
              type="button"
              className="secondary"
              onClick={handleNextStep}
            >
              Next
            </button>
            <button type="button" className="link" onClick={handlePreviousStep}>
              Previous
            </button>
          </div>
        </form>
      </div>
    );
  } else if (currentStep === 3) {
    return (
      <div className="container">
        <form>
          <h2>Confirm your information</h2>
          <div>
            <label>Step {currentStep} of 3</label>
            <progress value={currentStep} max={3} />
          </div>
          <table>
            <tbody>
              {Object.keys(formData).map((key) => {
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{formData[key as keyof typeof formData]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="buttonDiv">
            <button type="submit" className="primary">
              Submit
            </button>
            <button type="button" className="link" onClick={handlePreviousStep}>
              Previous
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default MultiStepForm;

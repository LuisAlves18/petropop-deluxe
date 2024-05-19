// Import necessary libraries from React
import { useState, ChangeEvent, FormEvent } from 'react';
import { GasTypes } from '@/types/GasTypes';

// Define the props type for the CheckboxForm component
interface CheckboxFormProps {
  onFormSubmit: (data: { [key: string]: boolean }) => void;
}

// Define the CheckboxForm component
const CheckboxForm: React.FC<CheckboxFormProps> = ({ onFormSubmit }) => {
  // Initialize state to keep track of checkbox values
  const [formState, setFormState] = useState({
    GASOLEO_SIMPLES: false,
    GASOLEO_ESPECIAL: false,
    GASOLINA_SIMPLES: false,
    GASOLINA_ESPECIAL: false,
  });

  // Handle changes to the checkboxes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Handle form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with state:', formState);
    onFormSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-blue-100 rounded-lg shadow-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="GASOLEO_SIMPLES"
          checked={formState.GASOLEO_SIMPLES}
          onChange={handleChange}
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="checkbox1" className="text-gray-700">{GasTypes.GASOLEO_SIMPLES}</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="GASOLEO_ESPECIAL"
          checked={formState.GASOLEO_ESPECIAL}
          onChange={handleChange}
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="checkbox2" className="text-gray-700">{GasTypes.GASOLEO_ESPECIAL}</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="GASOLINA_SIMPLES"
          checked={formState.GASOLINA_SIMPLES}
          onChange={handleChange}
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="checkbox3" className="text-gray-700">{GasTypes.GASOLINA_SIMPLES}</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="GASOLINA_ESPECIAL"
          checked={formState.GASOLINA_ESPECIAL}
          onChange={handleChange}
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="checkbox4" className="text-gray-700">{GasTypes.GASOLINA_ESPECIAL}</label>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Submit
      </button>
    </form>
  );
};

export default CheckboxForm;
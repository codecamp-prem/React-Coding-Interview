import { FormEvent, useState } from "react";
import "./formBuilder.css";

type FormFieldsProps = {
  id?: number;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
};

const FormBuilder = () => {
  const [formFields, setFormFields] = useState<FormFieldsProps[]>();

  const handleAddFormField = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const newField = {
      id: new Date().getTime(),
      type: formData.get("type")?.toString(),
      label: formData.get("label")?.toString(),
      placeholder: formData.get("placeholder")?.toString(),
      required: formData.get("required") == "on" ? true : false,
      value: "",
    };

    setFormFields(
      formFields !== undefined ? [...formFields, newField] : [newField]
    );

    target.reset();
  };

  const handleUpdateFormField = (
    id: number,
    updatedField: { value: string }
  ) => {
    const updatedFormFields = formFields?.map((field) =>
      field.id === id ? { ...field, ...updatedField } : field
    );
    setFormFields(updatedFormFields);
  };

  const handleDeleteFormField = (id: number) => {
    const updatedFormFields = formFields?.filter((field) => field.id !== id);
    setFormFields(updatedFormFields);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(formFields, null, 2));
  };

  return (
    <div className="container">
      <h1>Form Builder</h1>
      <form id="form-builder" onSubmit={handleAddFormField}>
        <fieldset>
          <legend>Add a field</legend>
          <label htmlFor="type">Field Type</label>
          <select name="type" id="type">
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
          </select>
          <div>
            <label htmlFor="required">Required</label>
            <input type="checkbox" name="required" id="required" />
          </div>
          <label htmlFor="label">Label</label>
          <input
            required
            type="text"
            name="label"
            id="label"
            placeholder="Enter a label"
          />
          <label htmlFor="placeholder">Placeholder</label>
          <input
            required
            type="text"
            id="placeholder"
            name="placeholder"
            placeholder="Enter a placeholder"
          />
          <button type="submit" className="secondary">
            Add Form Field
          </button>
        </fieldset>
      </form>
      <form id="form-fields" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form Fields</legend>
          <ul>
            {formFields !== undefined &&
              formFields?.map((field) => (
                <li key={field.id}>
                  <label htmlFor={`input-${field.id}`}>{field.label}</label>
                  <input
                    id={`input-${field.id}`}
                    required={field.required}
                    placeholder={field.placeholder}
                    type={field.type}
                    value={field.value}
                    onChange={(e) =>
                      handleUpdateFormField(field.id!, {
                        value: e.target.value,
                      })
                    }
                  />
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => handleDeleteFormField(field.id!)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
          <span>Your form fields will show here!</span>
          <button className="primary">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default FormBuilder;

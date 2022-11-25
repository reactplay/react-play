import { useEffect, useState, useRef } from 'react';
import { TextField, FormControl, Autocomplete, Button } from '@mui/material';
import * as _ from 'lodash';

const disabledFields = ['issue', 'github'];

const PlayForm = ({ fields, formDataObj, onSubmit, isEditPlay }) => {
  const [formData, setFormData] = useState({ ...formDataObj });
  const formDataReference = useRef(formDataObj);

  const checkDisabledInputs = (fieldName) => isEditPlay && disabledFields.includes(fieldName);

  const handleChange = (key, value) => {
    setFormData((pre) => ({ ...pre, [key]: value }));
  };

  useEffect(() => {
    setFormData({ ...formDataReference.current });
  }, []);

  const renderField = (field) => {
    switch (field.type) {
      case 'input':
        return (
          <TextField
            id={field.id}
            label={field.plaeholder}
            value={formData[field.datafield]}
            size="small"
            className="w-full"
            disabled={checkDisabledInputs(field.datafield)}
            {...field}
            onChange={(e) => handleChange(field.datafield, e.target.value)}
          />
        );
      case 'select':
        return (
          <Autocomplete
            id={field.datafield}
            size="small"
            options={field.options || []}
            getOptionLabel={(option) => option.name || option[field.fieldName] || option}
            filterSelectedOptions
            multiple={field.multiple}
            freeSolo={field.freeSolo}
            disabled={checkDisabledInputs(field.datafield)}
            value={
              !formData[field.datafield] ? (field.multiple ? [] : '') : formData[field.datafield]
            }
            onChange={(e, newValue) => {
              let updatedval = newValue;
              if (field.multiple) {
                updatedval = [];
                newValue.forEach((v) => {
                  if (_.isObject(v)) {
                    updatedval.push(v);
                  } else {
                    updatedval.push({
                      [field.fieldName || 'name']: v,
                      [field.fieldValue || 'value']: ''
                    });
                  }
                });
              }
              handleChange(field.datafield, updatedval);
            }}
            renderInput={(params) => (
              <TextField {...params} size="small" placeholder={field.placeholder} />
            )}
          />
        );
      default:
        return null;
    }
  };

  const renderForm = () => {
    return (
      <FormControl className="w-full">
        {fields.map((field, field_key) => {
          return (
            <div className="flex p-2" key={field_key}>
              <div className="flex-1">
                {field.display}
                {field.required ? '*' : ''}
              </div>
              <div className="flex-1">{renderField(field)}</div>
            </div>
          );
        })}
      </FormControl>
    );
  };

  const isFieldsAreInValid = () => {
    let res = false;
    fields.forEach((tmpl) => {
      if (tmpl.required && (!formData || !formData[tmpl.datafield])) {
        if (isEditPlay && disabledFields.includes(tmpl.datafield)) {
          res = false;
        } else {
          res = true;
        }
      }
    });
    return res;
  };

  return (
    <>
      <div className="flex-1 px-10 py-8 overflow-auto">
        <form>{renderForm()}</form>
      </div>
      <div className="h-14">
        <hr />
        <div className="p-8 h-full flex items-center">
          <Button
            size="small"
            variant="contained"
            disabled={isFieldsAreInValid()}
            onClick={onSubmit.bind(null, formData)}
          >
            {!isEditPlay ? 'Create the awesome' : 'Edit Play'}
          </Button>
        </div>
      </div>
    </>
  );
};

export default PlayForm;

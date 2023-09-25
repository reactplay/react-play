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

  const checkIsValid = (pattern, value) => {
    const patternRegex = new RegExp(pattern);

    // Here you probably what to check this to some regex validation
    return patternRegex.test(value);
  };

  useEffect(() => {
    setFormData({ ...formDataReference.current });
  }, []);

  const renderField = (field) => {
    switch (field.type) {
      case 'input':
        return (
          <TextField
            className="w-full"
            disabled={checkDisabledInputs(field.datafield)}
            error={field.pattern ? !checkIsValid(field.pattern, formData[field.datafield]) : false}
            id={field.id}
            label={field.placeholder}
            name={field.id}
            // if it's valid, we need to use the inverse of the respose as true means you will display an error
            size="small"
            value={formData[field.datafield]}
            {...field}
            onChange={(e) => handleChange(field.datafield, e.target.value)}
          />
        );
      case 'select':
        return (
          <Autocomplete
            filterSelectedOptions
            disabled={checkDisabledInputs(field.datafield)}
            freeSolo={field.freeSolo}
            getOptionLabel={(option) => option.name || option[field.fieldName] || option}
            id={field.datafield}
            multiple={field.multiple}
            options={field.options || []}
            renderInput={(params) => (
              <TextField {...params} placeholder={field.placeholder} size="small" />
            )}
            size="small"
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
                    const findEntry = _.find(field.options, function (opt) {
                      return opt.name.toLowerCase() === v.toLowerCase();
                    });
                    updatedval.push({
                      [field.fieldName || 'name']: v,
                      [field.fieldValue || 'value']: findEntry
                        ? findEntry[field.fieldValue || 'value']
                        : ''
                    });
                  }
                });
              }
              handleChange(field.datafield, updatedval);
            }}
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
            disabled={isFieldsAreInValid()}
            size="small"
            variant="contained"
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

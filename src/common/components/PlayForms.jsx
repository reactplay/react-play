import {TextField , FormControl, Autocomplete} from '@mui/material';
import { useEffect, useState } from 'react';
import * as _ from 'lodash';
const PlayForm = ({fields, data, onChange}) => {

  const [formData, setFormData] = useState({})
  useEffect(() => {
    setFormData({...data})
  }, [data])

  const onDataChanged = (key, value) => {
    formData[key] = value;
    setFormData({...formData})
    if(onChange) {
      onChange(formData)
    }
  }

   const renderField = field => {
    switch(field.type){
      case 'input': return <TextField id={field.id} 
                                      label={field.plaeholder}
                                      value={formData[field.datafields]} 
                                      size="small"
                                      className='w-full'
                                      {...field}

                                      onChange={(e) => {
                                        onDataChanged(field.datafield, e.target.value)}
                                      }/>
        case 'select': return <Autocomplete id={field.datafield}
                                            size="small"
                                            options={field.options || []}
                                            getOptionLabel={(option) => option.name || option[field.fieldName] || option}
                                            filterSelectedOptions
                                            multiple={field.multiple}
                                            freeSolo={field.freeSolo}
                                            onChange={(e, newValue) => {
                                              let updatedval = newValue;
                                              if(field.multiple) {
                                                updatedval = [];
                                                newValue.forEach(v => {
                                                  if(_.isObject(v)){
                                                    updatedval.push(v);
                                                  } else {
                                                    updatedval.push({
                                                      [field.fieldName || 'name']: v,
                                                      [field.fieldValue || 'value']: ""
                                                    })
                                                  }
                                                })
                                              }
                                              onDataChanged(field.datafield, updatedval)}
                                            }
                                            renderInput={(params) => (
                                              <TextField
                                                {...params}
                                                size="small"
                                                placeholder={field.placeholder}
                                              />
                                            )}
                                />
                default: return <></>
    }
  }
 
  const renderForm = () => {
    return <>
        <FormControl className='w-full'>
          {fields.map((field, field_key) => {
            return(
              <div className='flex p-2' key={field_key}>
                <div className='flex-1'>
                  {field.display}{field.required ? "*":""}
                </div>
                <div className='flex-1'>
              {renderField(field)}
              </div>
              </div>
              
            )
          })}
        </FormControl> </>
  }
  
  return (
    <>
      {renderForm()}
    </>
  );
};

export default PlayForm;

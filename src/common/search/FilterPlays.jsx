import { Modal } from 'common';
import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchContext } from './search-context';
import './search.css';
import { orderBy } from 'lodash';

import { RiFilterFill } from 'react-icons/ri';
import useFetchFilterData from './hooks/usePlayFilter';
import { ParseQuery } from './search-helper';
import { FIELD_TEMPLATE } from './filter-template';
import { TextField, Checkbox, Autocomplete, Button } from '@mui/material';
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';

const icon = <BiCheckbox size={30} />;
const checkedIcon = <BiCheckboxChecked size={30} />;

const FilterPlays = ({ reset }) => {
  const [loading, error, data] = useFetchFilterData();
  const [loadedData, setLoadedData] = useState({})
  const [formData, setFormData] = useState({  });
  
  const location = useLocation();
  const navigate = useNavigate();
  const [filterObject, setFilterObject] = useState({})
  const [parsedQuery, setParsedQuery] = useState({})
  const [showModal, setShowModal] = useState(false);
  const [modifiedFilterQuery, setModifiedFilterQuery] = useState({
    ...filterObject
  });
  const [noOfAppliedFilter, setnoOfAppliedFilter] = useState(0);

  const [isFilterApplied, setIsFilterApplied] = useState(false);

  useEffect(() => {
    if(!loading) {
    const p_query =ParseQuery(location.search) 
        data.languages = [{
      name: 'JavaScript',
      value: 'js',
      icon: 'https://res.cloudinary.com/dgtdljyul/image/upload/v1675411496/js_jjnhvy.png'
    },{
      name: 'TypeScript',
      value: 'ts',
      icon: 'https://res.cloudinary.com/dgtdljyul/image/upload/v1675409456/ts_yrzjge.png'
    }]
    setLoadedData(data)
    if(p_query) {
      loadFilter(p_query, data)
    }

    }

  }, [location.pathname, location.search, loading]);

  const filterModalCloseBtnHandler = () => {
    setShowModal(false);
  };

  const loadFilter = (query, l_data) => {
    const res = {}
    const newFormData = {}
    FIELD_TEMPLATE.forEach(template => {
      if(query[template.datafield]) {
        newFormData[template.datafield] = []
        const splitData = query[template.datafield].split(',')
        splitData.forEach(data => {
          const found = l_data[template.datafield].filter((d) => {
            if(template.node) {
              return d[template.node][template.fieldValue] === data
            } else {
              return d[template.fieldValue] === data
            }
          })[0]
          if(found) {
          newFormData[template.datafield].push(found)
          }
        })
      }
    })
    setFormData(newFormData)
  }

  const handleFilter = () => {
    const res = {}
    FIELD_TEMPLATE.forEach(template => {
      if(formData[template.datafield]) {
        res[template.datafield] = []
        formData[template.datafield].forEach(data => {
          res[template.datafield].push(template.node? data[template.node][template.fieldValue]: data[template.fieldValue])
        })
      }
    })

    const finalQueryObject = {}
    Object.keys(res).forEach (key => {
      if(res[key] && res[key].length) {
        finalQueryObject[key] = res[key]
      }
    })
    const query = new URLSearchParams(finalQueryObject).toString();
    
    if(query){
      setIsFilterApplied(true);
      navigate(`/plays?${query}`);
      setShowModal(false)
    } else{
      setShowModal(true)
    }
    
    
  }

  const handleChange = (key, value) => {
    setFormData((pre) => ({ ...pre, [key]: value }));
  };

  if (loading) {
    return <p>{'Loading all fields'}</p>;
  }

  const getOptionNode = (field, option) => {
    if(field.node) {
      return option[field.node]
    }
    return option
  }

  return (
    <div className="search-filter">
      <Modal
        cname="filter"
        show={showModal}
        title="Filter Plays By"
        onClose={filterModalCloseBtnHandler}
        onSubmit={handleFilter}
      >
        {
          FIELD_TEMPLATE.map((field, field_i) => {
            return (

              <div className="flex p-2" key={field_i}>
              <div className="w-32">
                {field.display}
                {field.required ? '*' : ''}
              </div>
              <div className="flex-1"><Autocomplete
            freeSolo={field.freeSolo}
            disableCloseOnSelect
            getOptionLabel={(option) => field.node?  option[field.node][field.fieldName]: option[field.fieldName]}
            id={field.datafield}
            multiple={field.multiple}
            options={field.sorted ? orderBy(
              loadedData[field.datafield], [field.fieldName], ['asc']
            ): loadedData[field.datafield]}
            renderInput={(params) => (
              <TextField {...params} placeholder={field.placeholder} size="small" />
            )}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                <div className='flex'><span className='rounded-full'>{
                  field.avatar && getOptionNode(field, option)[field.avatar] ? <span className='flex items-center justify-center h-12 w-16 mr-4'><img className='h-12 w-12 rounded-full' src={getOptionNode(field, option)[field.avatar]} alt='avatar'/></span>:null
                }</span><span className='flex items-center'>{field.node?  option[field.node][field.fieldName]: option[field.fieldName]}</span></div>
                
                
              </li>
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
                    updatedval.push({
                      [field.fieldName || 'name']: v,
                      [field.fieldValue || 'value']: ''
                    });
                  }
                });
              }
              handleChange(field.datafield, updatedval);
            }}
          /></div>
            </div>


              
            )
          })
        }
       
      </Modal>

      <button
        className="btn-filter"
        title="Filter Plays"
        onClick={() => {
          setShowModal(true);
          setIsFilterApplied(false);
        }}
      >
        {noOfAppliedFilter === 0 ? null : <div className="badge">{noOfAppliedFilter}</div>}

        <RiFilterFill className="icon" color="var(--color-neutral-30)" size="28px" />
      </button>
    </div>
  );
};

export default FilterPlays;

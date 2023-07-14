import { Modal } from 'common';
import { useState, useEffect } from 'react';
import './search.css';
import { orderBy } from 'lodash';

import useFetchFilterData from './hooks/usePlayFilter';

import { FIELD_TEMPLATE } from './filter-template';
import { TextField, Checkbox, Autocomplete } from '@mui/material';
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';
import { GiSettingsKnobs } from 'react-icons/gi';
import * as _ from 'lodash';

const icon = <BiCheckbox size={30} />;
const checkedIcon = <BiCheckboxChecked size={30} />;

const FilterPlays = ({ onChange, query }) => {
  const [loading, error, data] = useFetchFilterData();
  const [loadedData, setLoadedData] = useState({});
  const [formData, setFormData] = useState({});

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      data.languages = [
        {
          name: 'JavaScript',
          value: 'js',
          icon: 'https://res.cloudinary.com/dgtdljyul/image/upload/v1675411496/js_jjnhvy.png'
        },
        {
          name: 'TypeScript',
          value: 'ts',
          icon: 'https://res.cloudinary.com/dgtdljyul/image/upload/v1675409456/ts_yrzjge.png'
        }
      ];
      setLoadedData(data);
    }
  }, [query, loading, showModal]);

  const filterModalCloseBtnHandler = () => {
    setShowModal(false);
  };

  const loadFilter = () => {
    const newFormData = {};
    FIELD_TEMPLATE.forEach((template) => {
      if (template.datafield === 'text') {
        const text = query && query.text ? query.text.split('+').join(' ') : '';

        newFormData['text'] = decodeURIComponent(text);
      } else {
        if (query[template.datafield]) {
          newFormData[template.datafield] = [];
          const splitData = _.isArray(query[template.datafield])
            ? query[template.datafield]
            : query[template.datafield].split(',');
          splitData.forEach((data) => {
            const found =
              loadedData[template.datafield] &&
              loadedData[template.datafield].filter((d) => {
                if (template.node) {
                  return d[template.node][template.fieldValue] === data;
                } else {
                  return d[template.fieldValue] === data;
                }
              })[0];
            if (found) {
              newFormData[template.datafield].push(found);
            }
          });
        }
      }
    });
    setFormData(newFormData);
  };

  const showFilterModal = () => {
    if (query) {
      loadFilter();
    } else {
      setFormData({});
    }
    setShowModal(true);
  };

  const handleFilter = () => {
    const res = {};
    FIELD_TEMPLATE.forEach((template) => {
      if (formData[template.datafield]) {
        res[template.datafield] = [];
        if (_.isArray(formData[template.datafield])) {
          formData[template.datafield].forEach((data) => {
            res[template.datafield].push(
              template.node ? data[template.node][template.fieldValue] : data[template.fieldValue]
            );
          });
        } else {
          res[template.datafield] = formData[template.datafield];
        }
      }
    });

    const finalQueryObject = {};
    Object.keys(res).forEach((key) => {
      if (res[key] && res[key].length) {
        finalQueryObject[key] = res[key];
      }
    });
    const final_query = { ...finalQueryObject };
    const fianl_query_param = new URLSearchParams(finalQueryObject).toString();

    if (fianl_query_param) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
    if (onChange) {
      onChange(final_query);
    }
  };

  const handleChange = (key, value) => {
    setFormData((pre) => ({ ...pre, [key]: value }));
  };

  if (loading) {
    return <p />;
  }

  const getOptionNode = (field, option) => {
    if (field.node) {
      return option[field.node];
    }

    return option;
  };

  const renderFiled = (field) => {
    switch (field.type) {
      case 'select':
        return (
          <Autocomplete
            disableCloseOnSelect
            freeSolo={field.freeSolo}
            getOptionLabel={(option) =>
              field.node ? option[field.node][field.fieldName] : option[field.fieldName]
            }
            id={field.datafield}
            multiple={field.multiple}
            options={
              field.sorted
                ? orderBy(loadedData[field.datafield], [field.fieldName], ['asc'])
                : loadedData[field.datafield]
            }
            renderInput={(params) => (
              <TextField {...params} placeholder={field.placeholder} size="small" />
            )}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  checked={selected}
                  checkedIcon={checkedIcon}
                  icon={icon}
                  style={{ padding: 0 }}
                />
                <div className="flex md-ml-8 min-w-0 ml-2 items-center">
                  <span className="rounded-full">
                    {field.avatar && getOptionNode(field, option)[field.avatar] ? (
                      <span className="flex items-center justify-center md-h-12 h-8 md-w-16 w-8 mr-4">
                        <img
                          alt="avatar"
                          className="md-h-12 w-8 md-w-12 h-8 rounded-full"
                          src={getOptionNode(field, option)[field.avatar]}
                        />
                      </span>
                    ) : null}
                  </span>
                  <span className="break-words min-w-0">
                    {field.node ? option[field.node][field.fieldName] : option[field.fieldName]}
                  </span>
                </div>
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
          />
        );
      case 'text':
        return (
          <TextField
            className="w-full"
            size="small"
            value={formData[field.datafield]}
            onChange={(e) => handleChange(field.datafield, e.target.value)}
          />
        );
    }
  };

  return (
    <div className="search-filter">
      <Modal
        cname="filter"
        show={showModal}
        title="Filter Plays By"
        onClose={filterModalCloseBtnHandler}
        onSubmit={handleFilter}
      >
        {FIELD_TEMPLATE.map((field, field_i) => {
          return (
            <div className="flex flex-col md:flex-row p-2" key={field_i}>
              <div className="w-32">
                {field.display}
                {field.required ? '*' : ''}
              </div>
              <div className="flex-1">{renderFiled(field)}</div>
            </div>
          );
        })}
      </Modal>

      <button
        className="btn-filter"
        title="Filter Plays"
        onClick={() => {
          showFilterModal();
        }}
      >
        {query && Object.keys(query).length > 0 ? (
          <div className="badge">{Object.keys(query).length}</div>
        ) : null}

        <GiSettingsKnobs className="icon" color="var(--color-neutral-30)" size="28px" />
      </button>
    </div>
  );
};

export default FilterPlays;

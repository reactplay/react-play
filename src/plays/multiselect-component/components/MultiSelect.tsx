import React, {useEffect, useState} from 'react';
import CloseOptionsIcon from "./CloseOptionsIcon";
import OpenOptionsIcon from "./OpenOptionsIcon";

interface Option {
    name: string;
    selected: boolean;
}

interface MultiSelectProps {
    defaultOptions: string[],
    selectedOptions: string[],
    onChange: (options: string[]) => void,
    label: string,
    addNewOption: (option: string) => void,
    placeholder?: string
}

const MultiSelect = ({
                         defaultOptions,
                         selectedOptions,
                         onChange,
                         label,
                         placeholder,
                         addNewOption
                     }: MultiSelectProps) => {
    const [options, setOptions] = useState<Option[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Filters the options based on current search term and maps them to Option format
        setOptions(defaultOptions
            .filter(option => !searchTerm || option.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(option => ({name: option, selected: selectedOptions.includes(option)}))
        )
    }, [selectedOptions, defaultOptions, searchTerm]);

    const addToSelected = (optionToBeAdded: string) => {
        onChange([...selectedOptions, optionToBeAdded]);
    }

    const removeFromSelected = (optionToBeRemoved: string) => {
        onChange(selectedOptions.filter((option) => option !== optionToBeRemoved));
    }

    const handleSelect = (option: Option) => {
        option.selected ? removeFromSelected(option.name) : addToSelected(option.name)
    }

    const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const openOptions = () => setIsOpen(true);

    const closeOptions = () => setIsOpen(false);

    const addSearchTermAsNewOption = () => {
        setSearchTerm("");
        addNewOption(searchTerm);
    }

    return (
        // tabIndex is added so that onBlur can work on a div element
        <div id="select" tabIndex={0} onBlur={closeOptions}>
            <label htmlFor="selector">{label}</label>
            <div id="selector">
                <div id="selected-options">
                    {selectedOptions.map(option =>
                        <div key={option + "selected"} className="option">
                            <p>{option}</p>
                            <CloseOptionsIcon size={25} onClick={() => removeFromSelected(option)}/>
                        </div>)}
                </div>
                <div id="search">
                    <input type="text" id="input" placeholder={placeholder || ""}
                           onChange={handleSearchTerm}
                           onFocus={openOptions}
                           value={searchTerm}
                        // stopPropagation prevents options list from closing when clicked directly from input field
                           onBlur={event => event.stopPropagation()}/>
                    {isOpen ? <CloseOptionsIcon onClick={closeOptions} size={30}/> :
                        <OpenOptionsIcon size={30} onClick={openOptions}/>}
                </div>
            </div>
            <div id="options" role="list" className={isOpen ? "" : "closed"}>
                {!!options.length ? options
                        .map(option =>
                            <p key={option.name}
                               className={`option ${option.selected ? "selected" : ""}`}
                               onMouseDown={() =>
                                   handleSelect(option)
                               }>
                                {option.name}
                            </p>) :
                    <p className="not-found" onClick={addSearchTermAsNewOption}>
                        Add new option: <span>{searchTerm}</span>
                    </p>
                }
            </div>
        </div>
    )
}

export default MultiSelect;
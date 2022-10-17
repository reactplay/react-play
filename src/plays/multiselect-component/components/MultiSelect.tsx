import React, {useEffect, useState} from 'react';

interface Option {
    name: string;
    selected: boolean;
}

interface MultiSelectProps {
    defaultOptions: string[],
    selectedOptions: string[],
    onChange: (options: string[]) => void
}

const MultiSelect = ({defaultOptions, selectedOptions, onChange}: MultiSelectProps ) => {
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

    const OpenOptionsIcon = () => <img alt="down-arrow" className="icon-button"
                                       onClick={openOptions}
                                       src="https://img.icons8.com/ios/20/000000/expand-arrow--v2.png"/>

    const CloseOptionsIcon = () => <img alt="close"  className="icon-button"
                                        onClick={closeOptions}
                                        src="https://img.icons8.com/ios/20/000000/delete-sign--v1.png"/>

    const openOptions = () => setIsOpen(true);
    const closeOptions = () => setIsOpen(false);

    return (
        <div id="select" tabIndex={0} onBlur={closeOptions}>
            <label htmlFor="selector">Select Your Favorite Game:</label>
            <div id="selector">
                <div id="selected-options">
                    {selectedOptions.map(option => <p key={option + "selected"} className="option"
                                                      onClick={() => removeFromSelected(option)}>{option}</p>)}
                </div>
                <div id="search">
                    <input type="text" id="input" placeholder="Press Enter to Search.."
                           onChange={handleSearchTerm} onFocus={openOptions}
                           onBlur={event => event.stopPropagation()}/>
                    {isOpen ? <CloseOptionsIcon/> : <OpenOptionsIcon/>}
                </div>
            </div>
            <div id="options" role="list" className={isOpen ? "" : "closed"} data-testid="options">
                {options
                    .map(option =>
                        <p key={option.name}
                           className={`option ${option.selected ? "selected" : ""}`}
                           onMouseDown={() =>
                               handleSelect(option)
                           }>
                            {option.name}
                        </p>)}
            </div>
        </div>
    )
}

export default MultiSelect;
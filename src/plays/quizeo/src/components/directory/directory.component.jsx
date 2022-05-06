import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory-selectors";
import MenuItem from "../menu-item/menuItem.component";
import './directory.styles.css';
const Directory = ({sections}) => {
    return ( 
        <div className="directoryMenu">
            {sections.map(({id, ...otherSectionComponent}) => (
                <MenuItem key={id} {...otherSectionComponent}/>
            ))}
        </div>  
    );
}
 
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);
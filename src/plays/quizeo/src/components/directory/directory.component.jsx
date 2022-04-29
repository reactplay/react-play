import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory-selectors";
import MenuItem from "../menu-item/menuItem.component";

const Directory = ({sections}) => {
    return ( 
        <div className="directoryMenu flex flex-row justify-center m-12 items-center flex-wrap">
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
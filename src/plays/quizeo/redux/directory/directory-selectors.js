import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySection = createSelector(
    [selectDirectory],
    directory => directory.sections
)

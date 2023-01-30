export default ({
    getListFilteredByName(state) {
        if (state.filterValue) {
            return state.list
                .filter(item => item.name
                    .toLowerCase()
                    .includes(state.filterValue));
        } else {
            return state.list;
        }
     }
});

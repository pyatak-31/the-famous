export default ({
    getListFilteredByName(state) {
        if (state.filterValue) {
            return state.list
                .filter(item => item.name
                    .toLowerCase()
                    .includes(state.filterValue.toLowerCase()));
        } else {
            return state.list;
        }
     }
});

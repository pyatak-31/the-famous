import { computed } from "vue";
import { useStore } from "vuex";

export const useCatalog = () => {
    const store = useStore();

    const catalogList = computed(() => store.getters['catalog/getListFilteredByName']);

    const filterByName = (filterValue) => {
        store.commit('catalog/setFilterValue', filterValue)
    };

    return { catalogList, filterByName };
};

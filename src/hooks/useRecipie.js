import { reactive } from "vue";
import { defineStore } from "pinia";

const useRecipie = defineStore("recipie", () => {
  const recipies = reactive({
    data: {},
    allIds: [],
  });

  const onAdd = (data) => {
    recipies.data[data.id] = data;
    recipies.allIds.push(data.id);
  };

  const onDelete = (id) => {
    delete recipies.data[id];
    const index = recipies.allIds.indexOf(id);
    if (index > -1) {
      recipies.allIds.splice(index, 1);
    }
  };
  const onUpdate = (data) => {
    if (recipies.data[data.id]) {
      recipies.data[data.id] = data;
    }
  };

  const getById = (id) => id && recipies.data[id];

  return { onAdd, onDelete, onUpdate, recipies, getById };
});

export default useRecipie;

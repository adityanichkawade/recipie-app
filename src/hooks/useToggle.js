import { ref } from "vue";

const useToggle = (defaultValue = false) => {
  const state = ref(defaultValue);
  const toggle = (flag) =>
    (state.value = typeof flag == "boolean" ? flag : !state.value);

  return { state, toggle };
};

export default useToggle;

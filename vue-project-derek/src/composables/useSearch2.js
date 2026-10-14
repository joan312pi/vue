import { ref } from "vue";

export function useSearch(sourceList, field) {
  const keyword = ref("");
  let resultData = [];

  function getDataByKeyword() {
    const searchText = keyword.value.trim();
    if (searchText) {
      resultData = sourceList.filter((x) =>
        x[field].toUpperCase().includes(searchText.toUpperCase()),
      );
    } else {
      resultData = sourceList;
    }
    return resultData;
  }

  return { keyword, getDataByKeyword };
}

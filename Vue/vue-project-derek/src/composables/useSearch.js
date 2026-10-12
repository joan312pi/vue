import { ref, computed } from "vue";

const obj = { name: "Derek" };
// obj.name
obj["name"];

export function useSearch(sourceList, field) {
  const keyword = ref("");

  const result = computed(() => {
    // 搜尋邏輯
    if (keyword.value) {
      return sourceList.filter((e) =>
        e[field].toUpperCase().includes(keyword.value.toUpperCase()),
      );
    } else {
      return sourceList;
    }
  });
  

  return { keyword, result };
}

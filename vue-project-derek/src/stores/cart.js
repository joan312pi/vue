import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartList = ref([]);

  // 新增
  function add(product) {
    const existingCart = cartList.value.find((x) => x.id === product.id);
    if (existingCart) {
      existingCart.count++;
    } else {
      product.count = 1;
      cartList.value.push(product);
    }
  }

  // 移除
  function remove(id) {
    cartList.value = cartList.value.filter((x) => x.id !== id);
  }

  // 計算總價
  const totalPrice = computed(() =>
    cartList.value.reduce((sum, cart) => sum + cart.price * cart.count, 0),
  );

  function clear() {
    cartList.value = [];
  }

  return { cartList, add, remove, totalPrice, clear };
});

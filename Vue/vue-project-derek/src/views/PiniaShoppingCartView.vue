<script setup>
import ProductItem from '@/components/ProductItem.vue';
import foodData from '@/data/food.json';
import { computed, onBeforeUnmount, ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();

const { remove, add, clear } = cartStore;
const { totalPrice, cartList } = storeToRefs(cartStore);


const products = ref(foodData);

onBeforeUnmount(() => {

    if (totalPrice.value  > 1000) {
        clear();
    }

})


</script>

<template>
    <div class="page">
        <div class="layout">
            <!-- 左側：商品清單 -->
            <div class="products">
                <h1>🍔 Pinia商品清單</h1>
                <div class="item-div">
                    <ProductItem v-for="(product, index) in products" :key="product.id" :name="product.name"
                        :id="product.id" :price="product.price" @click="add($event)"></ProductItem>
                    <!-- <div v-for="(product, index) in products" :key="product.id">
                        <ProductItem :name="product.name" :price="product.price"></ProductItem>
                    </div> -->
                </div>
            </div>

            <!-- 右側：購物車 -->
            <div class="cart">
                <h2>🛒 購物車</h2>
                <p class="empty" v-if="cartList.length === 0">尚未加入商品</p>
                <ul>
                    <li class="cart-item" v-for="(cart, index) in cartList" :key="cart.id">
                        <span>{{ cart.name }}</span>
                        <span>$ {{ cart.price }} X {{ cart.count }}</span>
                        <button class="btn btn-danger" @click="remove(cart.id)">刪除</button>
                    </li>
                </ul>
                <p class="total">總計：${{ totalPrice }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 16px;
}

.layout {
    display: flex;
    gap: 24px;
    align-items: flex-start;
}

.products {
    flex: 1;
}

.item-div {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.cart {
    width: 360px;
    flex-shrink: 0;
    padding: 20px;
    border-radius: 12px;
    background: #f7f7f7;
    position: sticky;
    top: 16px;
}

.cart-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;
}

.empty {
    color: #999;
}

.total {
    text-align: right;
    font-size: 18px;
    font-weight: 600;
    margin-top: 16px;
}
</style>
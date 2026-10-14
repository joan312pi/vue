<script setup>

</script>

<template>
    <div class="page">
        <div class="layout">
            <!-- 左側：商品清單 -->
            <div class="products">
                <h1>🍔 商品清單</h1>
                <div class="item-div">
                    <div>

                    </div>
                </div>
            </div>

            <!-- 右側：購物車 -->
            <div class="cart">
                <h2>🛒 購物車</h2>
                <p class="empty">尚未加入商品</p>
                <ul>
                    <li class="cart-item">
                        <span>商品名稱</span>
                        <span>$100</span>
                        <button class="btn btn-danger">刪除</button>
                    </li>
                </ul>
                <p class="total">總計：$100</p>
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
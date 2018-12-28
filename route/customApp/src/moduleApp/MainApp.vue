<template>
    <div>
        模块主页面
        <ul>
            <li>
                <router-link to="/module-a/test">testapp</router-link>
            </li>
            <li>
                <router-link to="/module-a/action">actionapp</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'',
    data() {
        return {
            a: ''
        };
    }
};
</script>

<style scoped>
div {
    color: orange;
}
a {
    color: #8e8e8e;
    text-decoration: none;
}
a:hover {
    color: #e8e8e8;
}
</style>
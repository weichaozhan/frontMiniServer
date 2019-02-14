<template>
    <div>
        <h1>
            欢迎使用
        </h1>
        <ul>
            {{list | test}}
            <li v-for="(item, index) in list" :key="index" >
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'',
    data() {
        return {
            list: [11,2,1,4,454,85,487,21,245,4212,454,57484,1424124,54,7878,4,45,878,942],
        };
    },
    filters: {
        test(list) {
            return list.filter(item => item < 1000);
        }
    },
};
</script>

<style scoped>

</style>
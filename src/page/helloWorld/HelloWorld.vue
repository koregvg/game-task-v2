<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li>
                <a
                        href="https://vuejs.org"
                        target="_blank"
                >
                    Core Docs
                </a>
            </li>
            <li>
                <a
                        href="https://forum.vuejs.org"
                        target="_blank"
                >
                    Forum
                </a>
            </li>
            <li>
                <a
                        href="https://chat.vuejs.org"
                        target="_blank"
                >
                    Community Chat
                </a>
            </li>
            <li>
                <a
                        href="https://twitter.com/vuejs"
                        target="_blank"
                >
                    Twitter
                </a>
            </li>
            <br>
            <li>
                <a
                        href="http://vuejs-templates.github.io/webpack/"
                        target="_blank"
                >
                    Docs for This Template
                </a>
            </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li>
                <a
                        href="http://router.vuejs.org/"
                        target="_blank"
                >
                    vue-router
                </a>
            </li>
            <li>
                <a
                        href="http://vuex.vuejs.org/"
                        target="_blank"
                >
                    vuex
                </a>
            </li>
            <li>
                <a
                        href="http://vue-loader.vuejs.org/"
                        target="_blank"
                >
                    vue-loader
                </a>
            </li>
            <li>
                <a
                        href="https://github.com/vuejs/awesome-vue"
                        target="_blank"
                >
                    awesome-vue
                </a>
            </li>
            <div aspectratio w-188-246>
                <div aspectratio-content></div>
            </div>
            <div class="example haireline-bottom"></div>
        </ul>
        <div class="img"></div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created() {
            axios({
                method: "POST",
                url: '/notice/get/unreadcount?iswap=1'
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 100px;
        li {
            display: inline-block;
            margin: 0 10px;
            a {
                color: #670e08;
            }
        }
    }

    [aspectratio] {
        position: relative;
    }

    [aspectratio]::before {
        content: '';
        display: block;
        width: 1px;
        margin-left: -1px;
        height: 0;
    }

    [aspectratio-content] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }

    .img {
        width: 100px;
        height: 100px;
        background: url("./img/2-small-row.png");
    }

    [w-188-246] {
        width: 188px;
        background-color: red;
    }

    [w-188-246] {
        aspect-ratio: '188:246';
    }

</style>

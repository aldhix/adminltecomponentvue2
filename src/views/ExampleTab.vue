<template>
    <content-wrapper>
        <content-header>
            <h3>Example Tab</h3>
        </content-header>
        <content-body>
            <card class="card-primary card-tabs">
                <card-header class="p-0 pt-1">
                    <nav-tab>
                        <nav-item :to="{ name: 'example.tab' }" exact-path>
                            Home
                        </nav-item>
                        <nav-item
                            :to="{
                                name: 'example.tab',
                                params: { tabindex: 'profile' },
                            }"
                            exact-path
                        >
                            Profile
                        </nav-item>
                        <nav-item
                            :to="{
                                name: 'example.tab',
                                params: { tabindex: 'setting' },
                            }"
                            exact-path
                        >
                            Setting
                        </nav-item>
                    </nav-tab>
                </card-header>
                <card-body>
                    <div v-if="getParam() == 'profile'">
                        <h1>Profile</h1>
                        <p>
                            Etiam non justo in diam scelerisque tempor et et
                            nisi. Quisque porta, felis ut consectetur dictum,
                            mauris lacus lobortis arcu, eget commodo neque diam
                            sed lectus. Donec enim dui, scelerisque eget
                            dignissim id, fringilla at diam. Praesent ex sapien,
                            viverra quis tempor eget, maximus non ipsum. Nam
                            facilisis pellentesque pellentesque. Integer
                            porttitor, augue quis rutrum fermentum, augue ex
                            accumsan eros, sit amet dapibus erat nunc non est.
                            Vestibulum ut interdum quam. Nullam malesuada, purus
                            vitae malesuada blandit, augue erat varius risus,
                            sed efficitur enim lacus et magna.
                        </p>
                    </div>
                    <div v-else-if="getParam() == 'setting'">
                        <h1>Setting</h1>
                        <p>
                            Phasellus nec velit bibendum, pulvinar nunc eget,
                            interdum enim. Vivamus mollis lacus sit amet augue
                            scelerisque, ut sagittis lacus finibus. Sed
                            efficitur porttitor ipsum sit amet posuere. Sed sem
                            dolor, maximus quis magna nec, hendrerit sodales
                            nunc. Sed feugiat malesuada neque. Praesent interdum
                            odio in tortor venenatis, eu fermentum lacus
                            volutpat. Quisque vitae mi vel erat faucibus
                            pellentesque quis vel risus. Duis sollicitudin
                            congue vestibulum.
                        </p>
                    </div>
                    <div v-else>
                        <h1>Home</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis sed tempus lectus. Suspendisse lacinia
                            pretium leo ut malesuada. Aenean et venenatis ante,
                            vitae egestas ex. In a tortor eu sapien rhoncus
                            posuere at fringilla risus. Vestibulum ante ipsum
                            primis in faucibus orci luctus et ultrices posuere
                            cubilia curae; Fusce hendrerit magna elit, vel
                            lobortis sapien accumsan id. Aenean quis justo ac
                            justo sodales lacinia. Sed dictum venenatis tortor
                            vitae pretium. Integer hendrerit varius ligula
                            fermentum viverra. Integer sodales sagittis velit,
                            vitae auctor turpis aliquet sed. Aenean dignissim
                            nunc at dui malesuada euismod. Sed est urna, feugiat
                            in ipsum in, euismod pharetra velit.
                        </p>
                    </div>
                </card-body>
            </card>
        </content-body>
    </content-wrapper>
</template>
<script>
import Card from "../components/Card.vue";
import CardBody from "../components/CardBody.vue";
import CardHeader from "../components/CardHeader.vue";
import ContentBody from "../components/ContentBody.vue";
import ContentHeader from "../components/ContentHeader.vue";
import ContentWrapper from "../components/ContentWrapper.vue";
import NavItem from "../components/NavItem.vue";
import NavTab from "../components/NavTab.vue";
export default {
    name: "ExampleTab",
    components: {
        ContentWrapper,
        ContentHeader,
        ContentBody,
        Card,
        CardHeader,
        NavTab,
        NavItem,
        CardBody,
    },
    mounted() {
        this.getParam();
    },
    methods: {
        getParam() {
            var params = this.$route.params.tabindex;
            if (typeof params != "undefined") {
                return params;
            } else {
                return "home";
            }
        },
    },
};
</script>

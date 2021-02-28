<template>
    <content-wrapper>
        <content-header>
            <h3>Example Table</h3>
        </content-header>
        <content-body>
            <card>
                <card-header>
                    <h3 class="card-title">Example Table</h3>
                    <div class="card-tools">
                        <input-group class="input-group-sm">
                            <form-input />
                            <input-group-append>
                                <button type="button" class="btn btn-default">
                                    <i class="fas fa-search"></i>
                                </button>
                            </input-group-append>
                        </input-group>
                    </div>
                </card-header>
                <card-body class="p-0">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>PRODUK</th>
                                <th>STOCK</th>
                                <th>PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, index) in datas"
                                v-bind:key="index"
                            >
                                <td>{{ item.id }}</td>
                                <td>{{ item.product }}</td>
                                <td>{{ item.stock }}</td>
                                <td>
                                    Rp {{ item.price.toLocaleString("id") }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </card-body>
                <card-footer class="clearfix">
                    <ul class="pagination pagination-sm m-0 float-right">
                        <li class="page-item">
                            <a class="page-link" href="#">&laquo;</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">&raquo;</a>
                        </li>
                    </ul>
                </card-footer>
            </card>
        </content-body>
    </content-wrapper>
</template>
<script>
import Card from "../components/Card.vue";
import CardBody from "../components/CardBody.vue";
import CardFooter from "../components/CardFooter.vue";
import CardHeader from "../components/CardHeader.vue";
import ContentBody from "../components/ContentBody.vue";
import ContentHeader from "../components/ContentHeader.vue";
import ContentWrapper from "../components/ContentWrapper.vue";
import FormInput from "../components/FormInput.vue";
import InputGroup from "../components/InputGroup.vue";
import InputGroupAppend from "../components/InputGroupAppend.vue";
export default {
    name: "ExampleTable",
    components: {
        ContentWrapper,
        ContentHeader,
        ContentBody,
        Card,
        CardHeader,
        CardBody,
        InputGroup,
        FormInput,
        InputGroupAppend,
        CardFooter,
    },
    data() {
        return {
            datas: [
                {
                    id: 1,
                    product: "Beef - Cow Feet Split",
                    stock: 3,
                    price: 23004,
                },
                {
                    id: 2,
                    product: "Tray - 12in Rnd Blk",
                    stock: 8,
                    price: 22809,
                },
                {
                    id: 3,
                    product: "Sprouts - Alfalfa",
                    stock: 11,
                    price: 11829,
                },
                {
                    id: 4,
                    product: "Beef - Short Loin",
                    stock: 5,
                    price: 20972,
                },
                {
                    id: 5,
                    product: "Noodles - Steamed Chow Mein",
                    stock: 4,
                    price: 24003,
                },
                {
                    id: 6,
                    product: "Bread - Pita",
                    stock: 2,
                    price: 17007,
                },
                {
                    id: 7,
                    product: "Wine - Conde De Valdemar",
                    stock: 6,
                    price: 10675,
                },
                {
                    id: 8,
                    product: "Turkey Leg With Drum And Thigh",
                    stock: 9,
                    price: 23289,
                },
                {
                    id: 9,
                    product: "Cookies Almond Hazelnut",
                    stock: 14,
                    price: 21210,
                },
                {
                    id: 10,
                    product: "Thyme - Lemon, Fresh",
                    stock: 6,
                    price: 23622,
                },
                {
                    id: 11,
                    product: "Creamers - 10%",
                    stock: 12,
                    price: 21609,
                },
                {
                    id: 12,
                    product: "Cheese - Mascarpone",
                    stock: 14,
                    price: 14642,
                },
                {
                    id: 13,
                    product: "Browning Caramel Glace",
                    stock: 14,
                    price: 12028,
                },
                {
                    id: 14,
                    product: "Bagel - Plain",
                    stock: 8,
                    price: 16977,
                },
                {
                    id: 15,
                    product: "Yogurt - Blueberry, 175 Gr",
                    stock: 1,
                    price: 19585,
                },
                {
                    id: 16,
                    product: "Veal - Insides Provini",
                    stock: 1,
                    price: 13032,
                },
                {
                    id: 17,
                    product: "Watercress",
                    stock: 14,
                    price: 11348,
                },
                {
                    id: 18,
                    product: "Hersey Shakes",
                    stock: 15,
                    price: 12684,
                },
                {
                    id: 19,
                    product: "Soda Water - Club Soda, 355 Ml",
                    stock: 4,
                    price: 18034,
                },
                {
                    id: 20,
                    product: "Cabbage Roll",
                    stock: 3,
                    price: 19107,
                },
                {
                    id: 21,
                    product: "Ice Cream - Fudge Bars",
                    stock: 6,
                    price: 13456,
                },
                {
                    id: 22,
                    product: "Beer - Corona",
                    stock: 8,
                    price: 16702,
                },
                {
                    id: 23,
                    product: "Pepper - Yellow Bell",
                    stock: 2,
                    price: 18479,
                },
                {
                    id: 24,
                    product: "Nutmeg - Ground",
                    stock: 2,
                    price: 13639,
                },
                {
                    id: 25,
                    product: "Pork - Inside",
                    stock: 11,
                    price: 19849,
                },
                {
                    id: 26,
                    product: "Pasta - Detalini, White, Fresh",
                    stock: 15,
                    price: 17630,
                },
                {
                    id: 27,
                    product: "Beer - Moosehead",
                    stock: 13,
                    price: 24319,
                },
                {
                    id: 28,
                    product: "Red Currant Jelly",
                    stock: 11,
                    price: 19326,
                },
                {
                    id: 29,
                    product: "Danishes - Mini Raspberry",
                    stock: 1,
                    price: 20619,
                },
                {
                    id: 30,
                    product: "Tea - English Breakfast",
                    stock: 6,
                    price: 10071,
                },
                {
                    id: 31,
                    product: "Soup - Knorr, Chicken Noodle",
                    stock: 1,
                    price: 15382,
                },
                {
                    id: 32,
                    product: "Cheese - Brie Roitelet",
                    stock: 15,
                    price: 14571,
                },
                {
                    id: 33,
                    product: "Red Currant Jelly",
                    stock: 1,
                    price: 21864,
                },
                {
                    id: 34,
                    product: "Pepsi, 355 Ml",
                    stock: 8,
                    price: 21187,
                },
                {
                    id: 35,
                    product: "Beef Tenderloin Aaa",
                    stock: 4,
                    price: 21359,
                },
                {
                    id: 36,
                    product: "Silicone Parch. 16.3x24.3",
                    stock: 14,
                    price: 13590,
                },
                {
                    id: 37,
                    product: "Iced Tea Concentrate",
                    stock: 14,
                    price: 14272,
                },
                {
                    id: 38,
                    product: "Clam - Cherrystone",
                    stock: 7,
                    price: 18845,
                },
                {
                    id: 39,
                    product: "Jameson - Irish Whiskey",
                    stock: 12,
                    price: 10894,
                },
                {
                    id: 40,
                    product: "Beer - Creemore",
                    stock: 11,
                    price: 14417,
                },
                {
                    id: 41,
                    product: "Arrowroot",
                    stock: 11,
                    price: 16232,
                },
                {
                    id: 42,
                    product: "Raisin - Golden",
                    stock: 4,
                    price: 13114,
                },
                {
                    id: 43,
                    product: "Noodles - Steamed Chow Mein",
                    stock: 15,
                    price: 21420,
                },
                {
                    id: 44,
                    product: "Lamb - Whole, Fresh",
                    stock: 4,
                    price: 24564,
                },
                {
                    id: 45,
                    product: "Beer - Pilsner Urquell",
                    stock: 14,
                    price: 10317,
                },
                {
                    id: 46,
                    product: "Dehydrated Kelp Kombo",
                    stock: 7,
                    price: 11780,
                },
                {
                    id: 47,
                    product: "Puree - Mocha",
                    stock: 12,
                    price: 18534,
                },
                {
                    id: 48,
                    product: "Syrup - Golden, Lyles",
                    stock: 14,
                    price: 21854,
                },
                {
                    id: 49,
                    product: "Puree - Guava",
                    stock: 12,
                    price: 15121,
                },
                {
                    id: 50,
                    product: "Yams",
                    stock: 9,
                    price: 11964,
                },
            ],
        };
    },
};
</script>

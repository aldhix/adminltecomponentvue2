<template>
  <content-wrapper>
    <content-header>
      <h3>Example Table</h3>
    </content-header>
    <content-body>
      <card>
        <card-header>
          <div class="card-tools form-inline">
            <button
              type="button"
              class="btn btn-success btn-sm mr-2"
              @click="createItem"
            >
              [+] Create New
            </button>
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
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in datas" v-bind:key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.product }}</td>
                <td>{{ parseInt(item.stock) }}</td>
                <td>Rp {{ parseInt(item.price).toLocaleString("id") }}</td>
                <action-button-example-table
                  ref="action"
                  :index="index"
                  :item="item"
                  @edit="editItem"
                  @delete="deleteConfirm"
                />
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
    <modal id="modalDelete">
      <modal-dialog>
        <modal-content class="modal-sm">
          <modal-header>
            <h3 class="modal-title">Modal Delete</h3>
            <button class="close" type="button" data-dismiss="modal">
              x
            </button>
          </modal-header>
          <modal-body>
            Are you sure, want to delete ?
          </modal-body>
          <modal-footer>
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-danger" @click="deleteItem()">
              Yes, Delete
            </button>
          </modal-footer>
        </modal-content>
      </modal-dialog>
    </modal>
    <modal id="modalEdit">
      <modal-dialog>
        <modal-content class="modal-md">
          <modal-header>
            <h3 class="modal-title">Modal Edit</h3>
            <button class="close" type="button" data-dismiss="modal">
              x
            </button>
          </modal-header>
          <modal-body>
            <form-group>
              <label>Produk</label>
              <form-input v-model="data.product" />
            </form-group>
            <form-group>
              <label>Stock</label>
              <form-input v-model="data.stock" />
            </form-group>
            <form-group>
              <label>Price</label>
              <form-input v-model="data.price" />
            </form-group>
          </modal-body>
          <modal-footer>
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
          </modal-footer>
        </modal-content>
      </modal-dialog>
    </modal>
    <modal id="modalCreate">
      <modal-dialog>
        <modal-content class="modal-md">
          <modal-header>
            <h3 class="modal-title">Modal Create</h3>
            <button class="close" type="button" data-dismiss="modal">
              x
            </button>
          </modal-header>
          <modal-body>
            <form-group>
              <label>Produk</label>
              <form-input v-model="data.product" />
            </form-group>
            <form-group>
              <label>Stock</label>
              <form-input v-model="data.stock" />
            </form-group>
            <form-group>
              <label>Price</label>
              <form-input v-model="data.price" />
            </form-group>
          </modal-body>
          <modal-footer>
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="storeItem">
              Submit
            </button>
          </modal-footer>
        </modal-content>
      </modal-dialog>
    </modal>
  </content-wrapper>
</template>
<script>
import ActionButtonExampleTable from "../components/ActionButtonExampleTable.vue";
import Card from "../components/Card.vue";
import CardBody from "../components/CardBody.vue";
import CardFooter from "../components/CardFooter.vue";
import CardHeader from "../components/CardHeader.vue";
import ContentBody from "../components/ContentBody.vue";
import ContentHeader from "../components/ContentHeader.vue";
import ContentWrapper from "../components/ContentWrapper.vue";
import FormGroup from "../components/FormGroup.vue";
import FormInput from "../components/FormInput.vue";
import InputGroup from "../components/InputGroup.vue";
import InputGroupAppend from "../components/InputGroupAppend.vue";
import Modal from "../components/Modal.vue";
import ModalBody from "../components/ModalBody.vue";
import ModalContent from "../components/ModalContent.vue";
import ModalDialog from "../components/ModalDialog.vue";
import ModalFooter from "../components/ModalFooter.vue";
import ModalHeader from "../components/ModalHeader.vue";
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
    ActionButtonExampleTable,
    Modal,
    ModalDialog,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    FormGroup,
  },
  data() {
    return {
      indexActive: null,
      data: {},
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
      ],
    };
  },
  methods: {
    createItem() {
      var last_index = this.datas.length - 1;
      this.data = {
        id: this.datas[last_index].id + 1,
        product: "",
        stock: "",
        price: "",
      };
      $("#modalCreate").modal("toggle");
    },
    storeItem() {
      this.datas.push(this.data);
      $("#modalCreate").modal("toggle");
    },
    editItem(index) {
      this.indexActive = index;
      this.data = this.datas[index];
      $("#modalEdit").modal("toggle");
    },
    deleteConfirm(index) {
      this.indexActive = index;
      $("#modalDelete").modal("toggle");
    },
    deleteItem() {
      $("#modalDelete").modal("toggle");
      this.datas.splice(this.indexActive, 1);
    },
  },
};
</script>

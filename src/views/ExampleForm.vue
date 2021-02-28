<template>
    <content-wrapper>
        <content-header>
            <h3 class="contet-title">
                Example Form
            </h3>
        </content-header>
        <content-body>
            <grid-row>
                <grid-col class="col-6">
                    <card class="card-primary">
                        <card-header>
                            <h3 class="card-title">Example Form</h3>
                        </card-header>
                        <card-body>
                            <form-group>
                                <form-input
                                    v-model="fullName"
                                    :is-invalid="errors.has('full_name')"
                                />
                                <error-message v-if="errors.has('full_name')">
                                    {{ errors.message("full_name") }}
                                </error-message>
                            </form-group>

                            <form-group>
                                <form-select
                                    v-model="gender"
                                    :is-invalid="errors.has('gender')"
                                >
                                    <option
                                        v-for="(item, index) in genders"
                                        v-bind:key="index"
                                        :value="item.val"
                                    >
                                        {{ item.label }}
                                    </option>
                                </form-select>
                                <error-message v-if="errors.has('gender')">
                                    {{ errors.message("gender") }}
                                </error-message>
                            </form-group>
                            <form-group>
                                <input-group>
                                    <input-group-prepend>
                                        <span class="input-group-text">
                                            Email Address
                                        </span>
                                    </input-group-prepend>
                                    <form-input />
                                    <input-group-append>
                                        <span class="input-group-text">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                    </input-group-append>
                                </input-group>
                            </form-group>
                            <form-group>
                                <form-textarea
                                    v-model="address"
                                    :is-invalid="errors.has('address')"
                                />
                                <error-message v-if="errors.has('address')">
                                    {{ errors.message("address") }}
                                </error-message>
                            </form-group>
                        </card-body>

                        <card-footer>
                            <button
                                type="button"
                                class="btn btn-primary mr-2"
                                @click="onSubmit"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                class="btn btn-default mr-2"
                                @click="onReset()"
                            >
                                Reset
                            </button>
                            <button
                                type="button"
                                class="btn btn-warning text-light"
                                @click="showModal()"
                            >
                                Launch Modal
                            </button>
                        </card-footer>
                    </card>
                </grid-col>

                <grid-col class="col">
                    <card>
                        <card-body>
                            <p>Full Name : {{ fullName }}</p>
                            <p>Gender : {{ gender }}</p>
                            <p>Address : {{ address }}</p>
                        </card-body>
                    </card>
                </grid-col>
            </grid-row>
        </content-body>

        <modal id="modalExample">
            <modal-dialog>
                <modal-content class="modal-sm">
                    <modal-header>
                        <h3 class="modal-title">Modal Example</h3>
                        <button
                            class="close"
                            type="button"
                            @click="hideModal()"
                        >
                            x
                        </button>
                    </modal-header>
                    <modal-body>
                        ....................
                    </modal-body>
                    <modal-footer>
                        <button
                            type="button"
                            class="btn btn-default"
                            @click="hideModal()"
                        >
                            Close
                        </button>
                    </modal-footer>
                </modal-content>
            </modal-dialog>
        </modal>
    </content-wrapper>
</template>

<script>
import Card from "../components/Card.vue";
import CardBody from "../components/CardBody.vue";
import CardFooter from "../components/CardFooter.vue";
import CardHeader from "../components/CardHeader.vue";
import ContentBody from "../components/ContentBody.vue";
import ContentHeader from "../components/ContentHeader.vue";
import FormGroup from "../components/FormGroup.vue";
import FormInput from "../components/FormInput.vue";
import FormSelect from "../components/FormSelect.vue";
import FormTextarea from "../components/FormTextarea.vue";
import GridCol from "../components/GridCol.vue";
import GridRow from "../components/GridRow.vue";
import LaravelValidationErrors from "../assets/js/LaravelValidationErrors.js";
import ErrorMessage from "../components/ErrorMessage.vue";
import InputGroup from "../components/InputGroup.vue";
import InputGroupPrepend from "../components/InputGroupPrepend.vue";
import InputGroupAppend from "../components/InputGroupAppend.vue";
import Modal from "../components/Modal.vue";
import ModalContent from "../components/ModalContent.vue";
import ModalHeader from "../components/ModalHeader.vue";
import ModalBody from "../components/ModalBody.vue";
import ModalFooter from "../components/ModalFooter.vue";
import ModalDialog from "../components/ModalDialog.vue";
import ContentWrapper from "../components/ContentWrapper.vue";

export default {
    name: "ExampleForm",
    components: {
        ContentHeader,
        ContentBody,
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        GridRow,
        GridCol,
        FormInput,
        FormGroup,
        FormSelect,
        FormTextarea,
        ErrorMessage,
        InputGroup,
        InputGroupPrepend,
        InputGroupAppend,
        Modal,
        ModalContent,
        ModalHeader,
        ModalBody,
        ModalFooter,
        ModalDialog,
        ContentWrapper,
    },
    data() {
        return {
            fullName: "Dr. Rahmat Reylond",
            gender: "L",
            address: "Jl. Calofornia, Paris Van Java",
            errors: LaravelValidationErrors,
            genders: [
                { val: "", label: "Pilih :" },
                { val: "L", label: "Laki-laki" },
                { val: "P", label: "Perempuan" },
            ],
            dataErrors: {
                full_name: ["Fullname is required."],
                gender: ["Gender is required."],
                address: ["Address is required"],
            },
        };
    },
    methods: {
        onSubmit() {
            this.errors.dataErrors = this.dataErrors;
        },
        onReset() {
            this.errors.dataErrors = null;
        },
        showModal() {
            $("#modalExample").modal("show");
        },
        hideModal() {
            $("#modalExample").modal("hide");
        },
    },
};
</script>

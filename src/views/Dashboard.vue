<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <content-header>
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Dashboard</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div>
            </div>
        </content-header>

        <!-- Main content -->
        <content-body>
            <!-- Default box -->
            <col></col>
            <card>
                <card-header>
                    <h3 class="card-title">Title</h3>
                    <div class="card-tools">
                        <button
                            type="button"
                            class="btn btn-tool"
                            data-card-widget="collapse"
                            data-toggle="tooltip"
                            title="Collapse"
                        >
                            <i class="fas fa-minus"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-tool"
                            data-card-widget="remove"
                            data-toggle="tooltip"
                            title="Remove"
                        >
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </card-header>
                <card-body>
                    Start creating your amazing application!
                </card-body>

                <!-- /.card-body -->
                <card-footer>
                    Footer
                </card-footer>
                <!-- /.card-footer-->
            </card>
            <!-- /.card -->
        </content-body>
        <!-- /.content -->
    </div>
</template>
<script>
import ContentBody from "../components/ContentBody.vue";
import ContentHeader from "../components/ContentHeader.vue";
import Card from "@/components/Card.vue";
import CardHeader from "@/components/CardHeader.vue";
import CardBody from "../components/CardBody.vue";
import CardFooter from "../components/CardFooter.vue";
import FormInput from "../components/FormInput.vue";

export default {
    name: "Dashboard",
    components: {
        ContentHeader,
        ContentBody,
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        FormInput,
    },
};
</script>

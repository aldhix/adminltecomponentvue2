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
            <grid-row>
                <grid-col class="col-lg-3 col-6">
                    <small-box class="bg-info">
                        <small-box-content>
                            <h3>150</h3>
                            <p>New Orders</p>
                        </small-box-content>
                        <small-box-icon>
                            <i class="ion ion-bag"></i>
                        </small-box-icon>
                        <small-box-footer to="#">
                            More Info <i class="fas fa-arrow-circle-right"></i>
                        </small-box-footer>
                    </small-box>
                </grid-col>
                <grid-col class="col-lg-3 col-6">
                    <small-box class="bg-success">
                        <small-box-content>
                            <h3>53<sup style="font-size: 20px">%</sup></h3>
                            <p>Bounce Rate</p>
                        </small-box-content>
                        <small-box-icon>
                            <i class="ion ion-stats-bars"></i>
                        </small-box-icon>
                        <small-box-footer to="#">
                            More Info <i class="fas fa-arrow-circle-right"></i>
                        </small-box-footer>
                    </small-box>
                </grid-col>
                <grid-col class="col-lg-3 col-6">
                    <small-box class="bg-warning">
                        <small-box-content>
                            <h3>44</h3>
                            <p>User Registrations</p>
                        </small-box-content>
                        <small-box-icon>
                            <i class="ion ion-person-add"></i>
                        </small-box-icon>
                        <small-box-footer to="#">
                            More Info <i class="fas fa-arrow-circle-right"></i>
                        </small-box-footer>
                    </small-box>
                </grid-col>
                <grid-col class="col-lg-3 col-6">
                    <small-box class="bg-danger">
                        <small-box-content>
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                        </small-box-content>
                        <small-box-icon>
                            <i class="ion ion-pie-graph"></i>
                        </small-box-icon>
                        <small-box-footer to="#">
                            More Info <i class="fas fa-arrow-circle-right"></i>
                        </small-box-footer>
                    </small-box>
                </grid-col>
            </grid-row>
        </content-body>
        <!-- /.content -->
    </div>
</template>
<script>
import ContentBody from "../components/ContentBody.vue";
import ContentHeader from "../components/ContentHeader.vue";
import GridCol from "../components/GridCol.vue";
import GridRow from "../components/GridRow.vue";
import SmallBox from "../components/SmallBox.vue";
import SmallBoxContent from "../components/SmallBoxContent.vue";
import SmallBoxFooter from "../components/SmallBoxFooter.vue";
import SmallBoxIcon from "../components/SmallBoxIcon.vue";

export default {
    name: "Dashboard",
    components: {
        ContentHeader,
        ContentBody,
        GridRow,
        GridCol,
        SmallBox,
        SmallBoxContent,
        SmallBoxIcon,
        SmallBoxFooter,
    },
};
</script>

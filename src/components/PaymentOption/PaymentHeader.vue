<template>
  <!-- Page Head -->
  <div class="container-fluid page-head">
    <div class="row">
      <div class="col-md-12">
        <div class="page-title">طرق الدفع</div>
        <b-breadcrumb :items="items">></b-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentHeader",
  data() {
    return {
      items: [
        {
          text: "الإعدادات",
          href: "#settings"
        },
        {
          text: "طرق الدفع",
          active: true
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.page-head {
  direction: rtl;
  background-color: #29202f;
  padding: 25px 30px;
  .page-title {
    background-color: #29202f;
    color: #8d5da7;
    text-align: right;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .breadcrumb {
    padding: 0;
    font-size: 14px;
    background-color: #29202f;
    .breadcrumb-item {
      color: #7e7484;
      font-weight: 600;
      padding: 5px 5px;
      a {
        color: #45a787;
        transition: all 0.3s ease;
        text-decoration: none;
        background-color: transparent;
      }
      .active {
        color: #7e7484;
      }
    }
  }
}
</style>
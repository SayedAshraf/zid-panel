<template>
  <transition name="fade">
    <div class="model-container" v-if="show" @click.self="$emit('close')">
      <div class="model-content" :style="{ 'max-width': width + 'px' }">
        <!-- Model Header -->
        <div class="modal-header">
          <div class="modal-title-sm">أضف حساب بنكي</div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- Model Body -->
        <div class="modal-body">
            <form @submit.prevent="submit">
              <div class="form-row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">اسم البنك</label>
                    <div class="select-chosen-container select-chosen-container-sm" >
                      <select data-placeholder="Choose a Bank..." class="chosen-select" >
                        <option>البنك الأهلي التجاري</option>
                        <option>ساب</option>
                        <option>البنك السعودي الفرنسي</option>
                        <option>البنك الأول</option>
                        <option>البنك السعودي للاستثمار</option>
                        <option>البنك العربي الوطني</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="input1">رقم الحساب</label>
                    <input type="text" class="form-control form-control-sm" id="input1" placeholder="123456789XXXXXX" />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="input2">الأيبان</label>
                    <input type="text" class="form-control form-control-sm" id="input2" placeholder="SA03 8000 0000 6080 XXXX XXXX" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="input3">اسم المستفيد</label>
                    <input type="text" class="form-control form-control-sm" id="input3" placeholder="Name of the account owner" />
                  </div>
                </div>
              </div>
            </form>
        </div>
        <!-- Model Footer -->
        <div class="modal-footer">
            <button type="button" class="btn btn-accept btn-sm" @click="submit">حفظ</button>
            <button type="button" class="btn btn-grey btn-sm" @click="$emit('close')"> إغلاق </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "ve-Model",
  props: {
    show: {
      type: Boolean,
      default: false,
      required: false
    },
    width: {
      type: Number,
      default: 500,
      required: false
    }
  },
  methods: {
    submit() {

    },
  },
};
</script>
<style lang="scss" scoped>
.model-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  box-sizing: border-box;
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.5s;
  }
  &.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .model-content {
    width: 100%;
    margin: 20px auto;
    max-width: 500px;
    background-color: #fff;
    padding: 25px;
    border-radius: 25px;
    box-sizing: border-box;
    padding: 15px;
    border: 0;
    border-radius: 12px;
    box-shadow: none;
    background-color: #120f17;
    border: 1px solid #2c2735;
    .modal-header {
      position: relative;
      border: 0;
      -moz-flex-direction: column;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      .modal-icon {
        text-align: center;
        width: 100%;
        i {
          font-size: 40px;
        }
      }
      .modal-title {
        font-size: 26px;
        width: 100%;
        text-align: center;
        font-weight: 600;
        color: #FFF;
      }
      .modal-title-sm {
        font-size: 16px;
        font-weight: 600;
        color: #4d435c;
      }
      .close {
        position: absolute;
        top: 15px;
        left: 15px;
        color: #a5a5a5;
        text-shadow: none;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
    }
    .modal-body {
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        color: #908A98;
        label {
        font-size: 14px;
        }
        .nav-tabs-with-title {
        margin-bottom: 15px;
        }
        ul:not(.nav) li,ol:not(.nav) li {
        margin-bottom: 15px;
        font-weight: 600;
       }
       .chosen-container { 
          ul li{
            margin-bottom: 0;
          }
          ol li {
          margin-bottom: 0;
        }
      }
      .form-group {
        label {
          color: #FFF;
        }
        .select-chosen-container{
        border-color: #413847;
         background-color: #302a35;
        }
        .chosen-select{
          width: 100%;
        }
      }
      

    }
    .btn-holder {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    }

    .search-input-holder {
        margin-bottom: 15px;
    }

    .modal-footer {
        padding-top: 0;
        border: 0;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        .btn.btn-accept {
          background-color: #3EC498;
          color: #fff;
          font-size: 14px;
        }
        .btn.btn-grey {
          background-color: #4D435C;
          color: #fff;
       }
    }
  }
}
</style>

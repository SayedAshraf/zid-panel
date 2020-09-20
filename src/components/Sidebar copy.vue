<template>
  <div class="AppSidebar">
    <button class="btn-menu-close"><i class="zid zid-close"></i></button>
    <div class="sidebar-content">
      <!-- Sidebar Header -->
        <div class="sidebar-head">
            <div class="brand"><img src="images/no-logo.png" alt=""><div class="name">اسم المتجر</div></div>
            <a class="btn-view" href="#"><i class="zid zid-eye"></i>مشاهدة المتجر</a>
            <a class="btn-edit" href="#"><i class="zid zid-pen"></i>تخصيص الواجهة</a>
        </div>
        <!-- Sidbar Body -->
        <div class="sidebar-body">
            <ul class="main-menu">
                <li><router-link to=""><i class="zid zid-home"></i>الرئيسية</router-link></li>
                <li><router-link to=""><i class="zid zid-pie-chart"></i>التقارير</router-link></li>
                <li><a data-toggle="collapse" href="#menu-item1" class="collapsed"><i class="zid zid-basket"></i>الطلبات</a>
                    <div class="collapse" id="menu-item1">
                        <ul class="sub-menu">
                            <li><router-link to="">الطلبات</router-link></li>
                            <li><router-link to="">إنشاء طلب</router-link></li>
                            <li><router-link to="">المسودات</router-link></li>
                            <li><router-link to="">رسائل حالات الطلبات</router-link></li>
                        </ul>
                    </div>
                </li>
                <li><a data-toggle="collapse" href="#menu-item2" class="collapsed"><i class="zid zid-apps"></i>المنتجات</a>
                    <div class="collapse" id="menu-item2">
                        <ul class="sub-menu">
                            <li><router-link to="">جميع المنتجات</router-link></li>
                            <li><router-link to="">تصنيفات المنتجات</router-link></li>
                        </ul>
                    </div>
                </li>
                <li><a data-toggle="collapse" href="#menu-item3" class="collapsed"><i class="zid zid-dart-board"></i>التسويق</a>
                    <div class="collapse" id="menu-item3">
                        <ul class="sub-menu">
                            <li><router-link to="">قسائم التخفيض</router-link></li>
                            <li><router-link to="">الخصومات التلقائية</router-link></li>
                            <li><router-link to="">حملات الرسائل النصية</router-link></li>
                        </ul>
                    </div>
                </li>
                <li><router-link to=""><i class="zid zid-user"></i>العملاء</router-link></li>
                <li><a data-toggle="collapse" href="#menu-item4" class="collapsed"><i class="zid zid-viral"></i>منظومة زد</a>
                    <div class="collapse" id="menu-item4">
                        <ul class="sub-menu">
                            <li><router-link to="">الشحن والتوصيل</router-link></li>
                            <li><router-link to="/">الدفع</router-link></li>
                            <li><router-link to="">إدارة الطلبات والعمليات</router-link></li>
                            <li><router-link to="">التصوير</router-link></li>
                            <li><router-link to="">التصميم</router-link></li>
                            <li><router-link to="">التغليف</router-link></li>
                            <li><router-link to="">مساحات العمل المشتركة</router-link></li>
                            <li><router-link to="">خدمات أخرى</router-link></li>
                        </ul>
                    </div>
                </li>
                <li><router-link to="#"><i class="zid zid-users"></i>فريق العمل</router-link></li>
                <li><router-link to=""><i class="zid zid-cogwheel"></i>الإعدادات</router-link></li>
                <li><a data-toggle="collapse" href="#menu-item5" class="collapsed"><i class="zid zid-options"></i>خيارات الواجهة</a>
                    <div class="collapse" id="menu-item5">
                        <ul class="sub-menu">
                            <li><router-link to="">تخصيص</router-link></li>
                            <li><router-link to="">صفحات إضافية</router-link></li>
                        </ul>
                    </div>
                </li>
                <li><button id="btn-mode" class="btn-mode"><i class="zid zid-mode"></i>واجهة ليلية</button></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$SidebarWidth: 248px;

.AppSidebar {
  width: $SidebarWidth;
  position: fixed;
  height: 100%;
  top: 0;
  bottom: 0;
  right: -$SidebarWidth;
  background-color: #362340;
  color: #fff;
  transition: right 0.4s;
  z-index: 100;
  border-left: 1px solid transparent;
  z-index: 1000;
  overflow-y: scroll;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  .btn-menu-close {
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    top: 15px;
    left: 10px;
    background: none;
    border: 0;
    font-size: 9px;
    pointer-events: none;
    padding: 6px;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    &:hover,
    &:focus {
      color: #fff;
    }
  }
  .sidebar-head {
    padding: 22px;
    text-align: center;
    .brand {
      margin-bottom: 20px;
      .name {
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        padding-right :10px;
      }
      img {
        width: 52px;
        border-radius: 100px;
        margin-right: 15px;
        -webkit-box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
        box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
      }
    }
    .btn-view,
    .btn-edit {
      display: inline-block;
      width: 100%;
      border-radius: 7px;
      color: #fff;
      font-size: 13px;
      font-weight: bold;
      padding: 6px;
      text-decoration: none;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      i {
        font-size: 14px;
        vertical-align: middle;
        margin-top: -3px;
        margin-right: 10px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
    }
    .btn-view {
      background-color: #8d5da7;
      margin-bottom: 10px;
      i {
        color: #e3caf0;
      }
      &:hover,
      &:focus {
        background-color: #45a787;
        i {
          color: #fff;
        }
      }
    }
    .btn-edit {
      background-color: #27182f;
      i {
        color: #45a787;
        &:hover,
        &:focus {
          background-color: #452f52;
        }
      }
    }
  }
  .sidebar-body {
    padding-bottom: 80px;
    ul {
      &.main-menu {
        margin: 0;
        padding: 0;
        list-style: none;
        & > li {
          margin-bottom: 10px;
          text-align: right;
          & > a {
            position: relative;
            display: inline-block;
            width: 100%;
            color: #fff;
            background-color: #231629;
            text-decoration: none;
            font-size: 13px;
            font-weight: bold;
            padding: 18px 20px;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            & > i {
              font-size: 18px;
              vertical-align: middle;
              margin-top: -3px;
              margin-right: 15px;
            }
            &:hover {
              background-color: #45a787;
            }
            &:hover[data-toggle="collapse"]:before {
              color: #fff;
            }
          }
          & > a[data-toggle="collapse"]:before {
            position: absolute;
            content: "\77";
            font-family: "zid" !important;
            color: #8d5da7;
            font-size: 9px;
            left: 20px;
            top: 50%;
            margin-top: -7px;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            -webkit-transform: scaleY(1);
            -moz-transform: scaleY(1);
            -ms-transform: scaleY(1);
            transform: scaleY(1);
          }
          & > a[data-toggle="collapse"].collapsed {
            &:before {
              -webkit-transform: scaleY(-1);
              -moz-transform: scaleY(-1);
              -ms-transform: scaleY(-1);
              transform: scaleY(-1);
            }
          }
          & > button {
            display: inline-block;
            width: 100%;
            color: #fff;
            background-color: #231629;
            text-decoration: none;
            font-size: 13px;
            font-weight: bold;
            padding: 18px 20px;
            border: 0;
            text-align: left;
            outline: none;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            &.btn-mode {
              text-align-last: right;
              & > i {
                &.zid-mode {
                  position: relative;
                  display: inline-block;
                  width: 1.35rem;
                  height: 0.9rem;
                  border-radius: 1rem;
                  border: 0.1rem solid #fff;
                  line-height: 0;
                  vertical-align: middle;
                  margin-top: -3px;
                  margin-right: 15px;
                  &:before {
                    content: "";
                    position: absolute;
                    width: 0.4rem;
                    height: 0.4rem;
                    border-radius: 1rem;
                    background-color: #8d5da7;
                    top: 0.16rem;
                    left: 0.6rem;
                    -webkit-transition: all 0.3s ease;
                    transition: all 0.3s ease;
                  }
                }
              }
              &.on {
                & > i {
                  &.zid-mode {
                    &:before {
                      left: 0.1rem;
                    }
                  }
                }
              }
            }
          }
          ul {
            &.sub-menu {
              margin: 0;
              padding: 0;
              list-style: none;
              padding-top: 10px;
              padding-bottom: 10px;
              & > li {
                & > a {
                  display: inline-block;
                  width: 100%;
                  color: #c5bacb;
                  font-size: 13px;
                  padding: 6px 30px;
                  text-decoration: none;
                  -webkit-transition: all 0.3s ease;
                  transition: all 0.3s ease;
                }
              }
            }
          }
        }
      }
    }
  }
  .zid{
    padding: 0 10px;
  }
  .showNav & {
    right: 0;
  }
}

@media (max-width: 768px) {
  .AppSidebar {
    max-width: 200px;
  }
}
</style>

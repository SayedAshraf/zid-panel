<template>
  <div id="status-bar" class="container-fluid">
    <div class="row">
      <div class="col-3 col-md-5 col-lg-5 col-sm-3">
        <div class="time-holder">
          <button v-b-toggle.sidebar-right type="button" @click="ToggleNav" class="btn-menu-toggle">
            <div class="toggle-icon">
              <div class="icon-shape"></div>
            </div>
          </button>
          <div class="time">
            <i class="zid zid-clock"></i>
            {{ time }}
          </div>
        </div>
      </div>
      <div class="col-9 col-md-7 col-lg-7 col-sm-9">
        <div class="search-holder">
          <form>
            <input type="text" placeholder="إبحث هنا..." />
            <button type="submit">
              <i class="zid zid-find"></i>
            </button>
          </form>
          <a class="btn-logout" href="#">
            <span class="text">تسجيل خروج</span>
            <i class="zid zid-exit"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      time: "الساعة ٨:٣٨ صباحا بتوقيت الرياض",
      active: ""
    };
  },
  computed: {
    NavVisibilityFun() {
      return this.$store.state.navVisibility;
    }
  },
  methods: {
    ToggleNav() {
      this.$store.commit("UpdateNavVisibility", !this.NavVisibilityFun);
    }
  }
};
</script>

<style lang="scss" scoped>
#status-bar {
  background-color: #302539;
  padding-top: 15px;
  padding-bottom: 15px;
  .btn-menu-toggle {
    margin-right: inherit;
    margin-left: 10px;
    line-height: 0;
    vertical-align: middle;
    border: 0;
    background: none;
    margin-right: 10px;
    padding: 7px;
    outline: none;
    text-transform: none;
    overflow: visible;
    .toggle-icon {
      display: inline-block;
      width: 18px;
      height: 18px;
      outline-color: #8d5da7 !important;
      direction: rtl;
      .icon-shape {
        position: relative;
        width: 80%;
        height: 2px;
        top: 0;
        background-color: #8d5ba7;
        border-radius: 2px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
    }
  }
  .time-holder {
    text-align: right;
    width: 100%;
    .time {
      display: inline-block;
      color: #fff;
      font-size: 13px;
      font-weight: 600;
      i {
        color: #fff;
        font-size: 17px;
        vertical-align: middle;
        margin-top: -3px;
        margin-right: inherit;
        margin-left: 10px;
      }
    }
  }
  .search-holder {
    width: 100%;
    text-align: left;
    form {
      position: relative;
      display: inline-block;
      width: 100%;
      max-width: 321px;
      button {
        position: absolute;
        border: 0;
        background: none;
        // right: 15px;
        top: 50%;
        margin-top: -8px;
        padding: 0;
        line-height: 0;
        color: #8393a0;
        right: inherit;
        left: 15px;
        i {
          font-size: 16px;
        }
      }
    }
    .btn-logout {
      color: #626262;
      font-size: 13px;
      font-weight: 600;
      margin-left: 21px;
      text-decoration: none;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      margin-left: inherit;
      margin-right: 21px;
      &:hover,
      &:focus {
        color: #353535;
      }
      i {
        color: #fff;
        font-size: 17px;
        vertical-align: middle;
        margin-top: -3px;
        margin-right: 7px;
        margin-left: inherit;
        -webkit-transform: scaleX(1);
        -moz-transform: scaleX(1);
        -ms-transform: scaleX(1);
        transform: scaleX(1);
      }
      .text {
        color: #fff;
      }
    }
  }
}

#status-bar > .row > div[class^="col-"] {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}

#status-bar .search-holder form ::-webkit-input-placeholder {
  color: #87789e !important;
}

#status-bar .search-holder form :-moz-placeholder {
  color: #87789e !important;
}

#status-bar .search-holder form ::-moz-placeholder {
  color: #87789e !important;
}

#status-bar .search-holder form :-ms-input-placeholder {
  color: #87789e !important;
}

#status-bar .search-holder form input[type="text"] {
  background-color: #4d435c;
  color: #d4cce0;
  border: 0;
  border-radius: 50px;
  font-size: 13px;
  color: #697a8f;
  outline: none;
  width: 100%;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    background-color: #e3e4e6;
  }
  padding: 7px 18px;
  padding-left: 40px;
}

@media (max-width: 1200px) {
  #status-bar .search-holder form {
    max-width: 255px;
  }
}
@media (max-width: 768px) {
  #status-bar {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #8d5da7;
    .time-holder {
      .time {
        display: none;
        color: #fff;
      }
    }
    .search-holder {
      .btn-logout {
        .text {
          display: none;
        }
      }
    }
  }
}
</style>

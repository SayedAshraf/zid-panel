<template>
  <div id="status-bar" class="container-fluid">
    <div class="row">
      <div class="col-3 col-md-5 col-lg-5">
        <div class="time-holder">
          <button v-b-toggle.sidebar-right type="button" @click="ToggleNav" class="btn-menu-toggle">
            <div class="toggle-icon">
              <div class="icon-shape"></div>
            </div>
          </button>
          <div class="time">
            <i class="zid zid-clock"></i>
            {{time}}
          </div>
        </div>
      </div>
      <div class="col-9 col-md-7 col-lg-7">
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

#status-bar .time-holder {
  text-align: left;
  width: 100%;
}

#status-bar .time-holder .time {
  display: inline-block;
  color: #45a787;
  font-size: 13px;
  font-weight: 600;
}

#status-bar .time-holder .time i {
  color: #45a787;
  font-size: 17px;
  vertical-align: middle;
  margin-top: -3px;
  margin-right: 10px;
}

#status-bar .search-holder {
  text-align: right;
  width: 100%;
}

#status-bar .search-holder form {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 321px;
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
  background-color: #f0f1f2;
  border: 0;
  border-radius: 50px;
  font-size: 13px;
  color: #697a8f;
  outline: none;
  padding: 7px 18px;
  padding-right: 40px;
  width: 100%;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#status-bar .search-holder form input[type="text"]:hover,
#status-bar .search-holder form input[type="text"]:focus {
  background-color: #e3e4e6;
}

#status-bar .search-holder form button {
  position: absolute;
  border: 0;
  background: none;
  right: 15px;
  top: 50%;
  margin-top: -8px;
  padding: 0;
  line-height: 0;
  color: #8393a0;
}

#status-bar .search-holder form button i {
  font-size: 16px;
}

#status-bar .search-holder .btn-logout {
  color: #626262;
  font-size: 13px;
  font-weight: 600;
  margin-left: 21px;
  text-decoration: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#status-bar .search-holder .btn-logout i {
  color: #626262;
  font-size: 17px;
  vertical-align: middle;
  margin-top: -3px;
  margin-left: 7px;
  -webkit-transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -ms-transform: scaleX(-1);
  transform: scaleX(-1);
}

#status-bar .search-holder .btn-logout:hover,
#status-bar .search-holder .btn-logout:focus {
  color: #353535;
}

#status-bar .time-holder {
  text-align: right;
}

#status-bar .time-holder .time i {
  margin-right: inherit;
  margin-left: 10px;
}

#status-bar .search-holder {
  text-align: left;
}

#status-bar .search-holder form input[type="text"] {
  padding: 7px 18px;
  padding-left: 40px;
}

#status-bar .search-holder form button {
  right: inherit;
  left: 15px;
}

#status-bar .search-holder .btn-logout {
  margin-left: inherit;
  margin-right: 21px;
}

#status-bar .search-holder .btn-logout i {
  margin-left: inherit;
  margin-right: 7px;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
}
</style>

<template>
  <div id="footer" class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="copyright">
          Copyright
          <b>Zid App</b> © 2016-2020
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
#footer {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  background-color: #1d1920;
}

#footer .copyright {
  font-size: 13px;
  color: #8396ad;
}
</style>

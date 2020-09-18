<template>
  <div class="AppSidebar">
    <ul>
      <li>
        <a href="#">HOme</a>
      </li>
      <li>
        <a href="#">Payment</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
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
  top: 0;
  bottom: 0;
  right: -$SidebarWidth;
  background-color: #1d1920;
  color: #fff;
  transition: right 0.4s;
  .showNav & {
    right: 0;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      font-size: 17px;
      &:hover {
        background-color: #000;
      }
      a {
        display: block;
        padding: 15px 20px;
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
@media (max-width: 768px) {
  .AppSidebar {
    max-width: 200px;
  }
}
</style>
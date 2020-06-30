<template>
  <header class="main-header header-style-three">
    <!--fixed-header-->
    <div class="large-letter">PRODUTOS</div>
    <div class="header-upper">
      <div class="outer-container">
        <div class="clearfix">
          <!--Logo Box-->
          <div class="pull-left logo-box">
            <div class="logo">
              <a href="">
                <!-- <img src="/static/img/logo.png" alt="Limerick" title="Limerick"/> -->
                brechó<span class="first">da</span>bella
              </a>
            </div>
          </div>
          <div class="nav-outer clearfix">
            <!-- <c-menu></c-menu> -->
            <!-- <div class="outer-box clearfix">
              <div class="social-nav">
                <a href="https://www.facebook.com/"
                  ><span class="fa fa-facebook"></span
                ></a>
                <a href="https://www.twitter.com/"
                  ><span class="fa fa-instagram"></span
                ></a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CMenu from "./Menu";

export default {
  components: {
    CMenu
  },
  props: {},
  methods: {
    bindHeader() {
      let main = document.getElementsByClassName("main-header");
      if (main.length) {
        main = main[0];
        const scrollTop = document.getElementsByClassName("scroll-to-top")[0];
        window.addEventListener(
          "scroll",
          () => {
            if (document.documentElement.scrollTop > 120) {
              main.classList.add("fixed-header");
              scrollTop.style.display = "block";
            } else {
              main.classList.remove("fixed-header");
              scrollTop.style.display = "none";
            }
          },
          false
        );
        //
      }
    }
  },
  mounted() {
    this.bindHeader();
  }
};
</script>

<style scoped>
  .logo a{
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-weight: 600;
    font-size: 1.4em;
  }
  .logo a span.first{
    background-color: #FF3271;
    color: white;
    padding: 10px 7px 10px 10px;
    margin: 0 5px 0 0;
  }
</style>

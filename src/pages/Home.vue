<template>
  <div>
    <div class="preloader" v-if="preloader" style="display: block;"></div>
    <modal name="hello-world" :height="150">
      <div style="padding: 20px">
        Caso você goste alguma peça, copia o código da referencia, que fica logo abaixo do título,
        e nos envio um WhatsApp para <strong>(21) 98440-7699</strong> ou <strong>(21) 98169-2318</strong>.
        <br><br>
        <p style="text-align: center">Infelizmente, no momento, as peça são únicas, então corra!! <strong>:)</strong></p>
      </div>
    </modal>
    <div class="kc_clfw"></div>
    <section class="kc-elm kc-css-408608 kc_row">
      <div class="kc-row-container">
        <div class="kc-wrap-columns">
          <div class="kc-elm kc-css-316878 kc_col-sm-12 kc_column kc_col-sm-12">
            <div class="kc-col-container">
              <!--Banner Section-->
              <section class="banner-section">
                <div class="pattern-one paroller"></div>
                <div class="pattern-two paroller"></div>
                <div class="auto-container">
                  <div class="inner-section">
                    <div class="title style-two">
                      <span>Seja bem vindo!</span><i class="paroller"></i>
                    </div>
                    <h2 class="style-two">
                      <strong>Nossos produtos</strong>
                      <i class="paroller"></i>
                    </h2>
                    <div class="text">
                      Temos itens usados e semi novos... todos em perfeito estado de uso. 
                      <button class="btn btn-info" style="margin-top:20px" @click="show">Veja como funciona</button>                     
                    </div>
                  </div>
                </div>
              </section>
              <!--End Banner Section-->

              <section class="gallery-section-two">
                <div class="outer-container">                
                  <div class="row clearfix">                
                    <div v-for="prod in products" :key="`prod-` + prod.id" class="gallery-block-three col-xl-2 col-lg-3 col-md-4 com-sm-12">
                      <div class="inner-box wow fadeInUp animated" style="visibility: visible; animation-delay: 400ms; animation-name: fadeInUp;">
                        <div class="image">
                          <a :href="prod.image" target="_blank">
                            <div class="corner-text-wrapper">
                              <div class="corner-text" :class="{free : !prod.price}">
                                <span>{{ prod.price ? 'R$ ' + prod.price : 'GRÁTIS'}}</span>
                              </div>
                            </div>
                            <img width="200" height="200" :src="prod.image" class="wp-post-image" alt="" sizes="(max-width: 200px) 100vw, 200px"
                            />
                          </a>
                        </div>
                        <div class="lower-box">
                          <h3>
                            <a href="#" >{{prod.name}}</a>
                          </h3>
                          <div class="category">
                            {{prod.type}} - Ref:. {{padLeft(prod.id, 4)}}
                            <br>
                            Bloco 7 Apart 203
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      preloader: false,
      products: []
    };
  },
  methods: {
    async getProducts() {
      this.preloader = true;
      await window.axios
        .get(process.env.URL_API_BACKEND + "sales/home")
        .then(result => {
          this.preloader = false;
          this.products = result.data;
        })
        .catch(error => {
          console.log(error);
          this.preloader = false;
        });
    },
    padLeft(nr, n, str){
      return Array(n-String(nr).length+1).join(str||'0')+nr;
    },
    show() {
    this.$modal.show('hello-world');
    },
    hide() {
      this.$modal.hide('hello-world');
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style scoped>
.paroller {
  transform: unset;
  transition: transform 0s linear 0s;
  will-change: transform;
}
.corner-text-wrapper {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  clip: rect(0px, 141.421px, 70.7107px, 0px);
  height: 70px;
  position: absolute;
  right: -45.7107px;
  top: -20.7107px;
  width: 141.421px;
  z-index: 1;
}
.corner-text {
  color: white;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: 20px;
  top: 20px;
  background-color: #FF3271;
  display: block;
  height: 100px;
  position: absolute;
  width: 100px;
  z-index: 2;
}
.free{background-color: #ff6633 !important;}
.corner-text span {
  position: relative;
  font-weight: 700;
  top: 30px;
  left: 20px;
  display: block;
  text-align: center;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  clip: rect(0px, 141.421px, 70.7107px, 0px);
}
</style>

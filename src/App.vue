<template>
	<div id="app">			
  		<c-header></c-header>
  		<router-view/>
  		<div class="scroll-to-top scroll-to-target" @click="scrollTop" data-target="html" style="display: none;"><span class="icon fa fa-angle-double-up"></span></div>
  	</div>
</template>

<script>
import CHeader from '@/components/Header';

export default {
    components: {
        CHeader,
    },
	methods:{
		scrollTop(){
			window.scrollTo({top: 0, behavior: "smooth"});
		}
	},
    name: 'App',
};
</script>

<style>

</style>

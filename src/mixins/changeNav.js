// import bus from "../bus";

// export default {
//   created() {
//     bus.$emit("changeShow",false);
//   },
//   destroyed() {
//     bus.$emit("changeShow",true);
//   },
// };

// export default {
//     beforeRouteEnter(to,from,next) {
//       next((vm)=>{
//             vm.$store.commit("changeFlag",false);
//       });
//     },
//     destroyed() {
//         this.$store.commit("changeFlag",true);
//     },
// };

import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeFlag"]),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // vm.$store.commit("changeFlag",false);
      vm.changeFlag(false);
    });
  },
  destroyed() {
    // this.$store.commit("changeFlag",true);
    this.changeFlag(true);
  },
};

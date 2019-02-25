
import CheckboxMarked from "vue-material-design-icons/CheckboxMarked";
import CheckboxBlank from "vue-material-design-icons/CheckboxBlankOutline";

const MdIcons = {

  checkbox_on: {
    component: CheckboxMarked,
    props: {
      title: ''
    }
  },

  checkbox_off: {
    component: CheckboxBlank,
    props: {
      title: ''
    }
  },


};

export {MdIcons};

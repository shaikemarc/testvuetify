
import CheckboxMarked from "vue-material-design-icons/CheckboxMarked";
import CheckboxBlank from "vue-material-design-icons/CheckboxBlankOutline";

import RadioboxBlank from "vue-material-design-icons/RadioboxBlank";
import RadioboxMarked from "vue-material-design-icons/RadioboxMarked";

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

  radio_on: {
    component: RadioboxMarked,
    props: {
      title: ''
    }
  },

  radio_off: {
    component: RadioboxBlank,
    props: {
      title: ''
    }
  },

};

export {MdIcons};

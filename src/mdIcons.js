import MenuDown from "vue-material-design-icons/MenuDown"
import Close from "vue-material-design-icons/Close"
import ExitToApp from "vue-material-design-icons/ExitToApp";
import Home from "vue-material-design-icons/Home";
import Apps from "vue-material-design-icons/Apps";
import Check from "vue-material-design-icons/Check";

import ArrowLeft from "vue-material-design-icons/ArrowLeft";
import ArrowUp from "vue-material-design-icons/ArrowUp";
import ArrowDown from "vue-material-design-icons/ArrowDown";

import ChevronLeft from "vue-material-design-icons/ChevronLeft";
import ChevronRight from "vue-material-design-icons/ChevronRight";
import ChevronDown from "vue-material-design-icons/ChevronDown";
import ChevronUp from "vue-material-design-icons/ChevronUp";
import Plus from "vue-material-design-icons/Plus";
import CLoseCircle from "vue-material-design-icons/CloseCircle";
import Exclamation from "vue-material-design-icons/Exclamation";
import HelpCircleOutline from "vue-material-design-icons/HelpCircleOutline";
import BlockHelper from "vue-material-design-icons/BlockHelper";

const MdIcons = {

  block: {
    component: BlockHelper,
    props: {
      title: ''
    }
  },

  help_outline: {
    component: HelpCircleOutline,
    props: {
      title: ''
    }
  },

  add: {
    component: Plus,
    props: {
      title: ''
    }
  },

  delete: {
    component: CLoseCircle,
    props: {
      title: ''
    }
  },

  warning: {
    component: Exclamation,
    props: {
      title: ''
    }
  },

  apps: {
    component: Apps,
    props: {
      title: ''
    }
  },
  check: {
    component: Check,
    props: {
      title: ''
    }
  },
  dropdown: {
    component: MenuDown
  },

  // TODO, this cause issues at v-autocomplete :clearable
  clear: {
    component: Close
  },

  exit_to_app: {
    component: ExitToApp,
    props: {
      title: ''
    }
  },
  home: {
    component: Home,
    props: {
      title: ''
    }
  },

  arrow_back: {
    component: ArrowLeft,
    props: {
      title: ''
    }
  },
  arrow_upward: {
    component: ArrowUp,
    props: {
      title: ''
    }
  },
  arrow_downward: {
    component: ArrowDown,
    props: {
      title: ''
    }
  },
  expand: {
    component: ChevronDown,
    props: {
      title: ''
    }
  },

  shrink: {
    component: ChevronUp,
    props: {
      title: ''
    }
  },

  prev: {
    component: ChevronLeft,
    props: {
      title: ''
    }
  },
  next: {
    component: ChevronRight,
    props: {
      title: ''
    }
  },
};

export {MdIcons};

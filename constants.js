export let currentId = 0;

export const CAROUSEL_CONTENT = {
  0: {
    id: 0,
    position: 0,
    title: "WE ARE BREAKING OUR VOW OF SILENCE",
    subtitle:
      "In january 2011, after a decade of digital, we opened the doors to our temple. follow our noble eightfold path to digital enlightment here.",
    style: {
      title: {
        left: "0%",
        top: "0",
        "text-align": "left",
        animation: "fadeIn 5s",
      },
      subtitle: {
        color: "var(--light)",
        position: "absolute",
        width: "28%",
        marginLeft: "20px",
        fontSize: "12px",
        bottom: "10vh",
      },
    },
  },
  1: {
    id: 1,
    position: "12%",
    title: "TALENT IS GIVEN TRUE SKILL IS EARNED",
    description: "step 1 out of 10 on the path of digital enlightment.",
    style: {
      title: {
        top: "calc(50vh -  100px)",
        left: "5%",
        "text-align": "left",
        animation: "fadeIn 5s",
      },
    },
  },
  2: {
    id: 2,
    position: "24%",
    title: "BE FLEXIBLE TO CHANGE AND STURDY IN CONVICTION",
    description: "step 2 out of 10 on the path of digital enlightment.",
    style: {
      title: {
        top: "calc(50vh - 100px)",
        left: "5%",
        "text-align": "left",
        animation: "fadeIn 5s",
      },
    },
  },
  3: {
    id: 3,
    position: "36%",
    title: "USE MANY SKILLS YET WORK AS A ONE",
    description: "step 3 out of 10 on the path of digital enlightment.",
    style: {
      title: {
        top: "calc(50vh -  90px)",
        left: "calc(100vw - 33%)",
        "text-align": "right",
      },
    },
  },
  4: {
    id: 4,
    position: "48%",
    title: "TO MASTER ANYTHING FIND INTEREST IN EVERYTHING",
    description: "step 4 out of 10 on the path of digital enlightment.",
    style: {
      title: {
        top: "calc(50vh -  90px)",
        left: "calc(100vw - 33%)",
        "text-align": "right",
      },
    },
  },
  5: {
    id: 5,
    position: "60%",
    title: "INDIVIDUAL FLORISH IF CULTURE AND WISDOM ARE SHARED",
    description: "step 5 out of 10 on the path of digital enlightment.",
    style: {
      title: {
        top: "calc(50vh -  90px)",
        left: "calc(100vw - 33%)",
        "text-align": "right",
      },
    },
  },
  6: {
    id: 6,
    position: "72%",
    title: "TRAIN FOR PERFECTION BUT AIM FOR MORE",
    description: "step 6 out of 10 on the path of digital enlightment.",
    style: {
      title: {
        top: "calc(50vh - 100px)",
        left: "5%",
        "text-align": "left",
      },
    },
  },
  7: {
    id: 7,
    position: "84%",
    title: "TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE",
    description: "step 7 out of 10 on the path of digital enlightment.",
    style: {
      title: {
        top: "calc(50vh - 100px)",
        left: "5%",
        "text-align": "left",
      },
    },
  },
  8: {
    id: 8,
    position: "96%",
    title: "TEMPORARY SACRIFICE BRINGS LASTING RESULT",
    description: "step 8 out of 10 on the path of digital enlightment.",
    style: {
      title: {
        top: "calc(50vh - 100px)",
        left: "5%",
        "text-align": "left",
      },
    },
  },
  9: { id: 9, position: "115%", title: "", description: "" },
};

export const totalPaginationEle = [...Array(10).keys()];

export const hideLoadingContainerTimeout = 3000;

export const classes = {
  BLACK_BG: "black-bg",
  ACTIVE: "active",
  CONTAINER: "container",
  CONTENT: "content",
  BACKGROUND_IMAGE: "bg-image",
  PAGINATION_DECRIPTION: "pagination-description",
  HIGHLIGHT: "subtitle",
  LEFT_ARROW: "left-arrow",
};

export const HTML_TEXT = {
  lastSlideHeading: "BECOME A MONK",
  lastSlideSubtitle: "Interested in joinging our monarchy?",
  lastSlideDescriptiveLink:
    'Check out our current opening on <a style="color: white" href="https://media.monks.com/careers">mediamonks.com/careers.</a>',
  socialMail: '<i class="fa fa-envelope-o"></i> Mail ons',
  socialFacebook: '<i class="fa fa-facebook-f"></i> Facebook',
  socialTwitter: '<i class="fa fa-twitter"></i> Twitter',
};

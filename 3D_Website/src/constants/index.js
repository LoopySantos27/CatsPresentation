import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Home", "Videos", "Model", "Characteristics",'Photo!'];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "On Valentine's Day",
        "Pusheens wished for chocolate",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["He asked so much.", "And people were always nice."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "On that evening he met a special cat",
        "That saved him and his chocolate ",
      ],
      video: highlightThirdVideo,
      videoDuration: 5,
    },
    {
      id: 4,
      textLists: ["Since that day", "The chocolates will always taste special..."],
      video: highlightFourthVideo,
      videoDuration: 7,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "Natural Cat",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "Blue Cat",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "White Cat",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "Black Cat",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: 'Small', value: "small" },
    { label: 'Large', value: "large" },
  ];
  
  export const externalLinks =[
    
      'https://www.youtube.com/@PusheenTheCat ','https://www.youtube.com/watch?v=CUapPhdM7nc&t=64s&ab_channel=JesstheDragoon',
   

  ]

  

  export const footerLinks =[
    {
      id:1,
      text:'Github',
      link:'https://github.com/LoopySantos27',
    },
    {
      id:2,
      text: 'Linkedin',
      link: 'https://www.linkedin.com/in/gerardo-daniel-santos-cuevas-16382a1b8'
    }

  ]
let welcomePlxData = [
  {
    start: 0,
    end: 800,
    easing: "ease",
    properties: [
      {
        startValue: 0,
        endValue: -100,
        property: "translateY"
      },
      {
        startValue: 1,
        endValue: 0.6,
        property: "opacity"
      }
    ]
  }
];

let contactPlxData = [
  {
    start: "#contact",
    duration: "100vh",
    properties: [
      {
        startValue: 0,
        endValue: -50,
        unit: "vh",
        property: "translateY"
      }
    ]
  },
  {
    start: "#contact",
    startOffset: "200vh",
    duration: "30vh",
    properties: [
      {
        startValue: -100,
        endValue: -200,
        unit: "vh",
        property: "translateY"
      }
    ]
  }
];

export { welcomePlxData, contactPlxData };

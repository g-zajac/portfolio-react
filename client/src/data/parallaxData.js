const welcomePlxData = [
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
        endValue: 0.4,
        property: "opacity"
      }
    ]
  }
];

let contactPlxData = [
  {
    start: "#contact",
    // startOffset: "100vh",
    duration: "20vh",
    properties: [
      {
        startValue: 0,
        endValue: -70,
        unit: "vh",
        property: "translateY"
      }
    ]
  }
  // {
  //   start: "#contact",
  //   // startOffset: "200vh",
  //   duration: "30vh",
  //   properties: [
  //     {
  //       startValue: -50,
  //       endValue: -100,
  //       unit: "vh",
  //       property: "translateY"
  //     }
  //   ]
  // }
];

export { welcomePlxData, contactPlxData };

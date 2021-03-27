//

var nonLinearStepSlider = document.getElementById('slider-non-linear-step');

noUiSlider.create(nonLinearStepSlider, {
  start: [5000, 10000],
  step: 10,
  connect: true,
  range: {
    'min': 0,
    'max': 16000
  },
  format: wNumb({
    thousand: ' '
  })
});

var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

nonLinearStepSlider.noUiSlider.on('update', function (values) {
  nonLinearStepSliderValueElement.innerHTML = values.join('₽ - ') + `₽`;
});
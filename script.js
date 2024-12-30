const selectBrand = document.getElementById('brand');
const selectModel = document.getElementById('model');

const auto = {
  audi: ['A1', 'A3', 'A4'],
  bmw: ['serie 1', 'serie 3', 'serie 5'],
  ford: ['fiesta', 'focus', 'mondeo'],
};

const brands = Array.from(Object.keys(auto));

function createBrandOptions() {
  const select = selectBrand;
  brands.forEach((brand) => {
    const option = document.createElement('option');
    option.text = brand;
    select.add(option);
  });
}

createBrandOptions();

function createModelOptions() {
  const selectedBrand = document.getElementById('brand').value;
  const select = selectModel;
  const models = auto[selectedBrand];
  select.innerHTML = '';
  models.forEach((model) => {
    const option = document.createElement('option');
    option.text = model;
    select.add(option);
  });
}

createModelOptions();

selectBrand.addEventListener('change', createModelOptions);

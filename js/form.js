document.addEventListener("DOMContentLoaded", function () {
  let selector = document.querySelector("input[type='tel']");
  let e = new Inputmask("+7 (999) 999-99-99");

  e.mask(selector);

  //валидация
  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      mail: {
        required: true,
        email: true
      },
    },
  });
});
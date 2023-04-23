// получаем форму
const form = document.getElementById("feedback-form");

// получаем модальное окно
const modal = document.querySelector(".modal");

// при отправке формы
form.addEventListener("submit", function (event) {
  // предотвращаем отправку формы по умолчанию
  event.preventDefault();

  // показываем модальное окно
  modal.style.display = "block";

  // добавляем класс для анимации появления модального окна
  modal.querySelector(".modal-content").classList.add("fade-in");

  // через 3 секунды скрываем модальное окно и удаляем класс анимации
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".modal-content").classList.remove("fade-in");
  }, 3000);
});

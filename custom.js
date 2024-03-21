document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.bankruptcy__swiper', {
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper2 = new Swiper('.family__swiper', {
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const banks = new Swiper('.banks__swiper', {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 'auto',
        centeredSlides: true,
        breakpoints: {
            1280: {
              spaceBetween: 20,
            },
        }
    });

    /* Инпутмаск*/
    $("input.tel").inputmask("+7 (999)-999-99-99");

    function validate() {
        const phone = $("input.tel").inputmask('unmaskedvalue');
        const regex = /^[0-9]+$/;
        const telTrue = phone.length === 10 && phone.match(regex);
        const nameTrue = document.querySelector('input.name').value.trim() !== '';
        const checkTrue = document.querySelector('.checkbox-hidden').checked;
        if (nameTrue === false) { document.querySelector('.big-form__form .invalid').style.display = 'block' }
        if (telTrue === false) { document.querySelector('.big-form__form .invalid').style.display = 'block' }
        if (checkTrue === false) { document.querySelector('.big-form__form .invalid').style.display = 'block' }
        return telTrue && nameTrue && checkTrue;
    }

    $('.family__form').on('submit', (e) => {
        e.preventDefault();
        const form = document.querySelector('.family__form');
        let formData = new FormData(form);
        let val = validate();
        if (val) {
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData,
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false,
                success: function () {
                    document.querySelector('.big-form__form .invalid').style.display = 'none'
                },
                error: function (result) {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            });
        }

    });
});
const counters = document.querySelectorAll('[data-counter]');
if (counters) {
	counters.forEach(counter => {
		counter.addEventListener('click', e => {
			const target = e.target;
            e.preventDefault()
			if (target.closest('.counter__button')) {
				if (target.closest('.counter').querySelector('input').value == '' && (target.classList.contains('counter__button_minus') || target.classList.contains('counter__button_plus'))) {
					target.closest('.counter').querySelector('input').value = 1;
                    e.preventDefault()
				}

				let value = parseInt(target.closest('.counter').querySelector('input').value);

				if (target.classList.contains('counter__button_plus')) {
					value++;
                    e.preventDefault()
				} else {
					--value;
                    e.preventDefault()
				}

				if (value <= 1) {
					value = 1;
					target.closest('.counter',).querySelector('.counter__button_minus').classList.add('disabled')
				} else {
					target.closest('.counter').querySelector('.counter__button_minus').classList.remove('disabled')
				}

				target.closest('.counter').querySelector('input').value = value;
			}
		})
	})	
}

const counter = document.querySelectorAll('[data-counter]');

if (counters) {
	counters.forEach(counter => {
		counter.addEventListener('click', e => {
			const target = e.target;
            e.preventDefault()
			if (target.closest('.popup-counter__button')) {
				if (target.closest('.popup-counter').querySelector('input').value == '' && (target.classList.contains('counter__button_minus') || target.classList.contains('counter__button_plus'))) {
					target.closest('.popup-counter').querySelector('input').value = 1;
                    e.preventDefault()
				}

				let value = parseInt(target.closest('.popup-counter').querySelector('input').value);

				if (target.classList.contains('counter__button_plus')) {
					value++;
                    e.preventDefault()
				} else {
					--value;
                    e.preventDefault()
				}

				if (value <= 1) {
					value = 1;
					target.closest('.popup-counter').querySelector('.counter__button_minus').classList.add('disabled')
				} else {
					target.closest('.popup-counter').querySelector('.counter__button_minus').classList.remove('disabled')
				}

				target.closest('.popup-counter').querySelector('input').value = value;
			}
		})
	})	
}
const mobilecounter = document.querySelectorAll('[data-counter]');

if (counters) {
	counters.forEach(counter => {
		counter.addEventListener('click', e => {
			const target = e.target;
            e.preventDefault()
			if (target.closest('.menu-counter__button')) {
				if (target.closest('.menu-counter').querySelector('input').value == '' && (target.classList.contains('counter__button_minus') || target.classList.contains('counter__button_plus'))) {
					target.closest('.menu-counter').querySelector('input').value = 1;
                    e.preventDefault()
				}

				let value = parseInt(target.closest('.menu-counter').querySelector('input').value);

				if (target.classList.contains('counter__button_plus')) {
					value++;
                    e.preventDefault()
				} else {
					--value;
                    e.preventDefault()
				}

				if (value <= 1) {
					value = 1;
					target.closest('.menu-counter').querySelector('.counter__button_minus').classList.add('disabled')
				} else {
					target.closest('.menu-counter').querySelector('.counter__button_minus').classList.remove('disabled')
				}

				target.closest('.menu-counter').querySelector('input').value = value;
			}
		})
	})	
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        1264: {
            slidesPerView: 4,
            spaceBetween: 5,
        },

        884: {
            slidesPerView: 3,
        },
        764: {
            slidesPerView: 3.5,
        },
        500: {
            slidesPerView: 3,
        },
        417: {
            slidesPerView: 2.3,
        },
        320: {
            slidesPerView: 1.7,
        },
        0: {
            slidesPerView: 1.2,
        },
    }

});
var swiper = new Swiper(".stockSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        1264: {
            slidesPerView: 2.7,
        },

        884: {
            slidesPerView: 2,
        },
        764: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }

});
var swiper = new Swiper(".deliverySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        1264: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        884: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        764: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        582: {
            slidesPerView: 2.7,
            spaceBetween: 10,
        },
        400: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.7,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 1.3,
        },
    }

});

var swiper = new Swiper(".deliciousSwiper", {
    freeMode: true,
    breakpoints: {
        1437: {
            slidesPerView: 4.5,
            spaceBetween: 10,
        },

        1322: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        989: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        908: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        708: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1.5,
        },
    }

});

let unlock = true;
const timeout = 800;

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close__popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
            curentPopup.classList.add('open');
            curentPopup.addEventListener("click", function (e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper');

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(e){
    if(e.which===27){
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
})

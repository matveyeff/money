// FAQ Accordeon

var faqItem = document.getElementsByClassName('faq__item');

for (var i = 0; i < faqItem.length; i++) {
	faqItem[i].addEventListener('click', function(e) {
		e.preventDefault();
		if (!(this.classList.contains('faq__item_active'))) {
			for (var i = 0; i < faqItem.length; i++) {
				faqItem[i].classList.remove('faq__item_active');
			}
			this.classList.add('faq__item_active');
		}
		else if (this.classList.contains('faq__item_active')) {
			for (var i = 0; i < faqItem.length; i++) {
				faqItem[i].classList.remove('faq__item_active');
			}
		}
	})
}
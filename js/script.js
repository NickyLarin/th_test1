const ACCORDION_ACTIVE_CLASS = 'accordion_active'
const MODAL_ACTIVE_CLASS = 'modal_active'

const accordionHandleClick = (e) => {
    const currentAccordion = e.currentTarget
    const accordionSign = currentAccordion.querySelector('.accordion__sign')
    const accordionContent = currentAccordion.querySelector('.accordion__content')

    const isAccordionActive = currentAccordion.classList.contains(ACCORDION_ACTIVE_CLASS)

    if (isAccordionActive) {
        currentAccordion.classList.remove(ACCORDION_ACTIVE_CLASS)
        accordionSign.textContent = '+'
        accordionContent.style = null;
    } else {
        currentAccordion.classList.add(ACCORDION_ACTIVE_CLASS)
        accordionSign.textContent = '-'
        accordionContent.style.maxHeight = currentAccordion.scrollHeight + 'px'
    }
}

const handleCloseModal = (e) => {
    if (e.currentTarget !== e.target) return
    const modal = document.querySelector('.modal')
    modal.classList.remove(MODAL_ACTIVE_CLASS)    
}

const handleOpenModal = () => {
    const modal = document.querySelector('.modal')
    modal.classList.add(MODAL_ACTIVE_CLASS)
    modal.addEventListener('click', handleCloseModal)
}

document.addEventListener('DOMContentLoaded', () => {
    const accordionElem = document.querySelector('.accordion')
    accordionElem.addEventListener('click', accordionHandleClick)

    const sendButton = document.querySelector('.modal__button')
    sendButton.addEventListener('click', handleCloseModal)

    const closeButton = document.querySelector('.modal__close-button')
    closeButton.addEventListener('click', handleCloseModal)

    
    const registrationButtons = document.querySelector('.wrapper').getElementsByTagName('button')
    for (let buttonElem of registrationButtons) {
        buttonElem.addEventListener('click', handleOpenModal)
    }
})
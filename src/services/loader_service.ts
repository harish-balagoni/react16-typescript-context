export class LoaderService {
    constructor() {
        this.element = document.getElementById('loader');
    }

    private element: HTMLElement;
    show() {
        this.element.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    hide() {
        this.element.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

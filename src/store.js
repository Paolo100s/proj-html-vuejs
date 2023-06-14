import { reactive } from "vue";

export const store = reactive({
    pagesList: ['Home', 'Rates', 'Testimonials', 'FAQ', 'Blog', 'Contact'],
    solutions: [{
        image: 'src/assets/img/movers/avada-movers-serviceonephoto-final-200x128.jpg',
        title: 'Two Man Teams'
    },
    {
        image: 'src/assets/img/movers/avada-movers-servicethreephoto-final-200x128.jpg',
        title: 'We Do All The Lifting'
    },
    {
        image: 'src/assets/img/movers/avada-movers-servicetwophoto-final-200x128.jpg',
        title: 'Coast To Coast'
    }
    ]
})